"use client";

import React, { useState } from "react";
import { componentsMetadata } from "@/lib/component-meta";
import { showcaseItems } from "@/app/(showcase)/showcase/page";
import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const LANGUAGES = ["en", "he", "es"] as const;
type Language = (typeof LANGUAGES)[number];

const EVENT_SUFFIXES = ["image-card:hovered", "button:clicked"];

const CUSTOM_EVENTS = LANGUAGES.map(
  (lang) => `hero-section-github-button:clicked:${lang}`
);

const get21stDevLinkEvents = (
  components: { id: string }[],
  langs: Language[]
) =>
  components.flatMap(({ id }) =>
    langs.map((lang) => `${id}:21st-dev-link:clicked:${lang}`)
  );

const getShowcaseCardClickEvent = (
  components: { id: string }[], // use id from showcaseItems
  langs: Language[]
) =>
  components.flatMap(({ id }) =>
    langs.map((lang) => `showcase-card:${id}:clicked:${lang}`)
  );

const cleanMetricKey = (str: string) =>
  str.replace(/[.#$\[\]/ ]+/g, "_").toLowerCase();

function Console({ logs }: { logs: string[] }) {
  return (
    <div
      role="log"
      aria-live="polite"
      tabIndex={0}
      style={{
        backgroundColor: "#121228",
        borderRadius: 8,
        flexGrow: 1,
        overflowY: "auto",
        padding: 14,
        fontFamily: "monospace",
        fontSize: 14,
        color: "#aaddff",
        maxHeight: "95vh",
        border: "1px solid #444",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
    >
      {logs.length > 0 ? (
        logs.map((logMsg, i) => <div key={i}>{logMsg}</div>)
      ) : (
        <p style={{ color: "#777" }}>No logs yet.</p>
      )}
    </div>
  );
}

export default function NextjsAppMetrics() {
  const [logs, setLogs] = useState<string[]>([]);
  const [initializing, setInitializing] = useState(false);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, msg]);
    console.log(msg);
  };

  const metricsDocRef = doc(db, "data", "nextjsAppMetrics");

  async function initializeFields(fieldsToCreate: string[]) {
    try {
      const snap = await getDoc(metricsDocRef);
      const existing = snap.exists() ? snap.data() : {};
      const toCreate: Record<string, number> = {};
      for (const field of fieldsToCreate) {
        if (!(field in existing)) toCreate[field] = 0;
      }
      if (Object.keys(toCreate).length > 0) {
        await setDoc(metricsDocRef, toCreate, { merge: true });
        addLog(`✅ Created ${Object.keys(toCreate).length} metric fields.`);
      } else {
        addLog("ℹ️ All metric fields already exist. No fields created.");
      }
    } catch (err: any) {
      addLog(`❌ Initialization error: ${err.message || err.toString()}`);
    }
  }

  const initializeAllMetrics = async () => {
    setInitializing(true);

    const metrics: string[] = [];

    for (const { id } of componentsMetadata) {
      for (const suffix of EVENT_SUFFIXES) {
        for (const lang of LANGUAGES) {
          metrics.push(cleanMetricKey(`${id}:${suffix}:${lang}`));
        }
      }
    }

    metrics.push(...get21stDevLinkEvents(componentsMetadata, LANGUAGES).map(cleanMetricKey));

    metrics.push(...CUSTOM_EVENTS.map(cleanMetricKey));

    metrics.push(...getShowcaseCardClickEvent(showcaseItems, LANGUAGES).map(cleanMetricKey));

    await initializeFields(metrics);

    setInitializing(false);
  };

  return (
    <section
      style={{
        maxWidth: 720,
        margin: "2rem auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1e1e2f",
        color: "#ddd",
        borderRadius: 8,
        padding: "24px 32px",
        boxShadow: "0 0 12px rgba(0,0,0,0.8)",
        display: "flex",
        flexDirection: "column",
        height: "95vh",
      }}
    >
      <h2 style={{ color: "#a5c8ff", marginBottom: "0.5em" }}>
        Firebase Analytics: Initialize Metrics
      </h2>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.4,
          color: "#bbb",
          marginBottom: "1.5rem",
        }}
      >
        Creates missing Firestore metric fields initialized to 0 for all tracked events and languages.
      </p>
      <div style={{ marginBottom: 32 }}>
        <button
          onClick={initializeAllMetrics}
          disabled={initializing}
          style={{
            backgroundColor: "#3a3a6e",
            border: "none",
            borderRadius: 8,
            padding: "0.6em 1.4em",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#e0e0ff",
            cursor: initializing ? "not-allowed" : "pointer",
            opacity: initializing ? 0.5 : 1,
          }}
        >
          {initializing ? "Initializing..." : "Initialize All Metrics"}
        </button>
      </div>
      <Console logs={logs} />
    </section>
  );
}
