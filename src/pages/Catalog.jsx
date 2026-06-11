import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "../data/categories";
import { products } from "../data/products";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    if (categoryFromUrl) {
      setCat(categoryFromUrl);
   }
}, [searchParams]);
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return products.filter((p) => {
      const okCat = cat === "all" ? true : p.categoryId === cat;
      const okQ = !query ? true : (p.title + " " + p.short).toLowerCase().includes(query);
      return okCat && okQ;
    });
  }, [q, cat]);

  return (
    <section className="pageSection">
      <h2 className="pageTitle">Каталог</h2>
      <p className="pageLead">Выберите категорию или найдите товар по названию.</p>

      <div className="filters">
        <input
          className="input"
          placeholder="Поиск по товарам…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <select className="select" value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="all">Все категории</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.title}</option>
          ))}
        </select>

        <button className="btnGhost" onClick={() => { setQ(""); setCat("all"); }}>
          Сбросить
        </button>
      </div>

      <h3 className="subTitle">Категории</h3>
      <div className="grid3">
        {categories.map((c) => (
          <CategoryCard key={c.id} category={c} />
        ))}
      </div>

      <h3 className="subTitle">Товары</h3>
      {filtered.length ? (
        <div className="grid2">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="callout">
          <p className="text">Ничего не найдено. Измени запрос или категорию.</p>
        </div>
      )}
    </section>
  );
}
