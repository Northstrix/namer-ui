"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

function BlurText({
  texts,
  className,
  monthYearColor,
  monthYearFontSize,
  monthYearFontWeight,
}: {
  texts: string[];
  className?: string;
  monthYearColor?: string;
  monthYearFontSize?: string | number;
  monthYearFontWeight?: string | number;
}) {
  const [display, setDisplay] = useState(texts[0] || "");

  useEffect(() => {
    if (texts[0] && texts[0] !== display) setDisplay(texts[0]);
  }, [texts, display]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={display}
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.36 }}
        className={`inline-block ${className || ""}`}
        style={{
          color: monthYearColor,
          fontSize: monthYearFontSize,
          fontWeight: monthYearFontWeight,
        }}
      >
        {display}
      </motion.span>
    </AnimatePresence>
  );
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export type SelectionMode = "none" | "single" | "multiple" | "limited";

export interface CalendarCustomProps {
  bgColor?: string;
  outlineColor?: string;
  outlineWidth?: number;
  outlineRadius?: number | string;
  padding?: string;
  dayButtonWidth?: number;
  dayButtonHeight?: number;
  navButtonWidth?: number;
  navButtonHeight?: number;
  horizontalGap?: number;
  verticalGap?: number;
  headerSpacing?: number;
  dayButtonFontSize?: string;
  weekLabelFontSize?: string;
  monthYearFontSize?: string;
  dayFontWeight?: string;
  weekLabelFontWeight?: string;
  monthYearFontWeight?: string;
  dayBorderWidth?: number;
  dayBorderRadius?: number | string;
  navBorderWidth?: number;
  navBorderRadius?: number | string;
  chevronIconSize?: number;
  chevronStrokeWidth?: number;
  transitionDuration?: number;
  dayButtondefaultBg?: string;
  dayButtondefaultText?: string;
  dayButtondefaultBorder?: string;
  dayButtonhoverBg?: string;
  dayButtonhoverText?: string;
  dayButtonhoverBorder?: string;
  dayButtonactiveBg?: string;
  dayButtonactiveText?: string;
  dayButtonactiveBorder?: string;
  navButtondefaultBg?: string;
  navButtondefaultText?: string;
  navButtondefaultBorder?: string;
  navButtonhoverBg?: string;
  navButtonhoverText?: string;
  navButtonhoverBorder?: string;
  weekLabelColor?: string;
  monthYearColor?: string;
}

export interface CalendarProps {
  isRTL?: boolean;
  selected?: Date | Date[];
  onSelect?: (date: Date | Date[]) => void;
  onDaySelect?: (date: Date, all: Date[]) => void;
  onDayUnselect?: (date: Date, all: Date[]) => void;
  onMonthChange?: (date: Date) => void;
  disabledDates?: Date[];
  disabledWeekdays?: number[];
  disableAll?: boolean;
  referenceDate?: Date;
  disablePastDates?: boolean;
  disableFutureDates?: boolean;
  includeReferenceDate?: boolean;
  disablePastMonths?: boolean;
  disableFutureMonths?: boolean;
  minDate?: Date;
  maxDate?: Date;
  selectionMode?: SelectionMode;
  limitCount?: number;
  dayNames?: string[];
  monthNames?: string[];
  monthTrim?: number;
  weekLabelTrim?: number;
  custom?: CalendarCustomProps;
  disableBeforeReference?: boolean;
  disableAfterReference?: boolean;
}

export function Calendar({
  isRTL = false,
  selected,
  onSelect,
  onDaySelect,
  onDayUnselect,
  onMonthChange,
  disabledDates = [],
  disabledWeekdays = [],
  disableAll = false,
  referenceDate,
  disablePastDates = false,
  disableFutureDates = false,
  includeReferenceDate = false,
  disablePastMonths = false,
  disableFutureMonths = false,
  minDate,
  maxDate,
  selectionMode = "single",
  limitCount,
  dayNames,
  monthNames,
  monthTrim,
  weekLabelTrim,
  custom,
  disableBeforeReference = false,
  disableAfterReference = false,
}: CalendarProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const refDate = referenceDate
    ? new Date(referenceDate)
    : new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const defaultLTR = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const defaultRTL = ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"];
  const labels = dayNames || (isRTL ? defaultRTL : defaultLTR);

  const monthsLTR = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthsRTL = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];
  const months = monthNames || (isRTL ? monthsRTL : monthsLTR);

  const {
    bgColor = "#0f0f0f",
    outlineColor = "#2e2e2e",
    outlineWidth = 1,
    outlineRadius = 8,
    padding = "16px",
    dayButtonWidth = 36,
    dayButtonHeight = 36,
    navButtonWidth = 28,
    navButtonHeight = 28,
    horizontalGap = 8,
    verticalGap = 8,
    headerSpacing = 12,
    dayButtonFontSize = "14px",
    weekLabelFontSize = "13px",
    monthYearFontSize = "16px",
    dayFontWeight = "500",
    weekLabelFontWeight = "600",
    monthYearFontWeight = "700",
    dayBorderWidth = 1,
    dayBorderRadius = 6,
    navBorderWidth = 1,
    navBorderRadius = 6,
    chevronIconSize = 16,
    chevronStrokeWidth = 2,
    transitionDuration = 0.3,
    dayButtondefaultBg = "transparent",
    dayButtondefaultText = "#fff",
    dayButtondefaultBorder = "#444",
    dayButtonhoverBg = "#1e1e1e",
    dayButtonhoverText = "#fff",
    dayButtonhoverBorder = "#555",
    dayButtonactiveBg = "#555",
    dayButtonactiveText = "#fff",
    dayButtonactiveBorder = "#777",
    navButtondefaultBg = "#111",
    navButtondefaultText = "#fff",
    navButtondefaultBorder = "#333",
    navButtonhoverBg = "#222",
    navButtonhoverText = "#fff",
    navButtonhoverBorder = "#555",
    weekLabelColor = "#a1a1aa",
    monthYearColor = "#ffffff",
  } = custom || {};

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>(
    Array.isArray(selected) ? selected : selected ? [selected] : []
  );
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const monthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentMonth = months[monthIndex];
  const trimmedMonth =
    monthTrim && currentMonth.length > monthTrim
      ? currentMonth.slice(0, monthTrim)
      : currentMonth;

  const firstDayOfMonth = new Date(currentYear, monthIndex, 1);
  const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  const totalWidth =
    outlineWidth * 2 +
    7 * dayButtonWidth +
    6 * horizontalGap +
    2 * parseInt(padding);

  const limitFull =
    selectionMode === "limited" && limitCount && selectedDates.length >= limitCount;

  // ✅ Fixed: Reference rules exclude the reference date unless explicitly included
  const isDateDisabled = (d: Date) => {
    const dd = new Date(d);
    dd.setHours(0, 0, 0, 0);

    const past = disablePastDates && dd < today;
    const future = disableFutureDates && dd > today;
    const week = disabledWeekdays.includes(dd.getDay());
    const dateMatch = disabledDates.some((x) => isSameDay(dd, x));
    const beforeMin = minDate && dd < minDate;
    const afterMax = maxDate && dd > maxDate;

    let beforeRef = false;
    let afterRef = false;

    if (disableBeforeReference) {
      beforeRef = includeReferenceDate ? dd <= refDate : dd < refDate;
    }
    if (disableAfterReference) {
      afterRef = includeReferenceDate ? dd >= refDate : dd > refDate;
    }

    // ✅ Ensure reference date itself is NOT disabled unless included explicitly
    if (isSameDay(dd, refDate) && !includeReferenceDate) {
      beforeRef = false;
      afterRef = false;
    }

    return past || future || week || dateMatch || beforeMin || afterMax || beforeRef || afterRef;
  };

  const isSelected = (d: Date) => selectedDates.some((s) => isSameDay(d, s));

  const handleDayClick = (day: number) => {
    if (disableAll) return;
    const date = new Date(currentYear, monthIndex, day, 12);
    if (isDateDisabled(date)) return;
    if (selectionMode === "none") return;

    setSelectedDates((prev) => {
      const exists = prev.some((x) => isSameDay(x, date));
      let next: Date[];

      if (exists) {
        next = prev.filter((x) => !isSameDay(x, date));
        onDayUnselect?.(date, next);
        onSelect?.(next);
      } else if (limitFull && selectionMode === "limited") {
        return prev;
      } else if (selectionMode === "single") {
        next = [date];
        onDaySelect?.(date, next);
        onSelect?.(date);
      } else {
        next = [...prev, date];
        onDaySelect?.(date, next);
        onSelect?.(next);
      }
      return next;
    });
  };

  function canGoPrev() {
    const prev = new Date(currentYear, monthIndex - 1, 1);
    if (disablePastMonths && prev < new Date(today.getFullYear(), today.getMonth(), 1))
      return false;
    if (minDate) {
      const minMonth = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
      if (prev < minMonth) return false;
    }
    return true;
  }

  function canGoNext() {
    const next = new Date(currentYear, monthIndex + 1, 1);
    if (disableFutureMonths && next > new Date(today.getFullYear(), today.getMonth(), 1))
      return false;
    if (maxDate) {
      const maxMonth = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
      if (next > maxMonth) return false;
    }
    return true;
  }

  const goPrev = () => {
    if (!canGoPrev()) return;
    const newDate = new Date(currentYear, monthIndex - 1, 1);
    setDirection("prev");
    setCurrentDate(newDate);
    onMonthChange?.(newDate);
  };

  const goNext = () => {
    if (!canGoNext()) return;
    const newDate = new Date(currentYear, monthIndex + 1, 1);
    setDirection("next");
    setCurrentDate(newDate);
    onMonthChange?.(newDate);
  };

  const goPrevUsingGesture = () => {
    if (!canGoPrev()) return;
    const newDate = isRTL
      ? new Date(currentYear, monthIndex + 1, 1) // RTL: swipe right → previous month visually, next in logic
      : new Date(currentYear, monthIndex - 1, 1); // LTR: swipe right → previous month
    setDirection(isRTL ? "prev" : "next");
    setCurrentDate(newDate);
    onMonthChange?.(newDate);
  };

  const goNextUsingGesture = () => {
    if (!canGoNext()) return;
    const newDate = isRTL
      ? new Date(currentYear, monthIndex - 1, 1) // RTL: swipe left → next month visually, previous in logic
      : new Date(currentYear, monthIndex + 1, 1); // LTR: swipe left → next month
    setDirection(isRTL ? "next" : "prev");
    setCurrentDate(newDate);
    onMonthChange?.(newDate);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goNextUsingGesture,
    onSwipedRight: goPrevUsingGesture,
  });

  const renderDays = () => {
    const nodes: JSX.Element[] = [];

    for (let i = 0; i < 7; i++) {
      let label = labels[i];
      if (weekLabelTrim && label.length > weekLabelTrim)
        label = label.slice(0, weekLabelTrim);
      nodes.push(
        <div
          key={`header-${i}`}
          style={{
            width: dayButtonWidth,
            height: dayButtonHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: weekLabelFontSize,
            fontWeight: weekLabelFontWeight,
            color: weekLabelColor,
            marginBottom: verticalGap / 2,
            userSelect: "none",
          }}
        >
          {label}
        </div>
      );
    }

    for (let i = 0; i < firstDayOfWeek; i++)
      nodes.push(
        <div key={`empty-${i}`} style={{ width: dayButtonWidth, height: dayButtonHeight }} />
      );

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, monthIndex, day, 12);
      const disabled = isDateDisabled(date);
      const selected = isSelected(date);
      const hardDisabled = limitFull && !selected && selectionMode === "limited";
      const isDisabled = Boolean(disableAll || disabled || hardDisabled);

      nodes.push(
        <div key={`day-${day}`} style={{ width: dayButtonWidth, height: dayButtonHeight }}>
          <button
            disabled={!!isDisabled}
            onClick={() => handleDayClick(day)}
            style={{
              width: dayButtonWidth,
              height: dayButtonHeight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: dayBorderRadius,
              borderWidth: dayBorderWidth,
              borderStyle: "solid",
              borderColor: selected ? dayButtonactiveBorder : dayButtondefaultBorder,
              backgroundColor: selected ? dayButtonactiveBg : dayButtondefaultBg,
              color: selected ? dayButtonactiveText : dayButtondefaultText,
              fontSize: dayButtonFontSize,
              fontWeight: dayFontWeight,
              lineHeight: 1,
              textAlign: "center",
              cursor: isDisabled ? "not-allowed" : "pointer",
              opacity: isDisabled ? 0.4 : 1,
              transition: `all ${transitionDuration}s ease`,
            }}
            onMouseEnter={(e) => {
              if (!selected && !isDisabled) {
                e.currentTarget.style.backgroundColor = dayButtonhoverBg!;
                e.currentTarget.style.borderColor = dayButtonhoverBorder!;
                e.currentTarget.style.color = dayButtonhoverText!;
              }
            }}
            onMouseLeave={(e) => {
              if (!selected) {
                e.currentTarget.style.backgroundColor = dayButtondefaultBg!;
                e.currentTarget.style.borderColor = dayButtondefaultBorder!;
                e.currentTarget.style.color = dayButtondefaultText!;
              }
            }}
          >
            {day}
          </button>
        </div>
      );
    }

    return nodes;
  };

  return (
    <div
      {...handlers}
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        backgroundColor: bgColor,
        border: `${outlineWidth}px solid ${outlineColor}`,
        borderRadius: outlineRadius,
        padding,
        width: totalWidth,
        overflow: "hidden", // ✅ Prevent animation overflow
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ marginBottom: headerSpacing }}
      >
        <BlurText
          texts={[`${trimmedMonth} ${currentYear}`]}
          monthYearColor={monthYearColor}
          monthYearFontSize={monthYearFontSize}
          monthYearFontWeight={monthYearFontWeight}
        />
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            disabled={!canGoPrev()}
            style={{
              width: navButtonWidth,
              height: navButtonHeight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: navBorderRadius,
              borderWidth: navBorderWidth,
              borderStyle: "solid",
              borderColor: navButtondefaultBorder,
              backgroundColor: navButtondefaultBg,
              color: navButtondefaultText,
              opacity: canGoPrev() ? 1 : 0.4,
              cursor: canGoPrev() ? "pointer" : "not-allowed",
              transition: `all ${transitionDuration}s ease`,
            }}
            onMouseEnter={(e) => {
              if (canGoPrev()) {
                e.currentTarget.style.backgroundColor = navButtonhoverBg!;
                e.currentTarget.style.borderColor = navButtonhoverBorder!;
                e.currentTarget.style.color = navButtonhoverText!;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = navButtondefaultBg!;
              e.currentTarget.style.borderColor = navButtondefaultBorder!;
              e.currentTarget.style.color = navButtondefaultText!;
            }}
          >
            {isRTL ? (
              <ChevronRight size={chevronIconSize} strokeWidth={chevronStrokeWidth} />
            ) : (
              <ChevronLeft size={chevronIconSize} strokeWidth={chevronStrokeWidth} />
            )}
          </button>

          <button
            onClick={goNext}
            disabled={!canGoNext()}
            style={{
              width: navButtonWidth,
              height: navButtonHeight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: navBorderRadius,
              borderWidth: navBorderWidth,
              borderStyle: "solid",
              borderColor: navButtondefaultBorder,
              backgroundColor: navButtondefaultBg,
              color: navButtondefaultText,
              opacity: canGoNext() ? 1 : 0.4,
              cursor: canGoNext() ? "pointer" : "not-allowed",
              transition: `all ${transitionDuration}s ease`,
            }}
            onMouseEnter={(e) => {
              if (canGoNext()) {
                e.currentTarget.style.backgroundColor = navButtonhoverBg!;
                e.currentTarget.style.borderColor = navButtonhoverBorder!;
                e.currentTarget.style.color = navButtonhoverText!;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = navButtondefaultBg!;
              e.currentTarget.style.borderColor = navButtondefaultBorder!;
              e.currentTarget.style.color = navButtondefaultText!;
            }}
          >
            {isRTL ? (
              <ChevronLeft size={chevronIconSize} strokeWidth={chevronStrokeWidth} />
            ) : (
              <ChevronRight size={chevronIconSize} strokeWidth={chevronStrokeWidth} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`${monthIndex}-${currentYear}`}
          custom={direction}
          variants={{
            enter: (d: "next" | "prev") => ({
              x: isRTL ? (d === "next" ? 40 : -40) : d === "next" ? -40 : 40,
              opacity: 0,
            }),
            center: { x: 0, opacity: 1 },
            exit: (d: "next" | "prev") => ({
              x: isRTL ? (d === "next" ? -40 : 40) : d === "next" ? 40 : -40,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="grid grid-cols-7 text-center w-full"
          style={{ gap: `${verticalGap}px ${horizontalGap}px` }}
        >
          {renderDays()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
