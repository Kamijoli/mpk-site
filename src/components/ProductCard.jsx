import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="pCard">
      <div className="pCardImgWrap">
        <img className="pCardImg" src={product.img} alt={product.title} />
      </div>

      <div className="pCardBody">
        <h3 className="pCardTitle">{product.title}</h3>
        <p className="pCardText">{product.short}</p>

        <div className="pCardRow">
          <span className="pCardPrice">{product.price}</span>
          <Link className="btnGhost" to={`/product/${product.id}`}>
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}
