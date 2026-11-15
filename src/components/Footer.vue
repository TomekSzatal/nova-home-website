
<script setup lang="ts">
import { RouterLink } from "vue-router";

const year = new Date().getFullYear();

const navigation = [
  { label: "Strona główna", path: "/" },
  { label: "O nas", path: "/o-nas" },
  { label: "Usługi", path: "/uslugi" },
  { label: "Realizacje", path: "/realizacje" },
  { label: "Kontakt", path: "/kontakt" },
];

const services = [
  { label: "Remonty mieszkań", path: "/uslugi" },
  { label: "Wykończenia wnętrz", path: "/uslugi" },
  { label: "Łazienki i kuchnie", path: "/uslugi" },
  { label: "Prace wykończeniowe", path: "/uslugi" },
];
</script>

<template>
  <footer class="footer">
    <div class="footer-main">
      <!-- MARKA -->
      <div class="footer-brand">
        <RouterLink to="/" class="logo">
          NOVA<span>HOME</span>
        </RouterLink>

        <p>
          Przestrzenie, do których chce się wracać.
          Nowoczesna koncepcja marki remontowo-wykończeniowej,
          łącząca estetykę z funkcjonalnością.
        </p>

        <div class="demo-label">
          PROJEKT DEMONSTRACYJNY
        </div>
      </div>

      <!-- NAWIGACJA -->
      <div class="footer-column">
        <h3>Nawigacja</h3>

        <RouterLink
          v-for="item in navigation"
          :key="item.path"
          :to="item.path"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <!-- USŁUGI -->
      <div class="footer-column">
        <h3>Nasze usługi</h3>

        <RouterLink
          v-for="service in services"
          :key="service.label"
          :to="service.path"
        >
          {{ service.label }}
        </RouterLink>
      </div>

      <!-- KONTAKT -->
      <div class="footer-column">
        <h3>Informacje</h3>

        <p class="info-text">
          NOVA HOME to fikcyjna marka stworzona przez
          Tovexa Studio jako projekt demonstracyjny.
          Przedstawione usługi, realizacje i informacje
          o firmie mają charakter przykładowy.
        </p>

        <RouterLink to="/kontakt" class="contact-link">
          Formularz kontaktowy
        </RouterLink>

        <a
          href="https://tovexastudio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="studio-link"
        >
          Projekt: Tovexa Studio ↗
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>
        © {{ year }} NOVA HOME.
        Projekt demonstracyjny — Tovexa Studio.
      </p>

      <div class="footer-bottom-links">
        <RouterLink to="/kontakt">
          Kontakt
        </RouterLink>

        <a
          href="https://tovexastudio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tovexa Studio
        </a>
      </div>
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

.demo-label {
  display: inline-block;
  padding: 9px 12px;
  border: 1px solid #6c5941;
  color: #d6ad79;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.3px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
}

.footer-column h3 {
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 16px;
}

.footer-column a,
.footer-column .info-text {
  color: #999999;
  font-size: 13px;
  line-height: 1.7;
  text-decoration: none;
}

.footer-column .info-text {
  margin: 0;
}

.footer-column a:hover {
  color: #d6ad79;
}

.footer-column .contact-link {
  color: #d6ad79;
}

.footer-column .studio-link {
  margin-top: 5px;
  color: #ffffff;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 25px;
  border-top: 1px solid #383838;
}

.footer-bottom p,
.footer-bottom a {
  margin: 0;
  color: #888888;
  font-size: 12px;
  line-height: 1.7;
  text-decoration: none;
}

.footer-bottom a:hover {
  color: #d6ad79;
}

.footer-bottom-links {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}

/* TABLET */

@media (max-width: 1100px) {
  .footer-main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 45px;
  }
}

/* MOBILE */

@media (max-width: 600px) {
  .footer {
    padding: 65px 6% 25px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-bottom: 45px;
  }

  .footer-column a,
  .footer-column .info-text {
    font-size: 14px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
}
</style>
