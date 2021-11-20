<template>
  <div class="overflow-auto">
    <b-pagination-nav
      :link-gen="linkGen"
      :page-gen="pageGen"
      :number-of-pages="links.length"
    ></b-pagination-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ["#foo", "#bar", "#baz", "#faz"],
    };
  },
  methods: {
    linkGen(pageNum) {
      return this.links[pageNum - 1];
    },
    pageGen(pageNum) {
      return this.links[pageNum - 1].slice(1);
    },
  },
};
</script>

<!-- b-pagination-nav-links.vue -->
