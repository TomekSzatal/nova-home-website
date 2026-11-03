<template>
  <section id="about" class="about">
    <div class="about-image">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        alt="Nowoczesne wykończenie wnętrza"
      />

      <div class="experience-box">
        <strong>10+</strong>
        <span>Lat doświadczenia</span>
      </div>
    </div>

    <div class="about-content">
      <span class="section-label">POZNAJ NOVA HOME</span>

      <h2>
        Dobre wnętrze zaczyna się
        <span>od dobrego wykonania.</span>
      </h2>

      <p>
        W NOVA HOME wierzymy, że każde wnętrze
        powinno być połączeniem estetyki,
        funkcjonalności i jakości wykonania.
      </p>

      <p>
        Realizujemy remonty i wykończenia wnętrz,
        dbając o każdy etap współpracy.
        Stawiamy na dokładność, terminowość
        i indywidualne podejście do klienta.
      </p>

      <div class="about-features">
        <div>
          <span class="check">✓</span>
          Indywidualne podejście
        </div>

        <div>
          <span class="check">✓</span>
          Dbałość o szczegóły
        </div>

        <div>
          <span class="check">✓</span>
          Przejrzyste zasady współpracy
        </div>

        <div>
          <span class="check">✓</span>
          Kompleksowa realizacja
        </div>
      </div>

      <a href="#contact" class="about-button">
        Porozmawiajmy o Twoim remoncie →
      </a>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
  padding: 110px 8%;
  background: #ffffff;
}

.about-image {
  position: relative;
}

.about-image img {
  display: block;
  width: 100%;
  height: 560px;
  object-fit: cover;
}

.experience-box {
  position: absolute;
  right: -25px;
  bottom: 35px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 25px 35px;
  background: #b58a55;
  color: #ffffff;
}

.experience-box strong {
  font-size: 38px;
}

.experience-box span {
  font-size: 13px;
}

.about-content {
  max-width: 550px;
}

.section-label {
  color: #b58a55;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
}

.about-content h2 {
  margin: 20px 0;
  color: #252525;
  font-size: clamp(32px, 4vw, 46px);
  line-height: 1.2;
  letter-spacing: -1.5px;
}

.about-content h2 span {
  display: block;
  color: #b58a55;
}

.about-content p {
  margin-bottom: 18px;
  color: #777777;
  font-size: 15px;
  line-height: 1.9;
}

.about-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 30px 0;
}

.about-features div {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #444444;
  font-size: 13px;
  font-weight: 600;
}

.check {
  color: #b58a55;
  font-size: 19px;
}

.about-button {
  display: inline-block;
  margin-top: 10px;
  padding: 16px 22px;
  background: #252525;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
}

.about-button:hover {
  background: #b58a55;
}

@media (max-width: 850px) {
  .about {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  .about-image img {
    height: 420px;
  }

  .experience-box {
    right: 0;
  }
}

@media (max-width: 500px) {
  .about {
    padding: 75px 6%;
  }

  .about-features {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .about {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
    padding: 70px 6%;
  }

  .about-image img {
    height: 380px;
  }

  .about-content h2 {
    font-size: clamp(30px, 7vw, 40px);
  }

  .about-content p {
    font-size: 16px;
  }

  .about-features {
    gap: 18px;
  }
}

@media (max-width: 480px) {
  .about-image img {
    height: 300px;
  }

  .experience-box {
    right: 0;
    bottom: 20px;
    padding: 18px 22px;
  }

  .experience-box strong {
    font-size: 30px;
  }

  .about-features {
    grid-template-columns: 1fr;
  }
}
</style>
