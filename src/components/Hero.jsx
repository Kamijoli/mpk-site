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
          <div className="heroCard heroCardAccent">
            <div className="heroCardLabel">Основное направление</div>
            <h3 className="heroCardTitle">Автоматические мойки</h3>
            <p className="cardText">
              Оборудование для мойки деталей двигателя, агрегатов и промышленных узлов.
            </p>
          </div>

          <div className="heroMiniStats">
            <div className="heroStat">
              <span className="heroStatNum">6+</span>
              <span className="heroStatText">моделей моек</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">130 л</span>
              <span className="heroStatText">ультразвуковая ванна</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}