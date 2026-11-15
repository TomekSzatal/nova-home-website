
<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <HeroSection />

    <ServicesSection />

    <AboutSection />

    <ProjectsSection />

    <section class="home-cta">
      <div class="cta-container">
        <span class="eyebrow">NOVA HOME / KONTAKT</span>

        <h2>
          MASZ POMYSŁ NA<br />
          <span>NOWE WNĘTRZE?</span>
        </h2>

        <p>
          Poznaj przykładowy proces kontaktu
          i wyceny prac remontowych.
        </p>

        <RouterLink to="/kontakt" class="cta-button">
          PRZEJDŹ DO KONTAKTU ↗
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-cta {
  padding: 110px 6%;
  background: #252525;
  text-align: center;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
}

.eyebrow {
  color: #b58a55;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.home-cta h2 {
  margin: 25px 0;
  color: white;
  font-size: clamp(38px, 5vw, 70px);
  line-height: 1.1;
}

.home-cta h2 span {
  color: #d2ad7b;
}

.home-cta p {
  color: #ccc;
  font-size: 16px;
  line-height: 1.8;
}

.cta-button {
  display: inline-block;
  margin-top: 30px;
  padding: 18px 30px;
  background: #b58a55;
  color: white;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
}

.cta-button:hover {
  background: #967044;
}

@media (max-width: 600px) {
  .home-cta {
    padding: 75px 6%;
  }
}
</style>
