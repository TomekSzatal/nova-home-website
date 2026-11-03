<template>
  <section id="services" class="services">
    <div class="section-heading">
      <span class="section-label">CO ROBIMY</span>

      <h2>
        Kompleksowe rozwiązania
        <span>dla Twojego wnętrza.</span>
      </h2>

      <p>
        Zapewniamy kompleksową obsługę remontową.
        Od przygotowania przestrzeni po perfekcyjne
        wykończenie każdego detalu.
      </p>
    </div>

    <div class="services-grid">
      <article class="service-card">
        <div class="service-number">01</div>
        <div class="service-icon">⌂</div>
        <h3>Remonty mieszkań</h3>
        <p>
          Kompleksowe remonty mieszkań i domów.
          Zajmujemy się każdym etapem realizacji.
        </p>
        <a href="#contact">Dowiedz się więcej →</a>
      </article>

      <article class="service-card">
        <div class="service-number">02</div>
        <div class="service-icon">▤</div>
        <h3>Wykończenia wnętrz</h3>
        <p>
          Nowoczesne wykończenia dopasowane
          do Twojego stylu i oczekiwań.
        </p>
        <a href="#contact">Dowiedz się więcej →</a>
      </article>

      <article class="service-card">
        <div class="service-number">03</div>
        <div class="service-icon">◈</div>
        <h3>Łazienki i kuchnie</h3>
        <p>
          Funkcjonalne i estetyczne przestrzenie
          zaprojektowane z dbałością o szczegóły.
        </p>
        <a href="#contact">Dowiedz się więcej →</a>
      </article>

      <article class="service-card">
        <div class="service-number">04</div>
        <div class="service-icon">✧</div>
        <h3>Prace wykończeniowe</h3>
        <p>
          Malowanie, gładzie, układanie płytek
          i wiele innych prac remontowych.
        </p>
        <a href="#contact">Dowiedz się więcej →</a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 110px 8%;
  background: #f8f7f4;
}

.section-heading {
  max-width: 650px;
  margin-bottom: 55px;
}

.section-label {
  color: #b58a55;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
}

.section-heading h2 {
  margin: 18px 0;
  color: #252525;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.2;
  letter-spacing: -1.5px;
}

.section-heading h2 span {
  display: block;
  color: #b58a55;
}

.section-heading p {
  color: #777777;
  font-size: 16px;
  line-height: 1.8;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.service-card {
  position: relative;
  padding: 35px 25px;
  min-height: 290px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
}

.service-number {
  position: absolute;
  top: 25px;
  right: 25px;
  color: #cccccc;
  font-size: 13px;
}

.service-icon {
  margin-bottom: 25px;
  color: #b58a55;
  font-size: 35px;
}

.service-card h3 {
  margin-bottom: 15px;
  color: #252525;
  font-size: 19px;
}

.service-card p {
  margin-bottom: 25px;
  color: #777777;
  font-size: 14px;
  line-height: 1.8;
}

.service-card a {
  color: #b58a55;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 1000px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .services {
    padding: 75px 6%;
  }
}

@media (max-width: 768px) {
  .services {
    padding: 70px 6%;
  }

  .section-heading {
    margin-bottom: 35px;
  }

  .section-heading h2 {
    font-size: clamp(30px, 7vw, 40px);
    letter-spacing: -1px;
  }

  .section-heading p {
    font-size: 16px;
    line-height: 1.7;
  }

  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;
  }

  .service-card {
    min-height: auto;
    padding: 28px 20px;
  }

  .service-card h3 {
    font-size: 18px;
  }

  .service-card p {
    font-size: 14px;
  }
}

@media (max-width: 550px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 30px 25px;
  }
}
</style>
