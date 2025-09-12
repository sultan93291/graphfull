"use client";
import { useLayoutEffect, useRef, useCallback } from "react";


const snap = v => {
  if (typeof window === "undefined") return v;
  const dpr = window.devicePixelRatio || 1;
  return Math.round(v * dpr) / dpr;
};


export const ScrollStackItem = ({
  children,
  className = "",
  itemClassName = "",
}) => {
  return (
    <div
      className={`scroll-stack-card relative w-full rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.25)] will-change-transform ${
        itemClassName || className
      }`.trim()}
      style={{
        transition: "none",
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};


const ScrollStack = ({
  children,
  className = "",
  stackPosition = "28vh",
  peekOffset = 12, 
  arriveStartOffset = 0.0, 
  arriveEndOffset = 0.4, 
  cardGap = 32, 
  bottomGapPx = 40, 
}) => {
  const rootRef = useRef(null);
  const cardsRef = useRef([]);
  const tickingRef = useRef(false);

  const getOffsetTop = el => {
    const r = el.getBoundingClientRect();
    return r.top + window.scrollY;
  };

  const collectCards = useCallback(() => {
    if (!rootRef.current) return [];
    const list = Array.from(
      rootRef.current.querySelectorAll(".scroll-stack-card")
    );
    cardsRef.current = list;

    list.forEach((card, i) => {
     
      const initialPeek = -(peekOffset * (list.length - i - 1));
      card.style.marginBottom = `${cardGap}px`;
      card.style.transformOrigin = "top center";

      card.style.position = "sticky";
      card.style.top = stackPosition; 
    
      card.style.transform = `translate3d(0, ${snap(initialPeek)}px, 0)`;
    });
    return list;
  }, [stackPosition, peekOffset, cardGap]);

  const update = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const viewportH = window.innerHeight;
    const stackTopPx =
      typeof stackPosition === "string" && stackPosition.includes("vh")
        ? (parseFloat(stackPosition) / 100) * viewportH
        : parseFloat(stackPosition);

    cards.forEach((card, i) => {
      const cardTopOnPage = getOffsetTop(card);
      const triggerStart = cardTopOnPage - stackTopPx;
      const arriveStart = triggerStart + arriveStartOffset * viewportH;
      const arriveEnd = triggerStart + arriveEndOffset * viewportH;

      const scrollY = window.scrollY;
      const t = Math.max(
        0,
        Math.min(
          1,
          (scrollY - arriveStart) / Math.max(1, arriveEnd - arriveStart)
        )
      );

      const total = cards.length;
      const initialPeek = -(peekOffset * (total - i - 1)); 
      const target = 0; 
      const ty = snap(initialPeek + (target - initialPeek) * t);

      card.style.transform = `translate3d(0, ${ty}px, 0)`;
    });
  }, [stackPosition, arriveStartOffset, arriveEndOffset, peekOffset]);

  const onScroll = () => {
    if (!tickingRef.current) {
      window.requestAnimationFrame(() => {
        update();
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  };

  useLayoutEffect(() => {
    collectCards();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [collectCards, update]);

  return (
    <div ref={rootRef} className={`relative w-full ${className}`}>
      <div
        className="scroll-stack-inner pt-12 px-4 sm:px-8 lg:px-12"
        style={{ paddingBottom: bottomGapPx }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
