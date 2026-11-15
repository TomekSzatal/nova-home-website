
<script setup lang="ts">
import { RouterLink } from "vue-router";

const services = [
  {
    number: "01",
    title: "Remonty mieszkań",
    description:
      "Kompleksowa modernizacja mieszkań, dopasowana do indywidualnych potrzeb i stylu życia. Dbamy o estetykę, funkcjonalność i każdy szczegół wykończenia.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Kompleksowe prace remontowe",
      "Modernizacja pomieszczeń",
      "Układanie podłóg i malowanie",
      "Prace wykończeniowe",
    ],
  },
  {
    number: "02",
    title: "Remonty łazienek",
    description:
      "Tworzymy nowoczesne, wygodne i eleganckie łazienki. Łączymy przemyślane rozwiązania z materiałami, które nadają wnętrzu ponadczasowy charakter.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Układanie płytek",
      "Montaż armatury",
      "Zabudowy i oświetlenie",
      "Kompleksowe wykończenie",
    ],
  },
  {
    number: "03",
    title: "Remonty kuchni",
    description:
      "Projektujemy przestrzenie, w których codzienna funkcjonalność spotyka się z wyjątkowym designem. Każdy element ma swoje miejsce i przeznaczenie.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Przygotowanie ścian i podłóg",
      "Układanie płytek",
      "Prace instalacyjne",
      "Montaż elementów wykończenia",
    ],
  },
  {
    number: "04",
    title: "Wykończenia pod klucz",
    description:
      "Od pustego wnętrza do przestrzeni gotowej do zamieszkania. Kompleksowe podejście pozwala stworzyć spójną i dopracowaną aranżację.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Przygotowanie powierzchni",
      "Prace malarskie i podłogowe",
      "Montaż elementów wyposażenia",
      "Końcowe prace wykończeniowe",
    ],
  },
];
</script>

<template>
  <main class="services-page">
    <section class="services-hero">
      <div class="hero-overlay"></div>

      <div class="container hero-content">
        <span class="eyebrow">NOVA HOME / NASZE USŁUGI</span>

        <h1>
          WNĘTRZA, W KTÓRYCH<br />
          <span>CHCE SIĘ ŻYĆ.</span>
        </h1>

        <p>
          Kompleksowe remonty i wykończenia wnętrz.
          Od pierwszego pomysłu po ostatni detal.
        </p>

        <RouterLink to="/kontakt" class="hero-button">
          ZAPYTAJ O WYCENĘ ↗
        </RouterLink>
      </div>
    </section>

    <section class="services-intro">
      <div class="container intro-grid">
        <div>
          <span class="section-label">CO ROBIMY</span>
          <h2>
            KOMPLEKSOWE<br />
            <span>ROZWIĄZANIA.</span>
          </h2>
        </div>

        <p>
          Każde wnętrze zasługuje na indywidualne podejście.
          NOVA HOME to demonstracyjna marka prezentująca
          kompleksową ofertę usług remontowych i wykończeniowych.
          Poniżej znajdziesz przykładowy zakres prac.
        </p>
      </div>
    </section>

    <section class="services-list">
      <div class="container">
        <article
          v-for="(service, index) in services"
          :key="service.number"
          class="service-row"
          :class="{ reversed: index % 2 !== 0 }"
        >
          <div class="service-image">
            <img
              :src="service.image"
              :alt="`Przykładowa aranżacja — ${service.title}`"
              loading="lazy"
            />
          </div>

          <div class="service-content">
            <span class="service-number">
              {{ service.number }} / USŁUGI
            </span>

            <h3>{{ service.title }}</h3>

            <p>{{ service.description }}</p>

            <div class="features">
              <div
                v-for="feature in service.features"
                :key="feature"
                class="feature"
              >
                <span>✓</span>
                {{ feature }}
              </div>
            </div>

            <RouterLink to="/kontakt" class="service-link">
              ZAPYTAJ O USŁUGĘ <span>↗</span>
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <section class="services-cta">
      <div class="container cta-content">
        <span class="section-label">POROZMAWIAJMY O PROJEKCIE</span>

        <h2>
          TWOJE WNĘTRZE.<br />
          <span>NASZA PASJA.</span>
        </h2>

        <p>
          Zobacz, jak może wyglądać profesjonalna
          prezentacja oferty firmy remontowej.
        </p>

        <RouterLink to="/kontakt" class="cta-button">
          PRZEJDŹ DO KONTAKTU ↗
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.services-page {
  background: #fff;
}

.container {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding-left: 6%;
  padding-right: 6%;
}

/* HERO */

.services-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 560px;
  background:
    linear-gradient(90deg, #161616e8, #16161660),
    url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85")
    center / cover no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, #15151560, transparent);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-top: 100px;
  padding-bottom: 100px;
}

.eyebrow,
.section-label {
  color: #b58a55;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.hero-content h1 {
  margin: 25px 0;
  color: white;
  font-size: clamp(42px, 5.5vw, 78px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
}

.hero-content h1 span {
  color: #d2ad7b;
}

.hero-content p {
  max-width: 550px;
  color: #e0e0e0;
  font-size: 17px;
  line-height: 1.9;
}

.hero-button,
.cta-button {
  display: inline-block;
  margin-top: 30px;
  padding: 17px 28px;
  background: #b58a55;
  color: white;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background .2s;
}

.hero-button:hover,
.cta-button:hover {
  background: #967044;
}

/* INTRO */

.services-intro {
  padding: 105px 0;
  background: #f7f5f1;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.intro-grid h2 {
  margin: 22px 0 0;
  color: #252525;
  font-size: clamp(36px, 4vw, 60px);
  line-height: 1.1;
}

.intro-grid h2 span {
  color: #b58a55;
}

.intro-grid > p {
  color: #666;
  font-size: 16px;
  line-height: 2;
}

/* SERVICE ROWS */

.services-list {
  padding: 100px 0;
}

.service-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 75px;
  align-items: center;
  margin-bottom: 120px;
}

.service-row:last-child {
  margin-bottom: 0;
}

.service-row.reversed .service-image {
  order: 2;
}

.service-row.reversed .service-content {
  order: 1;
}

.service-image {
  height: 490px;
  overflow: hidden;
  background: #eee;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s;
}

.service-row:hover .service-image img {
  transform: scale(1.035);
}

.service-number {
  color: #b58a55;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.service-content h3 {
  margin: 20px 0;
  color: #252525;
  font-size: clamp(32px, 3.2vw, 48px);
  line-height: 1.2;
}

.service-content > p {
  color: #666;
  font-size: 15px;
  line-height: 1.9;
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 17px;
  margin-top: 30px;
}

.feature {
  display: flex;
  gap: 10px;
  color: #444;
  font-size: 13px;
  line-height: 1.6;
}

.feature span {
  color: #b58a55;
  font-weight: 800;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-top: 35px;
  padding-bottom: 12px;
  border-bottom: 2px solid #b58a55;
  color: #252525;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
}

.service-link span {
  color: #b58a55;
  font-size: 20px;
}

/* CTA */

.services-cta {
  padding: 110px 0;
  background: #252525;
  text-align: center;
}

.cta-content h2 {
  margin: 25px 0;
  color: white;
  font-size: clamp(42px, 5vw, 75px);
  line-height: 1.1;
}

.cta-content h2 span {
  color: #d2ad7b;
}

.cta-content p {
  color: #ccc;
  font-size: 16px;
  line-height: 1.8;
}

/* RESPONSIVE */

@media (max-width: 950px) {
  .intro-grid,
  .service-row {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .service-row.reversed .service-image,
  .service-row.reversed .service-content {
    order: initial;
  }

  .service-image {
    height: 400px;
  }

  .service-row {
    margin-bottom: 80px;
  }
}

@media (max-width: 600px) {
  .services-hero {
    min-height: 500px;
  }

  .hero-content {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  .services-intro,

  .services-list {
    padding: 75px 0 95px;
    background: #ffffff;
  }

  .service-row {
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
    align-items: center;
    gap: clamp(35px, 4vw, 70px);
    margin-bottom: 75px;
  }

  .service-row:last-child {
    margin-bottom: 0;
  }

  .service-row.reversed {
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  }

  .service-row.reversed .service-image {
    order: 2;
  }

  .service-row.reversed .service-content {
    order: 1;
  }

  .service-image {
    position: relative;
    height: 440px;
    overflow: hidden;
    background: #eeeae4;
  }

  .service-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .service-row:hover .service-image img {
    transform: scale(1.045);
  }

  .service-content {
    max-width: 650px;
  }

  .service-content h3 {
    margin: 15px 0 20px;
    color: #252525;
    font-size: clamp(30px, 3vw, 46px);
    line-height: 1.15;
    letter-spacing: -1px;
  }

  .service-content > p {
    max-width: 580px;
    margin: 0;
    color: #666;
    font-size: 16px;
    line-height: 1.8;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .services-cta {
    padding: 75px 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-image img {
    transition: none;
  }
}
</style>
