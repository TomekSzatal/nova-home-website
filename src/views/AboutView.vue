
<script setup lang="ts">
import { RouterLink } from "vue-router";

const values = [
  {
    number: "01",
    title: "Dbałość o detale",
    description:
      "W dobrze zaprojektowanym wnętrzu znaczenie ma każdy element. Od wyboru materiałów po końcowe wykończenie.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Indywidualne podejście",
    description:
      "Każda przestrzeń jest inna. Dlatego koncepcja remontu powinna odpowiadać potrzebom i stylowi życia jej mieszkańców.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Przemyślane rozwiązania",
    description:
      "Estetyka powinna iść w parze z funkcjonalnością. Stawiamy na rozwiązania, które sprawdzają się na co dzień.",
    icon: "▣",
  },
  {
    number: "04",
    title: "Jasna komunikacja",
    description:
      "Przejrzyste ustalenia, zrozumiały zakres prac i regularny kontakt to podstawa dobrze zorganizowanej współpracy.",
    icon: "◎",
  },
];

const steps = [
  {
    number: "01",
    title: "Rozmowa",
    description:
      "Poznanie potrzeb, oczekiwań i charakteru planowanej inwestycji.",
  },
  {
    number: "02",
    title: "Planowanie",
    description:
      "Określenie zakresu prac, rozwiązań i wstępnego harmonogramu.",
  },
  {
    number: "03",
    title: "Realizacja",
    description:
      "Przeprowadzenie zaplanowanych prac z uwzględnieniem jakości wykonania.",
  },
  {
    number: "04",
    title: "Efekt końcowy",
    description:
      "Dopracowanie szczegółów i przygotowanie wnętrza do użytkowania.",
  },
];
</script>

<template>
  <main class="about-page">
    <!-- HERO -->
    <section class="about-hero">
      <div class="container hero-content">
        <span class="eyebrow">NOVA HOME / O NAS</span>

        <h1>
          PRZESTRZEŃ<br />
          <span>MA ZNACZENIE.</span>
        </h1>

        <p>
          Wierzymy, że dobrze zaprojektowane wnętrze
          potrafi zmienić codzienność. Poznaj filozofię
          stojącą za koncepcją NOVA HOME.
        </p>
      </div>
    </section>

    <!-- HISTORIA / KONCEPCJA -->
    <section class="story-section">
      <div class="container story-grid">
        <div class="story-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
            alt="Eleganckie, jasne wnętrze mieszkalne"
            loading="lazy"
          />
          <div class="image-label">DESIGN & FUNCTION</div>
        </div>

        <div class="story-content">
          <span class="section-label">NASZA FILOZOFIA</span>

          <h2>
            PIĘKNO TKWI<br />
            <span>W SZCZEGÓŁACH.</span>
          </h2>

          <p>
            NOVA HOME to koncepcja marki specjalizującej się
            w remontach i kompleksowym wykańczaniu wnętrz.
            Jej fundamentem jest połączenie ponadczasowej
            estetyki z codzienną funkcjonalnością.
          </p>

          <p>
            W centrum tej filozofii znajduje się człowiek
            i przestrzeń, z której korzysta każdego dnia.
            Przemyślany układ, odpowiednie materiały
            i dopracowane detale tworzą spójną całość.
          </p>

          <p>
            Ta strona jest projektem demonstracyjnym
            prezentującym, jak może wyglądać nowoczesna
            witryna firmy remontowo-wykończeniowej.
          </p>

          <RouterLink to="/uslugi" class="text-link">
            POZNAJ ZAKRES USŁUG <span>↗</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- WARTOŚCI -->
    <section class="values-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-label">CO JEST WAŻNE</span>

          <h2>
            FUNDAMENTY<br />
            <span>DOBREJ WSPÓŁPRACY.</span>
          </h2>

          <p>
            Cztery wartości, które definiują podejście
            prezentowane przez markę NOVA HOME.
          </p>
        </div>

        <div class="values-grid">
          <article
            v-for="value in values"
            :key="value.number"
            class="value-card"
          >
            <div class="value-top">
              <span class="value-icon" aria-hidden="true">
                {{ value.icon }}
              </span>
              <span class="value-number">{{ value.number }}</span>
            </div>

            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- WIZJA -->
    <section class="vision-section">
      <div class="vision-image">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
          alt="Nowoczesne wnętrze z naturalnymi materiałami"
          loading="lazy"
        />
      </div>

      <div class="vision-content">
        <span class="section-label">NASZA WIZJA</span>

        <h2>
          WIĘCEJ NIŻ<br />
          <span>REMONT.</span>
        </h2>

        <p>
          Dobrze wykończone wnętrze to nie tylko estetyczne
          ściany i podłogi. To przestrzeń, która odpowiada
          na potrzeby domowników i zapewnia komfort
          przez długie lata.
        </p>

        <p>
          W koncepcji NOVA HOME każdy projekt rozpoczyna
          się od zrozumienia oczekiwań i poszukiwania
          najlepszych rozwiązań.
        </p>

        <RouterLink to="/realizacje" class="vision-link">
          ZOBACZ INSPIRACJE ↗
        </RouterLink>
      </div>
    </section>

    <!-- PROCES -->
    <section class="process-section">
      <div class="container">
        <div class="section-heading process-heading">
          <span class="section-label">JAK TO WYGLĄDA</span>

          <h2>
            OD POMYSŁU<br />
            <span>DO GOTOWEGO WNĘTRZA.</span>
          </h2>

          <p>
            Przykładowy model współpracy przy realizacji
            projektu remontowego.
          </p>
        </div>

        <div class="steps-grid">
          <article
            v-for="step in steps"
            :key="step.number"
            class="step-card"
          >
            <span class="step-number">{{ step.number }}</span>
            <div class="step-line"></div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="about-cta">
      <div class="container cta-content">
        <span class="section-label">POROZMAWIAJMY</span>

        <h2>
          DOBRE WNĘTRZE<br />
          <span>ZACZYNA SIĘ OD POMYSŁU.</span>
        </h2>

        <p>
          Poznaj przykładową ofertę i sposób prezentacji
          usług remontowych w NOVA HOME.
        </p>

        <RouterLink to="/kontakt" class="cta-button">
          PRZEJDŹ DO KONTAKTU ↗
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  background: #fff;
}

.container {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 6%;
}

.eyebrow,
.section-label {
  color: #b58a55;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

/* HERO */

.about-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 560px;
  background:
    linear-gradient(90deg, rgba(20, 20, 20, .9), rgba(20, 20, 20, .35)),
    url("https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1920&q=85")
      center / cover no-repeat;
}

.hero-content {
  padding-top: 100px;
  padding-bottom: 100px;
}

.hero-content h1 {
  margin: 25px 0;
  color: #fff;
  font-size: clamp(45px, 6vw, 85px);
  line-height: 1.1;
  letter-spacing: -2px;
}

.hero-content h1 span {
  color: #d2ad7b;
}

.hero-content p {
  max-width: 580px;
  color: #e0e0e0;
  font-size: 17px;
  line-height: 1.9;
}

/* STORY */

.story-section {
  padding: 120px 0;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 90px;
}

.story-image {
  position: relative;
  height: 590px;
  background: #eee;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-label {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px 28px;
  background: #b58a55;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.story-content h2,
.vision-content h2 {
  margin: 23px 0;
  color: #252525;
  font-size: clamp(36px, 4vw, 58px);
  line-height: 1.15;
}

.story-content h2 span,
.vision-content h2 span {
  color: #b58a55;
}

.story-content p {
  margin-bottom: 20px;
  color: #666;
  font-size: 15px;
  line-height: 1.95;
}

.text-link {
  display: inline-flex;
  gap: 20px;
  align-items: center;
  margin-top: 18px;
  padding-bottom: 12px;
  border-bottom: 2px solid #b58a55;
  color: #252525;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
}

.text-link span {
  color: #b58a55;
  font-size: 20px;
}

/* VALUES */

.values-section {
  padding: 110px 0;
  background: #f7f5f1;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 55px;
}

.section-heading h2 {
  margin: 22px 0;
  color: #252525;
  font-size: clamp(36px, 4vw, 60px);
  line-height: 1.15;
}

.section-heading h2 span {
  color: #b58a55;
}

.section-heading p {
  max-width: 560px;
  color: #666;
  font-size: 16px;
  line-height: 1.9;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.value-card {
  min-height: 300px;
  padding: 35px 27px;
  background: #fff;
  border: 1px solid #eee;
  transition: transform .25s, box-shadow .25s;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, .06);
}

.value-top {
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 42px;
}

.value-icon {
  color: #b58a55;
  font-size: 34px;
  line-height: 1;
}

.value-number {
  color: #aaa;
  font-size: 12px;
  font-weight: 700;
}

.value-card h3 {
  margin: 0 0 15px;
  color: #252525;
  font-size: 20px;
}

.value-card p {
  color: #777;
  font-size: 13px;
  line-height: 1.9;
}

/* VISION */

.vision-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 570px;
  background: #252525;
}

.vision-image {
  min-height: 570px;
  overflow: hidden;
}

.vision-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vision-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 85px 12%;
}

.vision-content h2 {
  color: #fff;
}

.vision-content h2 span {
  color: #d2ad7b;
}

.vision-content p {
  max-width: 540px;
  color: #ccc;
  font-size: 15px;
  line-height: 1.95;
}

.vision-link {
  display: inline-block;
  margin-top: 20px;
  padding: 16px 25px;
  background: #b58a55;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
}

.vision-link:hover {
  background: #967044;
}

/* PROCESS */

.process-section {
  padding: 120px 0;
}

.process-heading {
  max-width: 900px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;
}

.step-card {
  padding: 20px 0;
}

.step-number {
  color: #b58a55;
  font-size: 50px;
  font-weight: 800;
  letter-spacing: -2px;
}

.step-line {
  height: 1px;
  margin: 25px 0 30px;
  background: #d5d5d5;
}

.step-card h3 {
  margin-bottom: 15px;
  color: #252525;
  font-size: 23px;
}

.step-card p {
  color: #777;
  font-size: 14px;
  line-height: 1.85;
}

/* CTA */

.about-cta {
  padding: 115px 0;
  background: #f7f5f1;
  text-align: center;
}

.cta-content h2 {
  margin: 25px 0;
  color: #252525;
  font-size: clamp(38px, 5vw, 70px);
  line-height: 1.15;
}

.cta-content h2 span {
  color: #b58a55;
}

.cta-content p {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
}

.cta-button {
  display: inline-block;
  margin-top: 30px;
  padding: 18px 30px;
  background: #b58a55;
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
}

.cta-button:hover {
  background: #967044;
}

/* RESPONSIVE */

@media (max-width: 1100px) {
  .story-grid {
    gap: 45px;
  }

  .values-grid,
  .steps-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .vision-content {
    padding: 65px 8%;
  }
}

@media (max-width: 800px) {
  .story-grid,
  .vision-section {
    grid-template-columns: 1fr;
  }

  .story-image {
    height: 450px;
  }

  .vision-image {
    min-height: 350px;
    height: 350px;
  }

  .vision-content {
    padding: 70px 6%;
  }
}

@media (max-width: 600px) {
  .about-hero {
    min-height: 480px;
  }

  .hero-content {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .story-section,
  .values-section,
  .process-section {
    padding: 75px 0;
  }

  .story-image {
    height: 340px;
  }

  .values-grid,
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .value-card {
    min-height: auto;
  }

  .value-top {
    margin-bottom: 25px;
  }

  .about-cta {
    padding: 80px 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .value-card {
    transition: none;
  }
}
</style>
