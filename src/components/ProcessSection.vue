
<template>
  <section class="process">
    <div class="process-heading">
      <span class="section-label">JAK DZIAŁAMY</span>

      <h2>
        Od pomysłu do
        <span>gotowego wnętrza.</span>
      </h2>

      <p>
        Przemyślany proces, jasne zasady
        i pełne zaangażowanie na każdym etapie.
      </p>
    </div>

    <div class="process-grid">
      <article class="process-card">
        <span class="process-number">01</span>
        <div class="process-icon">✆</div>
        <h3>Rozmowa i konsultacja</h3>
        <p>
          Poznajemy Twoje potrzeby, oczekiwania
          oraz pomysł na wymarzone wnętrze.
        </p>
      </article>

      <article class="process-card">
        <span class="process-number">02</span>
        <div class="process-icon">▤</div>
        <h3>Plan i wycena</h3>
        <p>
          Przygotowujemy zakres prac,
          harmonogram i indywidualną wycenę.
        </p>
      </article>

      <article class="process-card">
        <span class="process-number">03</span>
        <div class="process-icon">⚒</div>
        <h3>Realizacja</h3>
        <p>
          Przystępujemy do pracy,
          dbając o jakość i każdy szczegół.
        </p>
      </article>

      <article class="process-card">
        <span class="process-number">04</span>
        <div class="process-icon">✓</div>
        <h3>Odbiór projektu</h3>
        <p>
          Przekazujemy gotową przestrzeń
          i sprawdzamy wspólnie efekt końcowy.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.process {
  padding: 110px 8%;
  background: #ffffff;
}

.process-heading {
  max-width: 650px;
  margin-bottom: 60px;
}

.section-label {
  color: #b58a55;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
}

.process-heading h2 {
  margin: 18px 0;
  color: #252525;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.2;
}

.process-heading h2 span {
  display: block;
  color: #b58a55;
}

.process-heading p {
  color: #777777;
  font-size: 15px;
  line-height: 1.8;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.process-card {
  position: relative;
  padding: 35px 25px;
  border-top: 2px solid #b58a55;
  background: #f8f7f4;
}

.process-number {
  position: absolute;
  top: 20px;
  right: 22px;
  color: #d6d1ca;
  font-size: 32px;
  font-weight: 700;
}

.process-icon {
  margin-bottom: 30px;
  color: #b58a55;
  font-size: 34px;
}

.process-card h3 {
  margin-bottom: 15px;
  color: #252525;
  font-size: 18px;
}

.process-card p {
  color: #777777;
  font-size: 14px;
  line-height: 1.8;
}

@media (max-width: 1000px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .process {
    padding: 75px 6%;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }
}
</style>
