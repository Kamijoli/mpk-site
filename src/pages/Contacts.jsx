import { useState } from "react";
import { products } from "../data/products";

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    call_time: "",
    product: "",
    comment: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/werttzato@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Новая заявка с сайта МПК",
          name: form.name,
          phone: form.phone,
          call_time: form.call_time,
          product: form.product,
          comment: form.comment,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      setStatus("success");
      setForm({
        name: "",
        phone: "",
        call_time: "",
        product: "",
        comment: "",
      });
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section className="pageSection">
      <div className="sectionEyebrow">Контакты и заявка</div>
      <h2 className="pageTitle">Оставить заявку</h2>
      <p className="pageLead">
        Оставьте телефон, удобное время для звонка и интересующий товар — мы свяжемся с вами.
      </p>

      <div className="contactGrid">
        <div className="contactCard">
          <h3 className="contactCardTitle">Связаться напрямую</h3>

          <div className="contactList">
            <a className="contactItem" href="tel:+76990348003">
              <span className="contactLabels">Сизенёв Алексей Евгеньевич</span>
              <span className="contactLabel">Отдел продаж / работа с клиентами</span>
              <span className="contactValue">+7 915 06 122 11</span>
            </a>

          <div className="contactList">
            <a className="contactItem" href="tel:+76990348003">
              <span className="contactLabels">Бойко Андрей Сергеевич</span>
              <span className="contactLabel">Руководитель производства</span>
              <span className="contactValue">+7 951 447 20 47</span>
            </a>
          </div>
            <a className="contactItem" href="mailto:info@mpk.ru">
              <span className="contactLabel">E-mail</span>
              <span className="contactValue">mpk-pro@yandex.ru</span>
            </a>

            
          </div>
        </div>

        <div className="leadFormWrap">
          <form className="leadForm" onSubmit={handleSubmit}>
            <div className="formRow">
              <label className="formField">
                <span className="formLabel">Ваше имя</span>
                <input
                  className="formInput"
                  type="text"
                  name="name"
                  placeholder="Введите имя"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>

              <label className="formField">
                <span className="formLabel">Телефон *</span>
                <input
                  className="formInput"
                  type="tel"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="formRow">
              <label className="formField">
                <span className="formLabel">Удобное время для звонка *</span>
                <input
                  className="formInput"
                  type="text"
                  name="call_time"
                  placeholder="Например: с 14:00 до 17:00"
                  required
                  value={form.call_time}
                  onChange={handleChange}
                />
              </label>

              <label className="formField">
                <span className="formLabel">Интересующий товар *</span>
                <select
                  className="formInput"
                  name="product"
                  required
                  value={form.product}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Выберите товар
                  </option>
                  {products.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="formField">
              <span className="formLabel">Комментарий</span>
              <textarea
                className="formTextarea"
                name="comment"
                placeholder="Опишите задачу или укажите, что именно вас интересует"
                rows="5"
                value={form.comment}
                onChange={handleChange}
              />
            </label>

            <div className="formActions">
              <button className="btnPrimary formSubmitBtn" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Отправка..." : "Отправить заявку"}
              </button>
            </div>
          </form>

          {status === "success" ? (
            <div className="formMessage success">
              <div className="formMessageIcon">✓</div>
              <div>
                <div className="formMessageTitle">Спасибо, заявка отправлена</div>
                <p className="formMessageText">
                  Мы получили ваши данные и свяжемся с вами в указанное время.
                </p>
              </div>
            </div>
          ) : null}

          {status === "error" ? (
            <div className="formMessage error">
              <div className="formMessageIcon">!</div>
              <div>
                <div className="formMessageTitle">Не удалось отправить заявку</div>
                <p className="formMessageText">
                  Попробуйте ещё раз или свяжитесь с нами по телефону.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}