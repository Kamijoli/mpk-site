import { Link } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";

const featuredIds = ["am600", "am800", "ultra130", "chem-01"];
const featured = featuredIds
  .map((id) => products.find((p) => p.id === id))
  .filter(Boolean);

export default function Products() {
  function getCategoryTitle(categoryId) {
    return categories.find((c) => c.id === categoryId)?.title ?? "";
  }

  return (
    <section className="products">
      <div className="productsTop">
        <div className="productsIntro">
          <div className="sectionEyebrow">Каталог продукции</div>
          <h2 className="productsTitle">Оборудование и химия для промышленной очистки</h2>
          <p className="productsLead">
            Подберите автоматические мойки, ультразвуковые ванны и моющие составы
            под задачи производства, сервиса и технического обслуживания.
          </p>
        </div>

        <div className="productsSide">
          <Link className="productsLink" to="/catalog">
            Перейти в каталог
          </Link>
        </div>
      </div>

      <div className="cards">
        {featured.map((it) => (
          <article className="card cardPremium" key={it.id}>
            <div className="cardImgWrap">
              <div className="cardImgInner">
                <img className="cardImg" src={it.img} alt={it.title} />
              </div>
            </div>

            <div className="cardBody">
              <div>
                <div className="cardMeta">{getCategoryTitle(it.categoryId)}</div>
                <h3 className="cardH">{it.title}</h3>
                <p className="cardP">{it.short}</p>
              </div>

              <Link className="btnGhost" to={`/product/${it.id}`}>
                Подробнее
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}