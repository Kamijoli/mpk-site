import { useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";

const productionImages = [
  "/images/production-1.jpg",
  "/images/production-2.jpg",
  "/images/production-3.jpg",
];

export default function About() {
  const [open, setOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  function openGallery(index) {
    setGalleryIndex(index);
    setGalleryOpen(true);
  }

  function prevGalleryImage() {
    setGalleryIndex((i) => (i - 1 + productionImages.length) % productionImages.length);
  }

  function nextGalleryImage() {
    setGalleryIndex((i) => (i + 1) % productionImages.length);
  }

  return (
    <>
      <section className="pageSection aboutPage">
        <div className="aboutTop">
          <div className="aboutContent">
            <div className="sectionEyebrow">О компании</div>

            <h2 className="pageTitle">
              МПК «Миасская производственная компания»
            </h2>

            <p className="aboutText">
              МПК «Миасская производственная компания», основанная в 2022 году,
              является одним из ведущих производств оборудования для автоматической
              очистки деталей в России. Компания ориентирована на разработку и
              внедрение современных технологий, обеспечивающих высокую эффективность.
            </p>

            <p className="aboutText">
              Основной продукцией компании являются автоматические мойки для деталей
              двигателя, мойки для лотков и тары, стенды для опрессовки ГБЦ,
              вибростолы, галтовочные барабаны, проверочные ванны для колёс.
            </p>

            <div className="productionStrip">
              <div className="sectionEyebrow">Производство</div>

              <div className="productionGallery">
                {productionImages.map((img, index) => (
                  <button
                    className="productionPhoto"
                    key={img}
                    type="button"
                    onClick={() => openGallery(index)}
                    aria-label={`Открыть фото производства ${index + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Производство ${index + 1}`}
                      onError={(e) => {
                        e.currentTarget.src = "/images/placeholder.png";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="aboutDocPreview"
            onClick={() => setOpen(true)}
            aria-label="Открыть документ о компании"
          >
            <img
              src="/images/about-doc.jpg"
              alt="Документ о компании"
              className="aboutDocImg"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder.png";
              }}
            />

            <div className="aboutDocOverlay">
              <span className="aboutDocBadge">Документ</span>
            </div>
          </button>
        </div>

        <div className="aboutGrid lifted">
          <div className="aboutCard">
            <h3 className="aboutCardTitle">Преимущества моющих установок</h3>

            <div className="aboutPoints">
              <div className="aboutPoint">
                <h4>Эффективность очистки</h4>
                <p>Глубокое очищение даже в самых труднодоступных местах.</p>
              </div>

              <div className="aboutPoint">
                <h4>Универсальность применения</h4>
                <p>
                  Для мойки различных типов деталей и агрегатов, включая
                  металлические и пластиковые изделия, например пластиковую тару.
                </p>
              </div>

              <div className="aboutPoint">
                <h4>Экономия времени и ресурсов</h4>
                <p>Сокращение затрат времени и трудовых ресурсов.</p>
              </div>

              <div className="aboutPoint">
                <h4>Компактность и мобильность</h4>
                <p>Подходят для любого производственного помещения.</p>
              </div>

              <div className="aboutPoint">
                <h4>Удобство обслуживания</h4>
                <p>
                  Продуманная конструкция упрощает процесс технического
                  обслуживания и ремонта.
                </p>
              </div>
            </div>
          </div>

          <div className="aboutCard">
            <h3 className="aboutCardTitle">Сотрудничество</h3>

            <p className="aboutText">
              Компания активно развивает партнёрские отношения с организациями,
              занимающимися эксплуатацией автоматических моек.
            </p>

            <p className="aboutText">
              Мы предлагаем выгодные условия сотрудничества, включая льготные цены
              на оборудование, консультационную поддержку и сопровождение.
            </p>

            <div className="aboutActions">
              <a className="btnPrimary" href="tel:+79150612211">
                Позвонить
              </a>

              <Link className="btnGhost aboutGhostBtn" to="/contacts">
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>
      </section>

      {open ? (
        <div className="docOverlay" onClick={() => setOpen(false)}>
          <div className="docPanel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="docClose"
              onClick={() => setOpen(false)}
              aria-label="Закрыть документ"
            >
              ✕
            </button>

            <img
              src="/images/about-doc.jpg"
              alt="Документ о компании"
              className="docFullImg"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder.png";
              }}
            />
          </div>
        </div>
      ) : null}

      <ImageLightbox
        open={galleryOpen}
        images={productionImages}
        index={galleryIndex}
        alt="Фотографии производства МПК"
        onClose={() => setGalleryOpen(false)}
        onPrev={prevGalleryImage}
        onNext={nextGalleryImage}
      />
    </>
  );
}