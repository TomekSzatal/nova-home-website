
<script setup lang="ts">
import { ref } from "vue";
import ContactSection from "../components/ContactSection.vue";

const faqs = [
  {
    question: "Jak wygląda proces wyceny remontu?",
    answer:
      "Zazwyczaj rozpoczyna się od rozmowy o zakresie prac, metrażu, oczekiwaniach i terminie. Następnie można przygotować indywidualną propozycję.",
  },
  {
    question: "Czy można zlecić kompleksowe wykończenie mieszkania?",
    answer:
      "Przykładowa oferta NOVA HOME obejmuje zarówno pojedyncze prace remontowe, jak i kompleksowe wykończenia wnętrz.",
  },
  {
    question: "Ile trwa remont mieszkania?",
    answer:
      "Czas realizacji zależy od wielkości mieszkania, zakresu prac, dostępności materiałów i stopnia skomplikowania projektu.",
  },
  {
    question: "Czy NOVA HOME jest prawdziwą firmą remontową?",
    answer:
      "NOVA HOME jest demonstracyjnym projektem strony internetowej przygotowanym do portfolio Tovexa Studio. Nie jest rzeczywistą ofertą usług remontowych.",
  },
];

const openedFaq = ref<number | null>(0);

function toggleFaq(index: number) {
  openedFaq.value = openedFaq.value === index ? null : index;
}
</script>

<template>
  <main class="contact-page">
    <!-- HERO -->
    <section class="contact-hero">
      <div class="container">
        <span class="eyebrow">NOVA HOME / KONTAKT</span>

        <h1>
          POROZMAWIAJMY<br />
          <span>O TWOIM WNĘTRZU.</span>
        </h1>

        <p>
          Każdy dobry projekt zaczyna się od rozmowy.
          Poznaj przykładowy sposób kontaktu z firmą
          zajmującą się remontami i wykończeniem wnętrz.
        </p>
      </div>
    </section>

    <!-- INFORMACJE -->
    <section class="contact-intro">
      <div class="container intro-grid">
        <div>
          <span class="section-label">PIERWSZY KROK</span>

          <h2>
            MASZ POMYSŁ?<br />
            <span>POROZMAWIAJMY.</span>
          </h2>
        </div>

        <div class="intro-content">
          <p>
            Przedstaw swoją wizję, opisz zakres prac
            i określ oczekiwany termin.
            Dobrze przygotowane zapytanie ułatwia
            zaplanowanie kolejnych etapów.
          </p>

          <div class="info-note">
            <span class="note-icon">✦</span>

            <p>
              To demonstracyjna strona NOVA HOME.
              Nie przyjmujemy rzeczywistych zleceń
              remontowych za pośrednictwem tej marki.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ISTNIEJĄCY FORMULARZ -->
    <section class="form-section">
      <ContactSection />
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container faq-grid">
        <div class="faq-heading">
          <span class="section-label">FAQ</span>

          <h2>
            CZĘSTO ZADAWANE<br />
            <span>PYTANIA.</span>
          </h2>

          <p>
            Najważniejsze informacje dotyczące
            przykładowego procesu współpracy
            przy realizacji remontu.
          </p>
        </div>

        <div class="faq-list">
          <article
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-item"
          >
            <button
              type="button"
              class="faq-question"
              :aria-expanded="openedFaq === index"
              @click="toggleFaq(index)"
            >
              <span>{{ faq.question }}</span>

              <span class="faq-icon">
                {{ openedFaq === index ? "−" : "+" }}
              </span>
            </button>

            <div v-if="openedFaq === index" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ZAKOŃCZENIE -->
    <section class="contact-bottom">
      <div class="container">
        <span class="section-label">NOVA HOME</span>

        <h2>
          DOBRE WNĘTRZA<br />
          <span>ZACZYNAJĄ SIĘ OD POMYSŁU.</span>
        </h2>

        <p>
          Projekt demonstracyjny strony internetowej
          dla branży remontowo-wykończeniowej.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
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

.contact-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 490px;
  padding: 95px 0;
  background:
    linear-gradient(
      90deg,
      rgba(20, 20, 20, .92),
      rgba(20, 20, 20, .55)
    ),
    url("https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1920&q=85")
      center / cover no-repeat;
}

.contact-hero h1 {
  margin: 25px 0;
  color: #fff;
  font-size: clamp(42px, 5.5vw, 78px);
  line-height: 1.1;
  letter-spacing: -2px;
}

.contact-hero h1 span {
  color: #d2ad7b;
}

.contact-hero p {
  max-width: 600px;
  color: #e0e0e0;
  font-size: 17px;
  line-height: 1.9;
}

/* INTRO */

.contact-intro {
  padding: 105px 0;
  background: #f7f5f1;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
}

.intro-grid h2,
.faq-heading h2 {
  margin: 23px 0;
  color: #252525;
  font-size: clamp(36px, 4vw, 58px);
  line-height: 1.15;
}

.intro-grid h2 span,
.faq-heading h2 span {
  color: #b58a55;
}

.intro-content > p {
  color: #666;
  font-size: 16px;
  line-height: 1.95;
}

.info-note {
  display: flex;
  gap: 17px;
  margin-top: 30px;
  padding: 22px;
  border-left: 3px solid #b58a55;
  background: #fff;
}

.note-icon {
  color: #b58a55;
  font-size: 25px;
}

.info-note p {
  margin: 0;
  color: #666;
  font-size: 13px;
  line-height: 1.8;
}

/* FORM */

.form-section {
  background: #fff;
}

/* FAQ */

.faq-section {
  padding: 120px 0;
  background: #f7f5f1;
}

.faq-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 90px;
}

.faq-heading p {
  max-width: 400px;
  color: #666;
  font-size: 15px;
  line-height: 1.9;
}

.faq-list {
  border-top: 1px solid #d8d4ce;
}

.faq-item {
  border-bottom: 1px solid #d8d4ce;
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 25px 0;
  border: 0;
  background: transparent;
  color: #252525;
  font-size: 17px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}

.faq-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid #b58a55;
  color: #b58a55;
  font-size: 22px;
  font-weight: 400;
}

.faq-answer {
  padding: 0 45px 25px 0;
}

.faq-answer p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.9;
}

/* BOTTOM */

.contact-bottom {
  padding: 115px 0;
  background: #252525;
  text-align: center;
}

.contact-bottom h2 {
  margin: 25px 0;
  color: #fff;
  font-size: clamp(38px, 5vw, 68px);
  line-height: 1.15;
}

.contact-bottom h2 span {
  color: #d2ad7b;
}

.contact-bottom p {
  color: #ccc;
  font-size: 15px;
  line-height: 1.8;
}

/* RESPONSIVE */

@media (max-width: 950px) {
  .intro-grid,
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }
}

@media (max-width: 600px) {
  .contact-hero {
    min-height: 440px;
    padding: 75px 0;
  }

  .contact-intro,
  .faq-section {
    padding: 75px 0;
  }

  .faq-question {
    font-size: 15px;
  }

  .contact-bottom {
    padding: 80px 0;
  }
}
</style>
