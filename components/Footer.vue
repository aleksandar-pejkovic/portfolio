<template>
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 Aleksandar Pejković. All rights reserved.</p>

      <ul class="social-links">
        <li>
          <a href="https://github.com/aleksandar-pejkovic" target="_blank" rel="noopener">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aleksandar-pejkovic/" target="_blank" rel="noopener">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:aleksandarpejkovic@hotmail.com">Email</a>
        </li>
      </ul>

      <p>Built with ❤️ using Nuxt 3</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
/* Footer content styling */
footer {
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  padding: 2rem 0;
}

.footer-content p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.social-links {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-links li {
  display: inline;
}

.social-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #4CAF50;
  /* Hover color */
}

.footer-content p:last-child {
  font-size: 0.9rem;
  color: #999;
}
</style>