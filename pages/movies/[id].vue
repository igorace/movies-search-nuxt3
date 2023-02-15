<script setup>
const route = useRoute();
const { data } = await useFetch(
  `https://www.omdbapi.com/?apikey=3c339505&i=${route.params.id}`,
  {
    pick: ["Title", "Plot", "Poster", "Error"],
    key: `/movies/${route.params.id}`,
  }
);
if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "Page Not Found" });
}

useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.PLot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>
<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
