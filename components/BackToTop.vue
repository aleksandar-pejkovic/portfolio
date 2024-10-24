<template>
  <div>
    <button v-if="y > 300" @click="scrollToTop" class="back-to-top">
      <span class="arrow">⬆</span> <span class="back-to-top-text">{{ $t('backToTop') }}</span>
    </button>
  </div>
</template>

<script setup>
const { y } = useWindowScroll();

// Funkcija za vraćanje na vrh stranice
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style scoped>
/* Stilizovanje za Back to Top dugme */
.back-to-top {
  position: fixed;
  z-index: 999;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 2px 10px var(--accent-color-dark);
  transition: all 0.3s ease;
}

.back-to-top:hover {
  transform: scale(1.1);
}

.back-to-top:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .back-to-top {
    width: 50px;
    /* Manje dugme na mobilnim ekranima */
    height: 50px;
    border-radius: 50%;
    /* Okruglo dugme */
    padding: 0;
    /* Ukloni unutrašnje razmake */
  }

  .back-to-top-text {
    display: none;
  }

  .back-to-top .arrow {
    font-size: 24px;
    /* Veća strelica na malim ekranima */
  }
}
</style>
