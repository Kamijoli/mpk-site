export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerLeft">
        <div className="brand">
          <img src="/images/logo.svg" alt="Лого" className="brandLogo" />
          <div className="brandText">
            <div className="brandTitle">Миасская</div>
            <div className="brandSub">производственная компания</div>
          </div>
        </div>
      </div>

      <div className="footerCenter">
        <a className="fab phone" href="tel:+76990348003" aria-label="Позвонить">
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

      <div className="footerRight">
        <p className="footerNote">
          г. Миасс • Пн–Пт 09:00–18:00 • info@mpk.ru
        </p>
      </div>
    </footer>
  );
}