"use client";
import React, { forwardRef, ReactNode } from "react";

interface AlertProps {
  isRTL?: boolean;
  isMobile?: boolean;
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  borderRadius?: string;        // default: "8px"
  borderWidth?: string;         // default: "1px"
  borderColor?: string;         // default: "#333"
  backgroundColor?: string;     // default: "transparent"
  titleColor?: string;          // default: "#fff"
  titleFontSize?: string;       // default: "1.25rem" (20px)
  descriptionFontSize?: string; // default: "0.875rem" (14px)
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      isRTL = false,
      isMobile = false,
      icon,
      title,
      description,
      borderRadius = "8px",
      borderWidth = "1px",
      borderColor = "#333",
      backgroundColor = "transparent",
      titleColor = "#fff",
      titleFontSize = "1.25rem",
      descriptionFontSize = "0.925rem",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        dir={isRTL ? "rtl" : "ltr"}
        style={{
          borderRadius,
          borderWidth,
          borderStyle: "solid",
          borderColor,
          backgroundColor,
          color: titleColor,
          padding: "16px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          justifyContent: isMobile ? "center" : undefined,
          width: "100%",
          userSelect: "text",
          textAlign: isMobile ? "center" : undefined,
        }}
        {...props}
      >
        {/* Desktop only icon */}
        {!isMobile && icon && (
          <div
            className="alert-icon"
            style={{
              marginRight: isRTL ? undefined : "16px",
              marginLeft: isRTL ? "16px" : undefined,
              marginTop: 2,
              flexShrink: 0,
              display: "flex",
              alignItems: "flex-start",
              color: "inherit",
            }}
          >
            {icon}
          </div>
        )}

        <div className="alert-content" style={{ flex: "1 1 auto", color: "inherit" }}>
          {/* Mobile title row → icon + space + title + space + icon */}
          {isMobile ? (
            <div
              className="alert-title-row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem", // ⬅️ space between icons and title
                marginBottom: 8,
              }}
            >
              {icon}
              <h5
                className="alert-title"
                style={{
                  fontWeight: 600,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: titleColor,
                  fontSize: titleFontSize,
                }}
              >
                {title}
              </h5>
              {icon}
            </div>
          ) : (
            <h5
              className="alert-title"
              style={{
                marginBottom: 4,
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                color: titleColor,
                fontSize: titleFontSize,
              }}
            >
              {title}
            </h5>
          )}

          <div
            className="alert-description"
            style={{
              fontSize: descriptionFontSize,
              lineHeight: 1.5,
              color: "inherit",
            }}
          >
            {description}
          </div>
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert };
