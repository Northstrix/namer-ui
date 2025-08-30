"use client";

import { useApp } from "@/context/app-context";
import { db } from "@/lib/firebase";
import { doc, updateDoc, setDoc, increment } from "firebase/firestore";
import { useState } from "react";

const ANALYTICS_ENABLED = true;
const LOGGING_ENABLED = false;

const cleanMetricKey = (str: string) =>
  str.replace(/[.#$\[\]/ ]+/g, "_").toLowerCase();

export function useMetrics() {
  const { lang } = useApp(); // detect current language inside hook
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    if (!LOGGING_ENABLED) return;
    setLogs((prev) => [...prev, msg]);
    console.log(msg);
  };

  const metricsDocRef = doc(db, "data", "nextjsAppMetrics");

  // baseMetricKey is without language suffix
  async function sendAnalyticsIncrement(baseMetricKey: string): Promise<void> {
    if (!ANALYTICS_ENABLED) {
      addLog(`[Analytics disabled] Skipping metric: ${baseMetricKey}`);
      return;
    }

    // Append language here dynamically
    const fullMetricKey = `${baseMetricKey}:${lang}`;
    const safeKey = cleanMetricKey(fullMetricKey);

    try {
      await updateDoc(metricsDocRef, {
        [safeKey]: increment(1),
      });
      addLog(`[Analytics] Incremented metric '${safeKey}'`);
    } catch (error: any) {
      if (
        error.code === "not-found" ||
        error.message?.includes("No document to update")
      ) {
        try {
          await setDoc(metricsDocRef, { [safeKey]: 1 }, { merge: true });
          addLog(`[Analytics] Created metric '${safeKey}' with initial count`);
        } catch (setError: any) {
          addLog(`[Analytics] Failed to create metric '${safeKey}': ${setError.message || setError}`);
        }
      } else {
        addLog(`[Analytics] Failed to increment metric '${safeKey}': ${error.message || error}`);
      }
    }
  }

  return {
    logs,
    sendAnalyticsIncrement,
  };
}
