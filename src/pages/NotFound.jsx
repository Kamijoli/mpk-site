import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="pageSection">
      <h2 className="pageTitle">Страница не найдена</h2>
      <p className="pageLead">Похоже, такой страницы нет.</p>
      <Link className="btnGhost" to="/">На главную</Link>
    </section>
  );
}
