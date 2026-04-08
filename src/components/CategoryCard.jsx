import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <article className="miniCard">
      <h3 className="miniCardTitle">{category.title}</h3>
      <p className="miniCardText">{category.desc}</p>
      <Link className="miniCardBtn" to={`/catalog/${category.id}`}>
        Открыть категорию →
      </Link>
    </article>
  );
}
