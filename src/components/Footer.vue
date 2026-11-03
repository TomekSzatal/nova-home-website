
<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-brand">
        <a href="#home" class="logo">
          NOVA<span>HOME</span>
        </a>

        <p>
          Tworzymy przestrzenie, do których
          chce się wracać. Kompleksowe remonty
          i wykończenia wnętrz.
        </p>

        <div class="social-links">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">ig</a>
        </div>
      </div>

      <div class="footer-column">
        <h3>Nawigacja</h3>
        <a href="#home">Strona główna</a>
        <a href="#about">O nas</a>
        <a href="#services">Usługi</a>
        <a href="#projects">Realizacje</a>
        <a href="#contact">Kontakt</a>
      </div>

      <div class="footer-column">
        <h3>Nasze usługi</h3>
        <a href="#services">Remonty mieszkań</a>
        <a href="#services">Wykończenia wnętrz</a>
        <a href="#services">Łazienki i kuchnie</a>
        <a href="#services">Prace wykończeniowe</a>
      </div>

      <div class="footer-column">
        <h3>Kontakt</h3>
        <span>+48 000 000 000</span>
        <span>kontakt@novahome.pl</span>
        <span>Polska</span>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} NOVA HOME. Wszelkie prawa zastrzeżone.</p>

      <a href="#">Polityka prywatności</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 75px 8% 25px;
  background: #191919;
  color: #ffffff;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 50px;
  padding-bottom: 60px;
}

.logo {
  color: #ffffff;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -1px;
  text-decoration: none;
}

.logo span {
  color: #b58a55;
}

.footer-brand p {
  max-width: 300px;
  margin: 22px 0;
  color: #999999;
  font-size: 14px;
  line-height: 1.8;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid #444444;
  color: #ffffff;
  font-size: 13px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.social-links a:hover {
  background: #b58a55;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.footer-column h3 {
  margin-bottom: 10px;
  font-size: 16px;
}

.footer-column a,
.footer-column span {
  color: #999999;
  font-size: 13px;
  text-decoration: none;
}

.footer-column a:hover {
  color: #d6ad79;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 25px;
  border-top: 1px solid #383838;
}

.footer-bottom p,
.footer-bottom a {
  color: #888888;
  font-size: 12px;
  text-decoration: none;
}

@media (max-width: 900px) {
  .footer-main {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .footer {
    padding: 60px 6% 25px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-bottom {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 65px 6% 25px;
  }

  .footer-main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 35px;
  }

  .footer-column a,
  .footer-column span {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .footer-main {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
