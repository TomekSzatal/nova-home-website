
<script setup lang="ts">
import { RouterLink } from "vue-router";

const services = [
  {
    number: "01",
    title: "Remonty mieszkań",
    description:
      "Kompleksowa modernizacja mieszkań. Od przygotowania przestrzeni po dopracowanie ostatnich detali.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    alt: "Nowoczesne wnętrze mieszkania",
  },
  {
    number: "02",
    title: "Remonty łazienek",
    description:
      "Eleganckie łazienki łączące funkcjonalność, komfort i ponadczasowy design.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    alt: "Elegancka łazienka w jasnych kolorach",
  },
  {
    number: "03",
    title: "Remonty kuchni",
    description:
      "Przemyślane przestrzenie kuchenne dopasowane do codziennych potrzeb.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    alt: "Nowoczesna kuchnia z drewnianymi akcentami",
  },
  {
    number: "04",
    title: "Wykończenia pod klucz",
    description:
      "Kompleksowe wykończenia wnętrz, dzięki którym przestrzeń zyskuje wyjątkowy charakter.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    alt: "Nowoczesne wnętrze wykończone w stylu premium",
  },
];
</script>

<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-top">
        <div class="section-heading">
          <span class="section-label">01 / NASZA OFERTA</span>

          <h2>
            TWORZYMY WNĘTRZA<br />
            <span>Z CHARAKTEREM.</span>
          </h2>
        </div>

        <div class="section-intro">
          <p>
            Od pojedynczych pomieszczeń po kompleksowe
            wykończenia mieszkań. Poznaj przykładowy
            zakres usług NOVA HOME.
          </p>

          <RouterLink to="/uslugi" class="all-services">
            WSZYSTKIE USŁUGI <span>↗</span>
          </RouterLink>
        </div>
      </div>

      <div class="services-grid">
        <article
          v-for="service in services"
          :key="service.number"
          class="service-card"
        >
          <RouterLink
            to="/uslugi"
            class="service-image-link"
            :aria-label="`Zobacz usługę: ${service.title}`"
          >
            <div class="service-image">
              <img
                :src="service.image"
                :alt="service.alt"
                loading="lazy"
              />

              <span class="service-number">
                {{ service.number }}
              </span>

              <span class="image-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </RouterLink>

          <div class="service-content">
            <h3>{{ service.title }}</h3>

            <p>{{ service.description }}</p>

            <RouterLink to="/uslugi" class="service-link">
              DOWIEDZ SIĘ WIĘCEJ
              <span>↗</span>
            </RouterLink>
          </div>
        </article>
      </div>

      <div class="services-bottom">
        <p>
          Masz pomysł na nowe wnętrze?
          <strong>Poznaj możliwości współpracy.</strong>
        </p>

        <RouterLink to="/kontakt" class="contact-button">
          PRZEJDŹ DO KONTAKTU ↗
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 110px 0 100px;
  background: #f8f7f4;
}

.container {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 5%;
}

/* HEADING */

.section-top {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: end;
  gap: 70px;
  margin-bottom: 55px;
}

.section-label {
  color: #b58a55;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.section-heading h2 {
  margin: 20px 0 0;
  color: #252525;
  font-size: clamp(34px, 4vw, 60px);
  line-height: 1.12;
  letter-spacing: -1.5px;
}

.section-heading h2 span {
  color: #b58a55;
}

.section-intro p {
  max-width: 450px;
  margin: 0 0 22px;
  color: #777;
  font-size: 16px;
  line-height: 1.9;
}

.all-services {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #b58a55;
  color: #252525;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
}

.all-services span {
  color: #b58a55;
  font-size: 20px;
}

/* GRID */


.services-intro {
  padding: 75px 0;
  background: #f7f5f1;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}


.service-card {
  min-width: 0;
  background: #fff;
  transition: transform .3s ease, box-shadow .3s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, .08);
}

.service-image-link {
  display: block;
  text-decoration: none;
}

.service-image {
  position: relative;
  height: 270px;
  overflow: hidden;
  background: #eae6df;
}

.service-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.07);
}

.service-number {
  position: absolute;
  top: 17px;
  left: 17px;
  padding: 9px 12px;
  background: rgba(255, 255, 255, .94);
  color: #252525;
  font-size: 12px;
  font-weight: 800;
}

.image-arrow {
  position: absolute;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  background: #b58a55;
  color: #fff;
  font-size: 23px;
  transition: background .2s ease;
}

.service-card:hover .image-arrow {
  background: #967044;
}

/* CONTENT */

.service-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 230px;
  padding: 27px 24px 30px;
}

.service-content h3 {
  margin: 0 0 14px;
  color: #252525;
  font-size: 21px;
  line-height: 1.3;
}

.service-content p {
  margin: 0;
  color: #777;
  font-size: 14px;
  line-height: 1.8;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 25px;
  color: #b58a55;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .7px;
  text-decoration: none;
}

.service-link span {
  font-size: 18px;
  transition: transform .2s ease;
}

.service-link:hover span {
  transform: translate(3px, -3px);
}

/* BOTTOM */

.services-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 55px;
  padding-top: 35px;
  border-top: 1px solid #dedbd5;
}

.services-bottom p {
  margin: 0;
  color: #777;
  font-size: 16px;
  line-height: 1.7;
}

.services-bottom strong {
  color: #252525;
}

.contact-button {
  flex-shrink: 0;
  display: inline-block;
  padding: 17px 25px;
  background: #b58a55;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .7px;
  text-decoration: none;
  transition: background .2s ease;
}

.contact-button:hover {
  background: #967044;
}

/* TABLET */

@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .service-image {
    height: 320px;
  }
}

@media (max-width: 800px) {
  .services {
    padding: 80px 0;
  }

  .section-top {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 40px;
  }
}

/* MOBILE */

@media (max-width: 600px) {
  .services {
    padding: 70px 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .service-image {
    height: 290px;
  }

  .service-content {
    min-height: auto;
  }

  .service-link {
    margin-top: 10px;
  }

  .services-bottom {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 40px;
  }

  .contact-button {
    width: 100%;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-image img,
  .service-link span {
    transition: none;
  }
}
</style>
