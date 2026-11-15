
<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);

const navigation = [
  { label: "Strona główna", path: "/" },
  { label: "Usługi", path: "/uslugi" },
  { label: "O nas", path: "/o-nas" },
  { label: "Realizacje", path: "/realizacje" },
  { label: "Kontakt", path: "/kontakt" },
];

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header class="navbar">
    <RouterLink to="/" class="logo" @click="closeMenu">
      NOVA<span>HOME</span>
    </RouterLink>

    <nav
      id="main-navigation"
      class="nav-links"
      :class="{ 'nav-open': isMenuOpen }"
      aria-label="Nawigacja główna"
    >
      <RouterLink
        v-for="item in navigation"
        :key="item.path"
        :to="item.path"
        active-class="active-link"
        exact-active-class="active-link"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>

      <RouterLink
        to="/kontakt"
        class="mobile-contact"
        @click="closeMenu"
      >
        Darmowa wycena
      </RouterLink>
    </nav>

    <RouterLink
      to="/kontakt"
      class="nav-button"
      @click="closeMenu"
    >
      Darmowa wycena
    </RouterLink>

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="main-navigation"
      :aria-label="isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span :class="{ active: isMenuOpen }"></span>
      <span :class="{ active: isMenuOpen }"></span>
      <span :class="{ active: isMenuOpen }"></span>
    </button>
  </header>
</template>

<style scoped>
.navbar {
  position: relative;
  z-index: 100;
  width: 100%;
  min-height: 88px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
}

.logo {
  flex-shrink: 0;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -1.5px;
  color: #202020;
  text-decoration: none;
}

.logo span {
  color: #b58a55;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
}

.nav-links a {
  position: relative;
  color: #444444;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.active-link {
  color: #b58a55;
}

.nav-links a.active-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px;
  height: 2px;
  background: #b58a55;
}

.nav-button {
  flex-shrink: 0;
  padding: 15px 23px;
  background: #b58a55;
  color: #ffffff;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  transition: background 0.2s ease;
}

.nav-button:hover {
  background: #967044;
}

.menu-toggle,
.mobile-contact {
  display: none;
}

@media (max-width: 1200px) {
  .navbar {
    min-height: 78px;
    padding: 0 5%;
    gap: 20px;
  }

  .logo {
    font-size: 30px;
  }

  .nav-links {
    gap: 18px;
  }

  .nav-links a {
    font-size: 15px;
  }

  .nav-button {
    font-size: 14px;
  }
}

@media (max-width: 900px) {
  .navbar {
    min-height: 75px;
    padding: 0 6%;
  }

  .logo {
    font-size: 28px;
  }

  .nav-button {
    display: none;
  }

  .menu-toggle {
    display: flex;
    width: 44px;
    height: 44px;
    padding: 10px 6px;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .menu-toggle span {
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background: #252525;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  .menu-toggle span:first-child.active {
    transform: translateY(9px) rotate(45deg);
  }

  .menu-toggle span:nth-child(2).active {
    opacity: 0;
  }

  .menu-toggle span:last-child.active {
    transform: translateY(-9px) rotate(-45deg);
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 25px 6% 35px;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.08);
  }

  .nav-links.nav-open {
    display: flex;
  }

  .nav-links a {
    padding: 15px 0;
    border-bottom: 1px solid #eeeeee;
    font-size: 17px;
  }

  .nav-links a.active-link::after {
    display: none;
  }

  .nav-links .mobile-contact {
    display: block;
    margin-top: 20px;
    padding: 16px;
    border: none;
    background: #b58a55;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 25px;
  }
}
</style>
