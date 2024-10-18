<template>
  <button class="hamburger" @click="$emit('toggle')">
    <span v-for="i in 3" :class="{ 'open': menuOpen }"></span>
  </button>
</template>

<script setup>
const props = defineProps({
  menuOpen: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
/* Hamburger styling */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.2rem;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 1000;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #000;
  transition: all 0.3s ease;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
}
</style>