
<template>
  <section id="projects" class="projects">
    <div class="projects-heading">
      <div>
        <span class="section-label">NASZE REALIZACJE</span>

        <h2>
          Przestrzenie, które
          <span>inspirują.</span>
        </h2>

        <p>
          Poznaj wybrane projekty i zobacz,
          jak zmieniamy wnętrza naszych klientów.
        </p>
      </div>

      <a href="#contact" class="projects-button">
        Zrealizujmy Twój projekt →
      </a>
    </div>

    <div class="projects-grid">
      <article class="project-card project-large">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
          alt="Nowoczesny salon po remoncie"
        />
        <div class="project-info">
          <span>01 / SALON</span>
          <h3>Nowoczesna przestrzeń dzienna</h3>
        </div>
      </article>

      <article class="project-card">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
          alt="Eleganckie wnętrze mieszkania"
        />
        <div class="project-info">
          <span>02 / WNĘTRZE</span>
          <h3>Elegancja i minimalizm</h3>
        </div>
      </article>

      <article class="project-card">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Jasne nowoczesne wnętrze"
        />
        <div class="project-info">
          <span>03 / MIESZKANIE</span>
          <h3>Harmonia naturalnych materiałów</h3>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 110px 8%;
  background: #f8f7f4;
}

.projects-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 50px;
}

.section-label {
  color: #b58a55;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
}

.projects-heading h2 {
  margin: 18px 0;
  color: #252525;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.2;
}

.projects-heading h2 span {
  color: #b58a55;
}

.projects-heading p {
  color: #777777;
  font-size: 15px;
  line-height: 1.8;
}

.projects-button {
  flex-shrink: 0;
  padding: 15px 22px;
  background: #252525;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}

.projects-button:hover {
  background: #b58a55;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 22px;
}

.project-card {
  position: relative;
  min-height: 300px;
  overflow: hidden;
  background: #dddddd;
}

.project-large {
  grid-row: span 2;
}

.project-card img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 300px;
  position: absolute;
  inset: 0;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover img {
  transform: scale(1.06);
}

.project-info {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 50px 25px 25px;
  background: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.8)
  );
  color: #ffffff;
}

.project-info span {
  color: #d6ad79;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.project-info h3 {
  margin-top: 10px;
  font-size: 20px;
}

@media (max-width: 750px) {
  .projects-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-large {
    grid-row: auto;
  }

  .project-card,
  .project-card img {
    min-height: 300px;
  }
}

@media (max-width: 500px) {
  .projects {
    padding: 75px 6%;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 70px 6%;
  }

  .projects-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }

  .projects-heading h2 {
    font-size: clamp(30px, 7vw, 40px);
  }

  .projects-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 18px;
  }

  .project-large {
    grid-row: auto;
  }

  .project-card {
    height: 320px;
    min-height: 0;
  }

  .project-card img {
    min-height: 0;
  }

  .project-info h3 {
    font-size: 18px;
  }
}
</style>
