export default function Footer() {
  return (
    <footer className="footer footerFull">
      <div className="footerBrand">
        <img
          src="/images/logo.svg"
          alt="Лого"
          className="brandLogo"
        />

        <div>
          <div className="brandTitle">Миасская</div>
          <div className="brandSub">
            производственная компания
          </div>
        </div>
      </div>

      <div className="footerBlock">
        <h4>Адрес:</h4>

        <p>г. Миасс, Челябинская область</p>
        <p>Объездная дорога 4/44</p>
      </div>

      <div className="footerBlock">
        <h4>Телефон:</h4>

        <p>Отдел продаж — 8 (915) 061 22 11</p>
        <p>Технический отдел — 8 (951) 447 20 47</p>
      </div>

      <div className="footerContact">
        <p className="footerText">
          Для связи с нами выбирайте соответствующий
          мессенджер. Мы вам перезвоним или ответим
          сообщением.
        </p>

        <div className="footerCenter">
          <a
            className="fab phone"
            href="tel:+79150612211"
            aria-label="Позвонить"
          >
            ☎
          </a>

          <a
            className="fab tg"
            href="https://t.me/mpkmias"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            ✈
          </a>

          <a
            className="fab wa"
            href="https://api.whatsapp.com/send/?phone=79150612211&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            🟢
          </a>

          <a
            className="fab vk"
            href="https://vk.com/mpkmias"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="VK"
          >
            VK
          </a>
        </div>
      </div>
    </footer>
  );
}