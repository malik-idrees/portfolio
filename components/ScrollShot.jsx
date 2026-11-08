"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Screenshot frame that scrolls a tall full-page image from top to bottom
 * while the parent card (.card) is hovered. Speed is constant regardless of
 * screenshot height (~ 450px per second).
 *
 * sources: ordered list of image URLs. If one fails to load, the next is tried.
 */
export default function ScrollShot({ sources, alt, ratio = "16 / 10" }) {
  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [vars, setVars] = useState({ "--shift": "0px", "--dur": "0s" });

  const measure = () => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;
    const distance = Math.max(0, img.offsetHeight - frame.offsetHeight);
    const seconds = Math.min(14, Math.max(1.5, distance / 450));
    setVars({ "--shift": `-${distance}px`, "--dur": `${seconds}s` });
  };

  // Images can finish loading before React hydrates, so check on mount too
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      if (img.naturalWidth > 0) {
        setLoaded(true);
        measure();
      } else {
        handleError();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const handleError = () => {
    if (index < sources.length - 1) {
      setLoaded(false);
      setIndex(index + 1);
    }
  };

  return (
    <div
      ref={frameRef}
      className={`shot${loaded ? " is-loaded" : ""}`}
      style={{ aspectRatio: ratio, ...vars }}
      onMouseEnter={measure}
      onFocus={measure}
    >
      <div className="shot-bar" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="shot-loading" aria-hidden="true">Loading preview…</div>
      <img
        key={sources[index]}
        ref={imgRef}
        src={sources[index]}
        alt={alt}
        loading="lazy"
        onLoad={() => {
          setLoaded(true);
          measure();
        }}
        onError={handleError}
      />
      <div className="shot-hint" aria-hidden="true">Hover to scroll</div>
    </div>
  );
}
