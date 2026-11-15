
<template>
  <section id="home" class="hero">
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <span class="hero-label">
        KOMPLEKSOWE USŁUGI REMONTOWE
      </span>

      <h1>
        Tworzymy przestrzenie,
        <span>do których chce się wracać.</span>
      </h1>

      <p>
        Od pierwszego projektu po ostatni detal.
        Realizujemy remonty i wykończenia wnętrz
        z dbałością o każdy szczegół.
      </p>

      <div class="hero-actions">
        <RouterLink to="/kontakt" class="primary-button">
          Bezpłatna wycena
        </RouterLink>

        <RouterLink to="/realizacje" class="secondary-button">
          Zobacz realizacje →
        </RouterLink>
      </div>

      <div class="hero-stats">
        <div>
          <strong>01</strong>
          <span>Nowoczesny design</span>
        </div>

        <div>
          <strong>04</strong>
          <span>Przykładowe usługi</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Projekt demonstracyjny</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 680px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 90px 8%;
  background-image: url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0");
  background-size: cover;
  background-position: center;
  color: #ffffff;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(20, 20, 20, 0.88) 0%,
    rgba(20, 20, 20, 0.65) 50%,
    rgba(20, 20, 20, 0.15) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.hero-label {
  display: inline-block;
  margin-bottom: 25px;
  color: #d6ad79;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
}

.hero h1 {
  margin: 0;
  font-size: clamp(46px, 5vw, 76px);
  line-height: 1.12;
  letter-spacing: -2px;
  font-weight: 700;
}

.hero h1 span {
  display: block;
  color: #d6ad79;
}

.hero p {
  max-width: 600px;
  margin: 30px 0;
  color: #e0e0e0;
  font-size: 18px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
}

.primary-button {
  display: inline-block;
  padding: 18px 30px;
  background: #b58a55;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.2s ease, transform 0.2s ease;
}

.primary-button:hover {
  background: #967044;
  transform: translateY(-3px);
}

.secondary-button {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
}

.hero-stats {
  display: flex;
  gap: 55px;
  margin-top: 65px;
  flex-wrap: wrap;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.hero-stats strong {
  font-size: 32px;
  color: #d6ad79;
}

.hero-stats span {
  color: #dddddd;
  font-size: 14px;
}

@media (max-width: 768px) {
  .hero {
    min-height: 600px;
    padding: 90px 6%;
  }

  .hero h1 {
    font-size: clamp(38px, 7vw, 54px);
  }

  .hero p {
    font-size: 16px;
  }

  .hero-stats {
    gap: 25px;
    margin-top: 45px;
  }

  .hero-stats strong {
    font-size: 26px;
  }

  .hero-stats span {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 85px 6% 65px;
  }

  .hero h1 {
    font-size: 38px;
    letter-spacing: -1px;
  }

  .hero-actions {
    gap: 18px;
  }

  .primary-button {
    padding: 15px 22px;
    font-size: 14px;
  }

  .secondary-button {
    font-size: 14px;
  }

  .hero-stats {
    gap: 20px;
  }
}
</style>
