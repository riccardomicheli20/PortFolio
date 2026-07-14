import { useEffect, useRef, useState } from "react";
import { useIsTouchDevice } from "../hooks/useIsTouchDevice";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const LEFT_SRC = "/videos/left.mp4";
const RIGHT_SRC = "/videos/right.mp4";

// The source clips turn away from center and then swing back toward it
// before they end. Scrubbing to the very last frame would show the return
// swing instead of the fully-turned pose, so each side clamps to the
// fraction of its duration where the turn peaks.
const LEFT_PEAK_FRACTION = 0.42;
const RIGHT_PEAK_FRACTION = 0.66;

// The right clip is framed wider than the left clip; zoom it in -- never
// out, so no background shows through object-fit: cover -- so the head
// reads at the same size on both sides.
const RIGHT_SCALE_CORRECTION = 1.035;

export function VideoBackground({ onLoaded }: { onLoaded?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLVideoElement>(null);
  const rightRef = useRef<HTMLVideoElement>(null);
  const mouseXRef = useRef<number | null>(null);
  const activeSideRef = useRef<"left" | "right">("right");
  const [loaded, setLoaded] = useState(false);
  const isTouch = useIsTouchDevice();
  const reducedMotion = usePrefersReducedMotion();
  const onLoadedRef = useRef(onLoaded);
  onLoadedRef.current = onLoaded;

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    let leftLoaded = false;
    let rightLoaded = false;
    const checkLoaded = () => {
      if (leftLoaded && rightLoaded) {
        setLoaded(true);
        onLoadedRef.current?.();
      }
    };
    const onLeft = () => {
      leftLoaded = true;
      checkLoaded();
    };
    const onRight = () => {
      rightLoaded = true;
      checkLoaded();
    };
    left.addEventListener("loadeddata", onLeft);
    right.addEventListener("loadeddata", onRight);
    return () => {
      left.removeEventListener("loadeddata", onLeft);
      right.removeEventListener("loadeddata", onRight);
    };
  }, []);

  // Desktop: scrub videos based on cursor X position
  useEffect(() => {
    if (isTouch) return;

    const container = containerRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!container || !left || !right) return;

    const handleMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
    };
    window.addEventListener("mousemove", handleMove);

    const setActive = (side: "left" | "right") => {
      if (activeSideRef.current === side) return;
      activeSideRef.current = side;
      left.style.display = side === "left" ? "block" : "none";
      right.style.display = side === "right" ? "block" : "none";
    };

    let rafId: number;
    let smoothX: number | null = null;
    const smoothTime = { left: 0, right: 0 };

    const CURSOR_SMOOTHING = 0.12;
    const TIME_SMOOTHING = 0.35;

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      if (mouseXRef.current == null) return;

      if (smoothX == null) smoothX = mouseXRef.current;
      smoothX += (mouseXRef.current - smoothX) * CURSOR_SMOOTHING;

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      if (width <= 0) return;

      const cursorX = smoothX - rect.left;
      const centerX = width / 2;
      const deadZone = Math.max(30, width * 0.05);

      if (cursorX > centerX + deadZone) {
        // cursor right of center -> right video, head turns right
        setActive("right");
        const range = width - (centerX + deadZone);
        const distance = cursorX - (centerX + deadZone);
        const progress = Math.min(1, Math.max(0, distance / range));
        if (right.duration && !right.seeking) {
          const target = progress * right.duration * RIGHT_PEAK_FRACTION;
          smoothTime.right += (target - smoothTime.right) * TIME_SMOOTHING;
          right.currentTime = smoothTime.right;
        }
      } else if (cursorX < centerX - deadZone) {
        // cursor left of center -> left video, head turns left
        setActive("left");
        const range = centerX - deadZone;
        const distance = range - cursorX;
        const progress = Math.min(1, Math.max(0, distance / range));
        if (left.duration && !left.seeking) {
          const target = progress * left.duration * LEFT_PEAK_FRACTION;
          smoothTime.left += (target - smoothTime.left) * TIME_SMOOTHING;
          left.currentTime = smoothTime.left;
        }
      } else {
        // back in the dead zone -> ease the active video back to the front pose
        const key = activeSideRef.current;
        const activeVideo = key === "left" ? left : right;
        if (activeVideo.duration && !activeVideo.seeking) {
          smoothTime[key] += (0 - smoothTime[key]) * TIME_SMOOTHING;
          if (Math.abs(smoothTime[key]) < 0.01) smoothTime[key] = 0;
          activeVideo.currentTime = smoothTime[key];
        }
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [isTouch]);

  // Mobile/tablet: autoplay alternately left -> right -> left ...
  useEffect(() => {
    if (!isTouch || reducedMotion) return;

    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    left.style.display = "block";
    right.style.display = "none";
    left.currentTime = 0;
    left.play().catch(() => {});

    const switchTo = (side: "left" | "right") => {
      const showEl = side === "left" ? left : right;
      const hideEl = side === "left" ? right : left;
      hideEl.pause();
      hideEl.style.display = "none";
      showEl.style.display = "block";
      showEl.currentTime = 0;
      showEl.play().catch(() => {});
    };

    const onLeftEnded = () => switchTo("right");
    const onRightEnded = () => switchTo("left");

    left.addEventListener("ended", onLeftEnded);
    right.addEventListener("ended", onRightEnded);

    return () => {
      left.removeEventListener("ended", onLeftEnded);
      right.removeEventListener("ended", onRightEnded);
      left.pause();
      right.pause();
    };
  }, [isTouch, reducedMotion]);

  return (
    <div
      id="main-canvas"
      ref={containerRef}
      className="pointer-events-none fixed left-0 top-[220px] z-0 h-[calc(100vh-220px)] w-screen overflow-hidden transition-opacity duration-300 sm:inset-0 sm:h-full sm:w-full"
      style={{ opacity: loaded ? 1 : 0 }}
    >
      <video
        ref={leftRef}
        muted
        playsInline
        preload="auto"
        style={{ display: "none" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={LEFT_SRC} type="video/mp4" />
      </video>
      <video
        ref={rightRef}
        muted
        playsInline
        preload="auto"
        style={{
          display: "block",
          transform: `scale(${RIGHT_SCALE_CORRECTION})`,
          transformOrigin: "60% 50%",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={RIGHT_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
