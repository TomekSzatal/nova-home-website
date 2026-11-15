
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section id="about" class="about">
    <div class="about-container">
      <!-- LEWA STRONA -->
      <div class="about-visual">
        <div class="image-frame">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt="Eleganckie wnętrze z nowoczesnym wykończeniem"
            loading="lazy"
          />
        </div>

        <div class="visual-badge">
          <span>PRZESTRZEŃ</span>
          <strong>MA ZNACZENIE.</strong>
          <span class="badge-line"></span>
          <small>ESTETYKA / JAKOŚĆ / DETAL</small>
        </div>

        <div class="image-decoration"></div>
      </div>

      <!-- PRAWA STRONA -->
      <div class="about-content">
        <div class="section-topline">
          <span class="topline-rule"></span>
          <span>02 / POZNAJ NOVA HOME</span>
        </div>

        <h2>
          DOBRE WNĘTRZE<br />
          ZACZYNA SIĘ OD<br />
          <span>DOBREGO WYKONANIA.</span>
        </h2>

        <p class="about-lead">
          Wierzymy, że wyjątkowe wnętrze to coś więcej
          niż piękny wygląd.
        </p>

        <p class="about-description">
          Liczy się funkcjonalność, komfort i jakość
          każdego detalu. NOVA HOME to koncepcja firmy,
          która łączy nowoczesne podejście do remontów
          z dbałością o potrzeby klienta.
        </p>

        <div class="about-features">
          <div class="feature">
            <span class="feature-icon">01</span>
            <div>
              <strong>Indywidualne podejście</strong>
              <p>Rozwiązania dopasowane do Twojej przestrzeni.</p>
            </div>
          </div>

          <div class="feature">
            <span class="feature-icon">02</span>
            <div>
              <strong>Dbałość o detale</strong>
              <p>Estetyka i jakość na każdym etapie.</p>
            </div>
          </div>

          <div class="feature">
            <span class="feature-icon">03</span>
            <div>
              <strong>Kompleksowa realizacja</strong>
              <p>Spójna wizja od pomysłu po wykończenie.</p>
            </div>
          </div>
        </div>

        <div class="about-actions">
          <RouterLink to="/o-nas" class="about-primary">
            POZNAJ NAS <span>↗</span>
          </RouterLink>

          <RouterLink to="/kontakt" class="about-secondary">
            KONTAKT <span>↗</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 110px 0;
  background: #ffffff;
  overflow: hidden;
}

.about-container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(35px, 4vw, 70px);
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 5%;
}

/* IMAGE */

.about-visual {
  position: relative;
  min-width: 0;
  padding: 0 28px 28px 0;
}

.image-frame {
  position: relative;
  z-index: 1;
  height: 610px;
  overflow: hidden;
  background: #e9e5df;
}

.image-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .7s ease;
}

.about-visual:hover .image-frame img {
  transform: scale(1.04);
}

.image-decoration {
  position: absolute;
  top: 28px;
  right: 0;
  bottom: 0;
  left: 28px;
  border: 1px solid #d9c5aa;
}

.visual-badge {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 65px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 245px;
  padding: 28px;
  background: #b58a55;
  color: #ffffff;
  box-shadow: 0 15px 35px rgba(0, 0, 0, .12);
}

.visual-badge > span:first-child {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.visual-badge strong {
  margin-top: 8px;
  font-size: 22px;
  line-height: 1.2;
  letter-spacing: -.5px;
}

.badge-line {
  width: 35px;
  height: 1px;
  margin: 20px 0;
  background: rgba(255, 255, 255, .7);
}

.visual-badge small {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
}

/* CONTENT */

.about-content {
  min-width: 0;
}

.section-topline {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 28px;
  color: #b58a55;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.topline-rule {
  width: 32px;
  height: 2px;
  background: #b58a55;
}

.about-content h2 {
  margin: 0 0 30px;
  color: #252525;
  font-size: clamp(32px, 3.2vw, 51px);
  font-weight: 750;
  line-height: 1.17;
  letter-spacing: -1.5px;
}

.about-content h2 span {
  color: #b58a55;
}

.about-lead {
  max-width: 500px;
  margin: 0 0 18px;
  color: #252525;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.65;
}

.about-description {
  max-width: 520px;
  margin: 0;
  color: #777777;
  font-size: 15px;
  line-height: 1.9;
}

/* FEATURES */

.about-features {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 30px 0;
  border-top: 1px solid #eae8e3;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid #eae8e3;
}

.feature-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid #ded2c2;
  color: #b58a55;
  font-size: 12px;
  font-weight: 800;
}

.feature strong {
  display: block;
  margin: 0 0 5px;
  color: #252525;
  font-size: 15px;
  font-weight: 700;
}

.feature p {
  margin: 0;
  color: #888888;
  font-size: 13px;
  line-height: 1.6;
}

/* BUTTONS */

.about-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
}

.about-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 17px 25px;
  background: #252525;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background .25s ease, transform .25s ease;
}

.about-primary:hover {
  background: #b58a55;
  transform: translateY(-2px);
}

.about-primary span,
.about-secondary span {
  font-size: 19px;
}

.about-secondary {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #b58a55;
  color: #252525;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color .25s ease;
}

.about-secondary:hover {
  color: #b58a55;
}

/* TABLET */

@media (max-width: 1050px) {
  .about-container {
    gap: 45px;
  }

  .image-frame {
    height: 540px;
  }

  .about-content h2 {
    font-size: clamp(30px, 3.7vw, 42px);
  }
}

/* MOBILE */

@media (max-width: 850px) {
  .about {
    padding: 80px 0;
  }

  .about-container {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  .about-visual {
    max-width: 650px;
  }

  .image-frame {
    height: 480px;
  }

  .about-content {
    max-width: 650px;
  }
}

@media (max-width: 550px) {
  .about {
    padding: 65px 0;
  }

  .about-container {
    gap: 40px;
  }

  .about-visual {
    padding: 0 15px 15px 0;
  }

  .image-frame {
    height: 360px;
  }

  .image-decoration {
    top: 15px;
    left: 15px;
  }

  .visual-badge {
    bottom: 35px;
    width: 195px;
    padding: 20px;
  }

  .visual-badge strong {
    font-size: 18px;
  }

  .visual-badge small {
    font-size: 8px;
  }

  .about-content h2 {
    font-size: clamp(30px, 7vw, 40px);
    letter-spacing: -1px;
  }

  .about-lead {
    font-size: 17px;
  }

  .about-description {
    font-size: 15px;
  }

  .about-actions {
    gap: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .image-frame img,
  .about-primary,
  .about-secondary {
    transition: none;
  }
}
</style>
