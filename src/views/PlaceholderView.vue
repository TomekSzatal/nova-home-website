
<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <main class="placeholder-page">
    <div class="placeholder-content">
      <span class="eyebrow">NOVA HOME / OFERTA</span>

      <h1>{{ title }}</h1>

      <p>{{ description }}</p>

      <RouterLink to="/" class="back-link">
        ← WRÓĆ NA STRONĘ GŁÓWNĄ
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.placeholder-page {
  display: flex;
  align-items: center;
  min-height: 65vh;
  padding: 90px 6%;
  background: #f7f5f1;
}

.placeholder-content {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
}

.eyebrow {
  color: #b58a55;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

h1 {
  margin: 20px 0;
  color: #252525;
  font-size: clamp(48px, 7vw, 90px);
  line-height: 1.1;
}

p {
  max-width: 650px;
  color: #666;
  font-size: 18px;
  line-height: 1.8;
}

.back-link {
  display: inline-block;
  margin-top: 30px;
  padding: 16px 25px;
  background: #b58a55;
  color: white;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.back-link:hover {
  background: #967044;
}
</style>
