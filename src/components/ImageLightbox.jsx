import { useEffect, useRef } from "react";

export default function ImageLightbox({ open, images = [], index = 0, alt = "", onClose, onPrev, onNext }) {
  const startX = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    }
    window.addEventListener("keydown", onKey);

    // блокируем скролл страницы пока открыто
    const prevOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  function onTouchStart(e) {
    startX.current = e.touches?.[0]?.clientX ?? null;
  }

  function onTouchEnd(e) {
    const x0 = startX.current;
    const x1 = e.changedTouches?.[0]?.clientX ?? null;
    startX.current = null;
    if (x0 == null || x1 == null) return;
    const dx = x1 - x0;
    if (Math.abs(dx) < 35) return;
    if (dx > 0) onPrev?.();
    else onNext?.();
  }

  if (!open) return null;

  const src = images?.[index];

  return (
    <div className="lbOverlay" onMouseDown={onClose} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="lbPanel" onMouseDown={(e) => e.stopPropagation()}>
        <button className="lbClose" onClick={onClose} type="button" aria-label="Закрыть">
          ✕
        </button>

        <div className="lbMain">
          <img
            className="lbImg"
            src={src}
            alt={alt}
            onError={(e) => {
              e.currentTarget.src = "/images/placeholder.png";
            }}
          />

          {images.length > 1 ? (
            <>
              <button className="lbArrow left" onClick={onPrev} type="button" aria-label="Предыдущее фото">
                ‹
              </button>
              <button className="lbArrow right" onClick={onNext} type="button" aria-label="Следующее фото">
                ›
              </button>
              <div className="lbCounter">
                {index + 1} / {images.length}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
