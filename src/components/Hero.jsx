import { useNavigate } from "react-router-dom";

export default function Hero() {
  const nav = useNavigate();

  return (
    <section className="hero">
      <div className="heroInner">
        <div className="heroLeft">
          <div className="heroBadge">ПРОИЗВОДСТВО И ПОСТАВКА ОБОРУДОВАНИЯ</div>

          <h1 className="heroTitle">МПК «Миасская производственная компания»</h1>

          <p className="heroText">
            Производство и поставка оборудования. Подбор решений под задачу,
            консультации и сопровождение.
          </p>

          <div className="heroActions">
            <button className="btnPrimary" onClick={() => nav("/catalog")}>
              Смотреть каталог
            </button>
          </div>
        </div>

        
<div className="heroRight">
  <div className="heroBenefits">

    <div className="heroBenefit">
      <span className="heroBenefitIcon">
        <img src="/images/coins.png" alt="Стоимость" />
      </span>

      <div>
        <h3>Стоимость</h3>
        <p>Самая доступная цена на рынке</p>
      </div>
    </div>

    <div className="heroBenefit">
      <span className="heroBenefitIcon">
        <img src="/images/shield.png" alt="Гарантия" />
      </span>

      <div>
        <h3>Гарантия</h3>
        <p>Качество продукции подтверждено</p>
      </div>
    </div>

    <div className="heroBenefit">
      <span className="heroBenefitIcon">
        <img src="/images/delivery.png" alt="Доставка" />
      </span>

      <div>
        <h3>Доставка</h3>
        <p>По всей Российской Федерации</p>
      </div>
    </div>

    <div className="heroBenefit">
      <span className="heroBenefitIcon">
        <img src="/images/sertificat.png" alt="Сертификат" />
      </span>

      <div>
        <h3>Сертификат</h3>
        <p>Соответствие товара требованиям</p>
      </div>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}