import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section className="products productsCategories">
      <div className="productsTop">
        <div className="productsIntro">
          <div className="sectionEyebrow">Каталог продукции</div>

          <h2 className="productsTitle">
            Выберите тип оборудования
          </h2>

          
        </div>
      </div>

      <div className="homeCategoryGrid">
        <Link
          className="homeCategoryCard"
          to="/catalog?category=washers"
        >
          <div className="homeCategoryContent">
            <span className="homeCategoryLabel">
              Категория
            </span>

            <h3>Автоматические мойки</h3>

            <p>
              Оборудование для мойки деталей двигателя,
              агрегатов и промышленных узлов.
            </p>
          </div>

          <img
            className="homeCategoryImage"
            src="/images/am800.png"
            alt="Автоматическая мойка"
          />

          <span className="homeCategoryBtn">
            Смотреть
          </span>
        </Link>

        <Link
          className="homeCategoryCard"
          to="/catalog?category=ultrasonic"
        >
          <div className="homeCategoryContent">
            <span className="homeCategoryLabel">
              Категория
            </span>

            <h3>Ультразвуковые мойки</h3>

            <p>
              Ванны для глубокой очистки деталей,
              узлов и труднодоступных поверхностей.
            </p>
          </div>

          <img
            className="homeCategoryImage"
            src="/images/ultra130.png"
            alt="Ультразвуковая мойка"
          />

          <span className="homeCategoryBtn">
            Смотреть
          </span>
        </Link>
      </div>
    </section>
  );
}