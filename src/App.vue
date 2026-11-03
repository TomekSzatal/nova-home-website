
<script setup>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <main>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ProjectsSection />
    <ProcessSection />
    <ContactSection />
  </main>
  <Footer />
</template>
