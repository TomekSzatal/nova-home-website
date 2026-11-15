
<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

type Category = "Wszystkie" | "Mieszkania" | "Łazienki" | "Kuchnie" | "Salony";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "Wszystkie">;
  description: string;
  image: string;
  alt: string;
}

const categories: Category[] = [
  "Wszystkie",
  "Mieszkania",
  "Łazienki",
  "Kuchnie",
  "Salony",
];

const activeCategory = ref<Category>("Wszystkie");
const selectedProject = ref<Project | null>(null);

const projects: Project[] = [
  {
    id: 1,
    title: "Apartament Modern",
    category: "Mieszkania",
    description: "Minimalistyczne wnętrze w ciepłych odcieniach beżu.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    alt: "Nowoczesny apartament w neutralnych kolorach",
  },
  {
    id: 2,
    title: "Łazienka Stone",
    category: "Łazienki",
    description: "Naturalny kamień i ponadczasowa elegancja.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=85",
    alt: "Elegancka łazienka z jasnymi płytkami",
  },
  {
    id: 3,
    title: "Kuchnia Oak",
    category: "Kuchnie",
    description: "Połączenie drewna, jasnych powierzchni i funkcjonalności.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    alt: "Nowoczesna kuchnia z drewnianymi elementami",
  },
  {
    id: 4,
    title: "Salon Harmony",
    category: "Salony",
    description: "Przestronny salon o spokojnym, eleganckim charakterze.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    alt: "Jasny salon z nowoczesnym wyposażeniem",
  },
  {
    id: 5,
    title: "Apartament Pure",
    category: "Mieszkania",
    description: "Jasne przestrzenie i starannie dobrane detale.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
    alt: "Nowoczesne jasne wnętrze apartamentu",
  },
  {
    id: 6,
    title: "Łazienka Minimal",
    category: "Łazienki",
    description: "Proste formy, subtelne kolory i wygoda użytkowania.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    alt: "Minimalistyczne wnętrze w jasnych barwach",
  },
];

const filteredProjects = computed(() => {
  if (activeCategory.value === "Wszystkie") {
    return projects;
  }

  return projects.filter(
    (project) => project.category === activeCategory.value
  );
});

function openProject(project: Project) {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
}

function closeProject() {
  selectedProject.value = null;
  document.body.style.overflow = "";
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && selectedProject.value) {
    closeProject();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <main class="projects-page">
    <section class="projects-hero">
      <div class="container">
        <span class="eyebrow">NOVA HOME / PORTFOLIO</span>
        <h1>PRZESTRZENIE<br /><span>Z CHARAKTEREM.</span></h1>
        <p>
          Poznaj przykładowe aranżacje wnętrz, w których
          estetyka spotyka się z funkcjonalnością.
        </p>
      </div>
    </section>

    <section class="portfolio-section">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">INSPIRACJE</span>
            <h2>WYBRANE PROJEKTY<span>.</span></h2>
          </div>
          <p>
            Galeria prezentuje przykładowe aranżacje
            wykorzystane w projekcie demonstracyjnym NOVA HOME.
          </p>
        </div>

        <div class="filters" aria-label="Filtruj projekty">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            :class="{ active: activeCategory === category }"
            :aria-pressed="activeCategory === category"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <TransitionGroup name="gallery" tag="div" class="projects-grid">
          <button
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card"
            type="button"
            :aria-label="`Powiększ zdjęcie: ${project.title}`"
            @click="openProject(project)"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.alt" loading="lazy" />
              <span class="image-icon" aria-hidden="true">↗</span>
            </div>
            <div class="project-details">
              <span class="project-category">{{ project.category }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </button>
        </TransitionGroup>

        <p class="demo-note">
          * Zdjęcia mają charakter ilustracyjny i nie przedstawiają
          rzeczywistych realizacji firmy NOVA HOME.
        </p>
      </div>
    </section>

    <section class="projects-cta">
      <div class="container">
        <span class="eyebrow">TWÓJ PROJEKT</span>
        <h2>STWÓRZMY COŚ<br /><span>WYJĄTKOWEGO.</span></h2>
        <p>Sprawdź, jak może wyglądać kolejny etap współpracy.</p>
        <RouterLink to="/kontakt" class="cta-button">
          PRZEJDŹ DO KONTAKTU ↗
        </RouterLink>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="selectedProject"
        class="lightbox"
        role="presentation"
        @click.self="closeProject"
      >
        <div
          class="lightbox-content"
          role="dialog"
          aria-modal="true"
          :aria-label="selectedProject.title"
        >
          <button
            class="close-button"
            type="button"
            aria-label="Zamknij zdjęcie"
            @click="closeProject"
          >
            ×
          </button>
          <img
            :src="selectedProject.image"
            :alt="selectedProject.alt"
          />
          <div class="lightbox-caption">
            <span>{{ selectedProject.category }}</span>
            <h3>{{ selectedProject.title }}</h3>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 6%;
}

.projects-page {
  background: #fff;
}

.eyebrow {
  color: #b58a55;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.projects-hero {
  padding: 115px 0 120px;
  background: #252525;
}

.projects-hero h1 {
  margin: 25px 0;
  color: #fff;
  font-size: clamp(45px, 6vw, 85px);
  line-height: 1.1;
  letter-spacing: -2px;
}

.projects-hero h1 span,
.projects-cta h2 span {
  color: #d2ad7b;
}

.projects-hero p {
  max-width: 600px;
  color: #ccc;
  font-size: 17px;
  line-height: 1.9;
}

.portfolio-section {
  padding: 110px 0;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 50px;
  margin-bottom: 50px;
}

.section-heading h2 {
  margin: 18px 0 0;
  color: #252525;
  font-size: clamp(32px, 4vw, 55px);
  line-height: 1.2;
}

.section-heading h2 span {
  color: #b58a55;
}

.section-heading > p {
  max-width: 420px;
  color: #666;
  font-size: 15px;
  line-height: 1.8;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 45px;
}

.filters button {
  padding: 12px 22px;
  border: 1px solid #ddd;
  background: #fff;
  color: #444;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all .2s;
}

.filters button:hover,
.filters button.active {
  border-color: #b58a55;
  background: #b58a55;
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 35px;
}

.project-card {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
}

.project-image {
  position: relative;
  height: 330px;
  overflow: hidden;
  background: #eee;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s;
}

.project-card:hover .project-image img {
  transform: scale(1.06);
}

.image-icon {
  position: absolute;
  right: 18px;
  bottom: 18px;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  background: #b58a55;
  color: #fff;
  font-size: 23px;
}

.project-details {
  padding: 22px 0;
}

.project-category {
  color: #b58a55;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.project-details h3 {
  margin: 10px 0;
  color: #252525;
  font-size: 25px;
}

.project-details p {
  color: #777;
  font-size: 14px;
  line-height: 1.7;
}

.demo-note {
  margin-top: 35px;
  color: #777;
  font-size: 12px;
  line-height: 1.7;
}

.projects-cta {
  padding: 110px 0;
  background: #f7f5f1;
  text-align: center;
}

.projects-cta h2 {
  margin: 25px 0;
  color: #252525;
  font-size: clamp(40px, 5vw, 70px);
  line-height: 1.1;
}

.projects-cta h2 span {
  color: #b58a55;
}

.projects-cta p {
  color: #666;
  font-size: 16px;
}

.cta-button {
  display: inline-block;
  margin-top: 30px;
  padding: 17px 28px;
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

.lightbox {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 25px;
  background: rgba(0, 0, 0, .9);
}

.lightbox-content {
  position: relative;
  width: min(100%, 1100px);
  max-height: 95vh;
}

.lightbox-content img {
  display: block;
  width: 100%;
  max-height: 75vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: -50px;
  right: 0;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
}

.lightbox-caption {
  padding: 15px 0;
  color: #fff;
}

.lightbox-caption span {
  color: #d2ad7b;
  font-size: 12px;
  text-transform: uppercase;
}

.lightbox-caption h3 {
  margin: 6px 0;
  font-size: 22px;
}

.gallery-enter-active,
.gallery-leave-active {
  transition: opacity .25s, transform .25s;
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.gallery-leave-active {
  position: absolute;
}

@media (max-width: 1050px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section-heading {
    align-items: start;
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 650px) {
  .projects-hero {
    padding: 85px 0;
  }

  .portfolio-section {
    padding: 70px 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .project-image {
    height: 290px;
  }

  .projects-cta {
    padding: 75px 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-enter-active,
  .gallery-leave-active,
  .project-image img {
    transition: none;
  }
}
</style>
