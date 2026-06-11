import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ImageCarousel from "../components/ImageCarousel";

function SpecTable({ specs }) {
  const entries = useMemo(() => Object.entries(specs || {}), [specs]);

  // красивые подписи для часто встречающихся ключей
  const labels = {
    body: "Корпус",
    basketDiameter: "Диаметр корзины",
    workHeight: "Высота рабочего пространства",
    basketLoad: "Грузоподъёмность корзины",
    pump: "Насос",
    heater: "Нагревательный элемент",
    tankVolume: "Объём резервуара",
    outerSize: "Внешние размеры",
    lidOpenHeight: "Открытие крышки (высота)",
    weight: "Общая масса",
    powerSupply: "Питание",
    drive: "Привод корзины",
    totalPower: "Общее энергопотребление",
    ramp: "Моющая рампа",
    thermostat: "Терморегулятор температуры",
    lidSafety: "Аварийное отключение при открывании крышки",
    dryRun: "Защита от сухого пуска",
    warranty: "Гарантия",
    type: "Тип",
    usage: "Применение",
    compatibility: "Совместимость",
    note: "Примечание",

    ultrasonicPower: "Мощность ультразвука",
    workingVolume: "Рабочий объём",
    ultrasonicFrequency: "Частота ультразвука",
    heaterPower: "Подогрев ванны",
    timer: "Таймер",
    basketInnerSize: "Внутренний размер корзины",
    drainValve: "Кран для слива жидкости",
    insulation: "Шумо- и теплоизоляция",
    material: "Материал",
    supports: "Опоры",
  };

return (
  <div className="specTable">
    {entries.map(([k, v]) => (
      <div className="specRow" key={k}>
        <div className="specName">
          {labels[k] ?? k}
        </div>

        <div className="specValue">
          {String(v)}
        </div>
      </div>
    ))}
  </div>
);
}

function WorkflowList({ items }) {
  return (
    <div className="workflowList">
      {items.map((it, idx) => (
        <article className="workflowCard" key={idx}>
          <div className="workflowTop">
            <span className="workflowNum">{String(idx + 1).padStart(2, "0")}</span>
            <h4 className="workflowTitle">{it.title}</h4>
          </div>
          <p className="workflowText">{it.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function Product() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const category = product
    ? categories.find((c) => c.id === product.categoryId)
    : null;

  const [tab, setTab] = useState("specs"); // specs | workflow | benefits

  if (!product) {
    return (
      <section className="pageSection">
        <h2 className="pageTitle">Товар не найден</h2>
        <Link className="btnGhost" to="/catalog">Вернуться в каталог</Link>
      </section>
    );
  }

  return (
    <section className="pageSection">
      <div className="bread">
        <Link to="/catalog">Каталог</Link> <span>→</span>
        {category ? (
          <>
            <Link to={`/catalog/${category.id}`}>{category.title}</Link> <span>→</span>
          </>
        ) : null}
        <span>{product.title}</span>
      </div>

      <div className="productPage">
        <div className="productMedia">
          <ImageCarousel
          images={product.images?.length ? product.images : [product.img].filter(Boolean)}
          alt={product.title}/>
        </div>

        <div className="productInfo">
          <h2 className="pageTitle">{product.title}</h2>
          <p className="pageLead">{product.short}</p>

          <div className="productPrice">{product.price}</div>

          <div className="productActions">
            <a className="btnPrimary" href="tel:+76990348003">Позвонить</a>
            <Link className="btnGhost" to="/contacts">Оставить заявку</Link>
          </div>

          <h3 className="subTitle">Описание</h3>
          <p className="text">{product.description}</p>
        </div>
      </div>

      {/* ТАБЫ */}
      <div className="tabs">
        <button className={"tab" + (tab === "specs" ? " active" : "")} onClick={() => setTab("specs")}>
          Характеристики
        </button>
        <button className={"tab" + (tab === "workflow" ? " active" : "")} onClick={() => setTab("workflow")}>
          Принцип работы
        </button>
        <button className={"tab" + (tab === "benefits" ? " active" : "")} onClick={() => setTab("benefits")}>
          Преимущества
        </button>
      </div>

      {tab === "specs" ? (
        <>
          <h3 className="subTitle">Характеристики</h3>
          <SpecTable specs={product.specs} />
        </>
      ) : null}

      {tab === "workflow" ? (
        <>
          <h3 className="subTitle">Принцип работы</h3>
          <WorkflowList items={product.workflow || []} />
        </>
      ) : null}

      {tab === "benefits" ? (
        <>
          <h3 className="subTitle">Преимущества</h3>
          <div className="grid3">
            {(product.benefits || []).map((b, i) => (
              <div className="miniCard" key={i}>
                <h3 className="miniCardTitle">{b.title}</h3>
                <p className="miniCardText">{b.text}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
