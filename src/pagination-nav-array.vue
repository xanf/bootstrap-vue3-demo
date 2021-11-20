<template>
  <div>
    <b-pagination-nav :pages="pages1" use-router></b-pagination-nav>
    <b-pagination-nav :pages="pages2" use-router></b-pagination-nav>
    <b-pagination-nav :pages="pages3" use-router></b-pagination-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Simple array of strings
      pages1: ["?page=1", "?page=2", "?page=3"],
      // Array of objects with string links
      pages2: [
        { link: "?page=1", text: "One" },
        { link: "?page=2", text: "Two" },
        { link: "?page=3", text: "Three" },
      ],
      // Array of objects with router `to` locations
      pages3: [
        { link: { query: { page: 1 } }, text: "Page 1" },
        { link: { query: { page: 2 } }, text: "Page 2" },
        { link: { query: { page: 3 } }, text: "Page 3" },
      ],
    };
  },
};
</script>

<!-- pagination-nav-array.vue -->
