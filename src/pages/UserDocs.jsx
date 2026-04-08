export default function UserDocs() {
  return (
    <section className="pageSection">
      <h2 className="pageTitle">Для пользователя</h2>
      <p className="pageLead">
        Документы и справочная информация. Позже сюда добавим реальные PDF и инструкции.
      </p>

      <div className="grid3">
        <a className="miniCard miniLink" href="#" onClick={(e) => e.preventDefault()}>
          <h3 className="miniCardTitle">Инструкция по эксплуатации</h3>
          <p className="miniCardText">PDF (заглушка)</p>
        </a>

        <a className="miniCard miniLink" href="#" onClick={(e) => e.preventDefault()}>
          <h3 className="miniCardTitle">Паспорт изделия</h3>
          <p className="miniCardText">PDF (заглушка)</p>
        </a>

        <a className="miniCard miniLink" href="#" onClick={(e) => e.preventDefault()}>
          <h3 className="miniCardTitle">FAQ</h3>
          <p className="miniCardText">Частые вопросы</p>
        </a>
      </div>

      <div className="callout">
        <h3 className="subTitle">Как оформить заявку</h3>
        <ol className="steps">
          <li>Выберите товар в каталоге</li>
          <li>Откройте карточку товара</li>
          <li>Нажмите “Оставить заявку”</li>
        </ol>
      </div>
    </section>
  );
}
