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
        <li>
          <a href="https://drive.google.com/file/d/1fsLBPACir7TwxX9ZzbELz9oQEm0VKy-M/view?usp=drive_link"
            target="_blank" rel="noopener noreferrer">CV</a>
        </li>
      </ul>
      <p class="pulsating">Built with ❤️ using Nuxt 3</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
/* Footer content styling */
footer {
  display: flex;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, var(--accent-color), var(--accent-color-dark));
  color: var(--primary-color);
  padding: 2rem 0;
  box-shadow: 0 -4px 0 var(--accent-color-dark);
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
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--secondary-color);
}

.pulsating {
  animation: pulse 1.5s infinite ease-in-out;
}

.footer-content p:last-child {
  font-size: 0.9rem;
  color: #999;
}
</style>