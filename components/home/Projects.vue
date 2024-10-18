<template>
  <h2>{{ $t('myProjects') }}</h2>
  <div class="projects-grid">
    <NuxtLink :to="localePath('/projects/budgetplus')" class="project-card">
      <div class="project-image" style="background-image: url('/img/projects/budgetplus/landing-page.png');"></div>
      <h3>BudgetPlus</h3>
      <p>{{ $t('budgetPlusDesc') }}</p>
    </NuxtLink>
    <NuxtLink :to="localePath('/projects/reliabill')" class="project-card">
      <div class="project-image" style="background-image: url('/img/projects/reliabill/landing-page.jpeg');"></div>
      <h3>ReliaBill</h3>
      <p>{{ $t('reliaBillDesc') }}</p>
    </NuxtLink>
  </div>
</template>

<script setup>
</script>

<style scoped>
.projects-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.project-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;
  width: 300px;
}

.project-image {
  height: 200px;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
}

.project-card h3 {
  margin-top: 1rem;
  font-size: 1.5rem;
  text-decoration: none;
}

.project-card:hover {
  transform: translateY(-10px);
}

/* @media query za mobilne uređaje */
@media (max-width: 768px) {
  .projects-grid {
    flex-direction: column;
    align-items: center;
  }

  .project-card {
    width: 100%;
    padding: 1rem;
  }

  .project-image {
    height: 150px;
  }

  .project-card h3 {
    font-size: 1.2rem;
  }
}
</style>