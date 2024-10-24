<template>
  <div>
    <NuxtLayout>
      <div class="page">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const router = useRouter();

onMounted(() => {
  router.afterEach((to) => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: to.fullPath,
        page_title: to.name,
        page_location: window.location.href,
      });
    }
  });
});
</script>
