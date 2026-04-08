import { useEffect, useMemo, useRef, useState } from "react";
import ImageLightbox from "./ImageLightbox";

export default function ImageCarousel({ images = [], alt = "" }) {
  const list = useMemo(() => (images?.length ? images : []), [images]);
  const [idx, setIdx] = useState(0);
  const [lbOpen, setLbOpen] = useState(false);
  const startX = useRef(null);

  useEffect(() => {
    setIdx(0);
  }, [images]);

  function prev() {
    if (!list.length) return;
    setIdx((i) => (i - 1 + list.length) % list.length);
  }

  function next() {
    if (!list.length) return;
    setIdx((i) => (i + 1) % list.length);
  }

  function onKey(e) {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Enter") setLbOpen(true);
  }

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
    if (dx > 0) prev();
    else next();
  }

  if (!list.length) {
    return (
      <div className="carouselEmpty">
        <div className="carouselEmptyText">Нет изображений</div>
      </div>
    );
  }

  const current = list[idx];

  return (
    <>
      <ImageLightbox
        open={lbOpen}
        images={list}
        index={idx}
        alt={alt}
        onClose={() => setLbOpen(false)}
        onPrev={prev}
        onNext={next}
      />

      <div
        className="carousel"
        tabIndex={0}
        onKeyDown={onKey}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-label="Галерея товара"
      >
        <div className="carouselMain">
          <button
            className="carouselZoom"
            type="button"
            onClick={() => setLbOpen(true)}
            aria-label="Открыть изображение"
            title="Нажмите, чтобы увеличить"
          >
            <img
              className="carouselImg"
              src={current}
              alt={alt}
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder.png";
              }}
            />
            <span className="zoomHint">Нажмите, чтобы увеличить</span>
          </button>

          {list.length > 1 ? (
            <>
              <button className="carouselArrow left" onClick={prev} type="button" aria-label="Предыдущее фото">
                ‹
              </button>
              <button className="carouselArrow right" onClick={next} type="button" aria-label="Следующее фото">
                ›
              </button>

              <div className="carouselDots" aria-label="Индикатор изображений">
                {list.map((_, i) => (
                  <button
                    key={i}
                    className={"dot" + (i === idx ? " active" : "")}
                    onClick={() => setIdx(i)}
                    type="button"
                    aria-label={`Фото ${i + 1}`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        {list.length > 1 ? (
          <div className="carouselThumbs" aria-label="Миниатюры">
            {list.map((src, i) => (
              <button
                key={src + i}
                className={"thumb" + (i === idx ? " active" : "")}
                onClick={() => setIdx(i)}
                type="button"
                aria-label={`Выбрать фото ${i + 1}`}
              >
                <img
                  src={src}
                  alt=""
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.png";
                  }}
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
