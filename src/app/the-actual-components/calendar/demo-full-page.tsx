"use client";
import React, { useState } from "react";
import { Calendar } from "./Calendar";
import { useTranslation } from "@/context/app-context";

export default function CalendarMegaDemo() {
  const [selectedIt, setSelectedIt] = useState<Date[]>([]);

  const italianDayNames = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
  const spanishDayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const cantoneseDayNames = ["日", "一", "二", "三", "四", "五", "六"];
  const t = useTranslation();

  const italianMonthNames = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre",
  ];
  const spanishMonthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ];
  const cantoneseMonthNames = [
    "一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月",
  ];

  const logSelect = (date: Date | Date[]) => console.log("Selected:", date);
  const logDaySelect = (date: Date, all: Date[]) =>
    console.log("Day selected:", date, "All:", all);
  const logDayUnselect = (date: Date, all: Date[]) =>
    console.log("Day unselected:", date, "All:", all);
  const logMonthChange = (date: Date) =>
    console.log("Month changed to:", date.toDateString());

  return (
    <div
      style={{
        display: "flex-column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 36,
      }}
    >
      <div style={{ textAlign: 'center', color: '#eee', fontSize: 20, marginBottom: 40 }}>{t("calendar_note_1")}</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 36,
        }}
      >
        {/* English */}
        <div style={{ color: "#fff", textAlign: "center", width: 350 }}>
          <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
            Outline #242424, radius 8px, day button 36×36, 8px gap between day buttons, single-day selection,
            active colors: background #00A7FA, border #00A7FA, text #000000. Pre-selected date: today.
          </p>
          <Calendar
            isRTL={false}
            selected={new Date()} 
            onSelect={logSelect}
            onDaySelect={logDaySelect}
            onDayUnselect={logDayUnselect}
            onMonthChange={logMonthChange}
            custom={{
              bgColor: "#000000",
              outlineColor: "#242424",
              outlineWidth: 1,
              outlineRadius: 8,
              padding: "24px",
              dayButtonWidth: 36,
              dayButtonHeight: 36,
              horizontalGap: 8,
              verticalGap: 8,
              dayBorderRadius: 8,
              navBorderRadius: 8,
              dayButtonFontSize: "14px",
              weekLabelFontSize: "13px",
              monthYearFontSize: "16px",
              dayFontWeight: "500",
              weekLabelFontWeight: "600",
              monthYearFontWeight: "700",
              chevronIconSize: 16,
              chevronStrokeWidth: 2,
              dayButtondefaultBg: "transparent",
              dayButtondefaultBorder: "#242424",
              dayButtondefaultText: "#ccc",
              dayButtonhoverBg: "#242424",
              dayButtonhoverBorder: "#242424",
              dayButtonhoverText: "#fff",
              dayButtonactiveBg: "#00A7FA",
              dayButtonactiveBorder: "#00A7FA",
              dayButtonactiveText: "#000000",
              navButtondefaultBg: "#000000",
              navButtondefaultBorder: "#242424",
              navButtondefaultText: "#ccc",
              navButtonhoverBg: "#242424",
              navButtonhoverBorder: "#242424",
              navButtonhoverText: "#fff",
            }}
          />
        </div>

        {/* Hebrew */}
        <div style={{ color: "#fff", textAlign: "center", direction: "rtl", width: 328 }}>
          <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
            Outline #262626, radius 16px, circular day/nav buttons, 8px gap between day buttons, RTL layout,
            active colors: background #6e30e5, border #894aff, text #fff, weekday 6 disabled.
          </p>
          <Calendar
            isRTL
            onSelect={logSelect}
            onDaySelect={logDaySelect}
            onDayUnselect={logDayUnselect}
            onMonthChange={logMonthChange}
            disabledWeekdays={[6]}
            custom={{
              bgColor: "#0a0a0a",
              outlineColor: "#262626",
              outlineWidth: 1,
              outlineRadius: 16,
              padding: "20px",
              dayButtonWidth: 34,
              dayButtonHeight: 34,
              horizontalGap: 8,
              verticalGap: 8,
              dayBorderRadius: 50,
              navBorderRadius: 50,
              dayButtonFontSize: "14px",
              weekLabelFontSize: "16px",
              monthYearFontSize: "16px",
              dayFontWeight: "500",
              weekLabelFontWeight: "600",
              monthYearFontWeight: "700",
              chevronIconSize: 16,
              chevronStrokeWidth: 2,
              dayButtondefaultBg: "transparent",
              dayButtondefaultBorder: "#262626",
              dayButtondefaultText: "#ccc",
              dayButtonhoverBg: "#161616",
              dayButtonhoverBorder: "#363636",
              dayButtonhoverText: "#fff",
              dayButtonactiveBg: "#6e30e5",
              dayButtonactiveBorder: "#894aff",
              dayButtonactiveText: "#fff",
              navButtondefaultBg: "#0a0a0a",
              navButtondefaultBorder: "#262626",
              navButtondefaultText: "#ccc",
              navButtonhoverBg: "#161616",
              navButtonhoverBorder: "#363636",
              navButtonhoverText: "#fff",
            }}
          />
        </div>

        {/* Italian */}
        <div style={{ color: "#fff", textAlign: "center", width: 304 }}>
          <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
            Outline #2e2e2e, square day buttons 32×32, 7×14px gap between day buttons, circular nav buttons,
            multiple selection mode with 5-day limit, disablePastMonths true,
            active colors: background #d400ff, border #9b19b9, text #fff.
          </p>
          <Calendar
            isRTL={false}
            selected={selectedIt}
            onSelect={(dates) => setSelectedIt(Array.isArray(dates) ? dates : [dates])}
            onDaySelect={logDaySelect}
            onDayUnselect={logDayUnselect}
            onMonthChange={logMonthChange}
            selectionMode="limited"
            limitCount={5}
            disablePastMonths
            dayNames={italianDayNames}
            monthNames={italianMonthNames}
            custom={{
              bgColor: "#141414",
              outlineColor: "#2e2e2e",
              outlineWidth: 1,
              outlineRadius: 6,
              padding: "18px",
              dayButtonWidth: 32,
              dayButtonHeight: 32,
              horizontalGap: 7,
              verticalGap: 14,
              dayBorderRadius: 0,
              navBorderRadius: 50,
              dayButtonFontSize: "13px",
              weekLabelFontSize: "12px",
              monthYearFontSize: "15px",
              dayFontWeight: "500",
              weekLabelFontWeight: "600",
              monthYearFontWeight: "700",
              chevronIconSize: 16,
              chevronStrokeWidth: 2,
              dayButtondefaultBg: "transparent",
              dayButtondefaultBorder: "#2e2e2e",
              dayButtondefaultText: "#aaa",
              dayButtonhoverBg: "#2e2e2e",
              dayButtonhoverBorder: "#2e2e2e",
              dayButtonhoverText: "#fff",
              dayButtonactiveBg: "#d400ff",
              dayButtonactiveBorder: "#9b19b9",
              dayButtonactiveText: "#fff",
              navButtondefaultBg: "#000000",
              navButtondefaultBorder: "#2e2e2e",
              navButtondefaultText: "#ccc",
              navButtonhoverBg: "#2e2e2e",
              navButtonhoverBorder: "#2e2e2e",
              navButtonhoverText: "#fff",
            }}
          />
        </div>

        {/* Spanish */}
        <div style={{ color: "#fff", textAlign: "center", width: 458 }}>
          <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
            Outline #363636, rectangular day buttons 48×32, 14×7px gap between day buttons,
            weekLabelTrim has a vlaue of 2, disablePastMonths true, past dates disabled, active colors: background #26acff,
            border #6fbfff, text #1a1a1a.
          </p>

          <Calendar
            isRTL={false}
            onSelect={logSelect}
            dayNames={spanishDayNames}
            monthNames={spanishMonthNames}
            weekLabelTrim={2}
            disablePastMonths
            referenceDate={new Date()}
            disableBeforeReference
            custom={{
              bgColor: "#1a1a1a",
              outlineColor: "#363636",
              outlineWidth: 1,
              outlineRadius: 6,
              padding: "18px",
              dayButtonWidth: 48,
              dayButtonHeight: 32,
              horizontalGap: 14,
              verticalGap: 7,
              dayBorderRadius: 6,
              navBorderRadius: 6,
              dayButtonFontSize: "12px",
              weekLabelFontSize: "13px",
              monthYearFontSize: "14px",
              dayFontWeight: "500",
              weekLabelFontWeight: "600",
              monthYearFontWeight: "700",
              chevronIconSize: 16,
              chevronStrokeWidth: 2,
              dayButtondefaultBg: "transparent",
              dayButtondefaultBorder: "#363636",
              dayButtondefaultText: "#bbb",
              dayButtonhoverBg: "#363636",
              dayButtonhoverBorder: "#363636",
              dayButtonhoverText: "#fff",
              dayButtonactiveBg: "#26acff",
              dayButtonactiveBorder: "#6fbfff",
              dayButtonactiveText: "#1a1a1a",
              navButtondefaultBg: "#1a1a1a",
              navButtondefaultBorder: "#363636",
              navButtondefaultText: "#bbb",
              navButtonhoverBg: "#363636",
              navButtonhoverBorder: "#363636",
              navButtonhoverText: "#fff",
            }}
          />
        </div>

        {/* Cantonese */}
        <div style={{ color: "#fff", textAlign: "center", width: 316 }}>
          <p style={{ marginBottom: 12, fontSize: 14, color: "#aaa", direction: "ltr" }}>
            Outline #3a3a3a, day button radius 10px, day button size 34×34, 6px gap between day buttons, disableFutureMonths true,
            default background #ff3b5b, hover background #ffde3b, active background #fff.
          </p>
          <Calendar
            isRTL={false}
            onSelect={logSelect}
            disableFutureMonths
            dayNames={cantoneseDayNames}
            monthNames={cantoneseMonthNames}
            custom={{
              bgColor: "#202020",
              outlineColor: "#3a3a3a",
              outlineWidth: 1,
              outlineRadius: 6,
              padding: "20px",
              dayButtonWidth: 34,
              dayButtonHeight: 34,
              navButtonWidth: 42,
              navButtonHeight: 28,
              horizontalGap: 6,
              verticalGap: 6,
              dayBorderRadius: 10,
              navBorderRadius: 50,
              dayButtonFontSize: "14px",
              weekLabelFontSize: "16px",
              monthYearFontSize: "18px",
              dayFontWeight: "500",
              weekLabelFontWeight: "600",
              monthYearFontWeight: "700",
              chevronIconSize: 22,
              chevronStrokeWidth: 2,
              dayButtondefaultBg: "#ff3b5b",
              dayButtondefaultBorder: "#ba3244",
              dayButtondefaultText: "#000000",
              dayButtonhoverBg: "#ffde3b",
              dayButtonhoverBorder: "#ff7c3b",
              dayButtonhoverText: "#000000",
              dayButtonactiveBg: "#fff",
              dayButtonactiveBorder: "#aaa",
              dayButtonactiveText: "#202020",
              navButtondefaultBg: "#111",
              navButtondefaultBorder: "#646464",
              navButtondefaultText: "#aaa",
              navButtonhoverBg: "#3a3a3a",
              navButtonhoverBorder: "#aaaaaa",
              navButtonhoverText: "#fff",
            }}
          />
        </div>
      </div>
    </div>
  );
}
