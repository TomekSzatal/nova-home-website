
<script setup lang="ts">
import { RouterLink } from "vue-router";

const projects = [
  {
    number: "01",
    category: "STREFA DZIENNA",
    title: "Nowoczesna przestrzeń dzienna",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    alt: "Przykładowa aranżacja nowoczesnego salonu",
  },
  {
    number: "02",
    category: "APARTAMENT",
    title: "Elegancja i minimalizm",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    alt: "Przykładowe wnętrze apartamentu",
  },
  {
    number: "03",
    category: "WNĘTRZE",
    title: "Harmonia naturalnych materiałów",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    alt: "Przykładowa aranżacja jasnego wnętrza",
  },
];
</script>

<template>
  <section id="projects" class="projects">
    <div class="projects-container">
      <div class="projects-heading">
        <div class="heading-content">
          <div class="section-topline">
            <span class="topline-rule"></span>
            <span>03 / INSPIRACJE</span>
          </div>

          <h2>
            PRZESTRZENIE, KTÓRE<br />
            <span>INSPIRUJĄ.</span>
          </h2>

          <p>
            Poznaj przykładowe aranżacje wnętrz
            i odkryj możliwości nowoczesnego wykończenia
            przestrzeni.
          </p>
        </div>

        <RouterLink to="/realizacje" class="all-projects">
          ZOBACZ WSZYSTKIE REALIZACJE
          <span>↗</span>
        </RouterLink>
      </div>

      <div class="projects-grid">
        <RouterLink
          v-for="(project, index) in projects"
          :key="project.number"
          to="/realizacje"
          class="project-card"
          :class="{ 'project-large': index === 0 }"
          :aria-label="`Zobacz galerię: ${project.title}`"
        >
          <img
            :src="project.image"
            :alt="project.alt"
            loading="lazy"
          />

          <div class="project-overlay"></div>

          <div class="project-number">
            {{ project.number }}
          </div>

          <div class="project-arrow" aria-hidden="true">
            ↗
          </div>

          <div class="project-info">
            <span class="project-category">
              {{ project.category }}
            </span>

            <h3>{{ project.title }}</h3>

            <span class="project-more">
              ZOBACZ GALERIĘ
              <span>↗</span>
            </span>
          </div>
        </RouterLink>
      </div>

      <div class="projects-footer">
        <span>WYBRANE INSPIRACJE WNĘTRZARSKIE</span>
        <span>01 — 03</span>
      </div>

      <p class="demo-note">
        Zdjęcia mają charakter ilustracyjny i nie przedstawiają
        rzeczywistych realizacji firmy NOVA HOME.
      </p>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 110px 0 100px;
  background: #f8f7f4;
}

.projects-container {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 5%;
}

/* HEADING */

.projects-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 50px;
}

.section-topline {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
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

.projects-heading h2 {
  margin: 0 0 22px;
  color: #252525;
  font-size: clamp(35px, 4vw, 58px);
  line-height: 1.12;
  letter-spacing: -1.5px;
}

.projects-heading h2 span {
  color: #b58a55;
}

.projects-heading p {
  max-width: 530px;
  margin: 0;
  color: #777777;
  font-size: 16px;
  line-height: 1.8;
}

.all-projects {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 22px;
  padding-bottom: 12px;
  border-bottom: 2px solid #b58a55;
  color: #252525;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color .25s ease;
}

.all-projects:hover {
  color: #b58a55;
}

.all-projects span {
  color: #b58a55;
  font-size: 22px;
}

/* GRID */

.projects-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  grid-template-rows: repeat(2, 290px);
  gap: 20px;
}

.project-card {
  position: relative;
  display: block;
  min-width: 0;
  overflow: hidden;
  background: #dedbd5;
  color: #ffffff;
  text-decoration: none;
  isolation: isolate;
}

.project-large {
  grid-row: span 2;
}

.project-card img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .65s ease;
}

.project-card:hover img {
  transform: scale(1.07);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, .12) 0%,
    rgba(0, 0, 0, .05) 35%,
    rgba(0, 0, 0, .78) 100%
  );
  transition: background .3s ease;
}

.project-number {
  position: absolute;
  top: 25px;
  left: 25px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
}

.project-arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid rgba(255, 255, 255, .7);
  color: #ffffff;
  font-size: 23px;
  transition: background .3s ease, border-color .3s ease;
}

.project-card:hover .project-arrow {
  background: #b58a55;
  border-color: #b58a55;
}

/* TEXT */

.project-info {
  position: absolute;
  right: 30px;
  bottom: 30px;
  left: 30px;
}

.project-category {
  color: #d6ad79;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.project-info h3 {
  max-width: 450px;
  margin: 12px 0 15px;
  color: #ffffff;
  font-size: clamp(20px, 2vw, 30px);
  line-height: 1.25;
  letter-spacing: -.5px;
}

.project-more {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  opacity: .8;
  transition: gap .3s ease, opacity .3s ease;
}

.project-card:hover .project-more {
  gap: 17px;
  opacity: 1;
}

.project-more span {
  color: #d6ad79;
  font-size: 18px;
}

/* FOOTER */

.projects-footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #dedbd5;
  color: #999999;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.demo-note {
  margin: 15px 0 0;
  color: #999999;
  font-size: 12px;
  line-height: 1.6;
}

/* TABLET */

@media (max-width: 900px) {
  .projects {
    padding: 80px 0;
  }

  .projects-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 25px;
  }

  .projects-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 260px);
  }
}

/* MOBILE */

@media (max-width: 650px) {
  .projects {
    padding: 70px 0;
  }

  .projects-heading {
    margin-bottom: 35px;
  }

  .projects-heading h2 {
    font-size: clamp(32px, 7vw, 42px);
  }

  .projects-heading p {
    font-size: 15px;
  }

  .all-projects {
    font-size: 11px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 16px;
  }

  .project-card {
    height: 320px;
  }

  .project-large {
    grid-row: auto;
    height: 400px;
  }

  .project-info {
    right: 22px;
    bottom: 25px;
    left: 22px;
  }

  .project-info h3 {
    font-size: 23px;
  }

  .project-number {
    top: 20px;
    left: 20px;
  }

  .projects-footer {
    font-size: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card img,
  .project-arrow,
  .project-more {
    transition: none;
  }
}
</style>
