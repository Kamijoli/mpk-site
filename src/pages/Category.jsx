import { useParams, Link } from "react-router-dom";
import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Category() {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const list = products.filter((p) => p.categoryId === categoryId);

  return (
    <section className="pageSection">
      <div className="bread">
        <Link to="/catalog">Каталог</Link> <span>→</span>{" "}
        <span>{category?.title ?? "Категория"}</span>
      </div>

      <h2 className="pageTitle">{category?.title ?? "Категория"}</h2>
      <p className="pageLead">{category?.desc}</p>

      <div className="grid2">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
