import React, { useEffect, useMemo, useState } from "react";
import { useLenis } from "lenis/react"; //  Import Lenis hook

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const lenis = useLenis(); //  Get Lenis instance

  //============================================================
  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const onChange = (e) => setReduceMotion(!!e.matches);
      setReduceMotion(!!mq.matches);

      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);

      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", onChange);
        else if (mq.removeListener) mq.removeListener(onChange);
      };
    }
  }, []);
  //============================================================

  //============================================================
useEffect(() => {
  // --- Fallback
  const onScroll = () => {
    const y = typeof window !== "undefined" ? (window.scrollY || document.documentElement.scrollTop || 0) : 0;
    setVisible(y > 300);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // initialize

  let handleLenis;
  if (lenis) {
    handleLenis = ({ scroll }) => {
      setVisible(scroll > 300);
    };
    lenis.on("scroll", handleLenis);
  }

  // Cleanup
  return () => {
    window.removeEventListener("scroll", onScroll);
    if (lenis && handleLenis) lenis.off("scroll", handleLenis);
  };
}, [lenis]);

  //============================================================

  //============================================================
  // Scroll-to-top handler (Lenis + fallback)
  const scrollToTop = () => {
    if (reduceMotion && lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else if (lenis) {
      lenis.scrollTo(0, { duration: 0.8 });
    } else {
      // Fallback for when Lenis isn't ready or disabled
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };
  //============================================================

  const size = 56;
  const zIndex = 1000;

  const STATIC_BASE_STYLE = useMemo(
    () => ({
      position: "fixed",
      right: 22,
      bottom: 28,
      width: size,
      height: size,
      borderRadius: "50%",
      border: "none",
      background: "linear-gradient(180deg,#37a6ff 0%, #0b5fff 100%)",
      color: "#fff",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      fontSize: 20,
      lineHeight: 1,
      WebkitTapHighlightColor: "transparent",
    }),
    [size]
  );

  const baseStyle = useMemo(() => {
    const visibleTransform = visible
      ? hover
        ? "translateY(0) scale(1.06)"
        : "translateY(0) scale(1)"
      : "translateY(8px) scale(0.96)";
    const transition = reduceMotion
      ? "none"
      : "opacity .22s ease, transform .18s cubic-bezier(.2,.9,.2,1)";
    const focusOutline = focused ? "3px solid rgba(255,255,255,0.95)" : undefined;
    const focusShadow = focused
      ? "0 4px 18px rgba(11,95,255,0.18), 0 2px 6px rgba(2,6,23,0.12)"
      : "0 8px 30px rgba(11,95,255,0.24), 0 2px 6px rgba(2,6,23,0.12)";

    return {
      ...STATIC_BASE_STYLE,
      transform: visibleTransform,
      opacity: visible ? 1 : 0,
      transition,
      zIndex,
      pointerEvents: visible ? "auto" : "none",
      outline: focusOutline,
      outlineOffset: focused ? "3px" : undefined,
      boxShadow: focusShadow,
    };
  }, [STATIC_BASE_STYLE, visible, hover, focused, reduceMotion, zIndex]);

  const tooltipStyle = useMemo(
    () => ({
      position: "fixed",
      right: 22 + (size - 48) / 2,
      bottom: 28 + size + 10,
      transform: hover ? "translateY(0)" : "translateY(6px)",
      opacity: hover ? 1 : 0,
      transition: reduceMotion ? "none" : "opacity .18s ease, transform .18s ease",
      background: "rgba(15,18,25,0.9)",
      color: "#fff",
      padding: "6px 10px",
      borderRadius: 8,
      fontSize: 13,
      boxShadow: "0 6px 18px rgba(2,6,23,0.28)",
      zIndex: zIndex - 1,
      pointerEvents: "none",
      whiteSpace: "nowrap",
    }),
    [hover, reduceMotion, size, zIndex]
  );

  return (
    <>
      <div style={tooltipStyle} aria-hidden={!hover}>
        Back to top
      </div>

      <button
        type="button"
        aria-label="Back to top"
        tabIndex={visible ? 0 : -1}
        onClick={scrollToTop}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => {
          setFocused(true);
          setHover(true);
        }}
        onBlur={() => {
          setFocused(false);
          setHover(false);
        }}
        style={baseStyle}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M12 5v14"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12l7-7 7 7"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
