<template>
  <div class="overflow-auto">
    <div>
      <h6>Goto first button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Goto last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        last-number
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Goto first and last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
        last-number
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: 100,
      currentPage: 5,
    };
  },
};
</script>

<!-- b-pagination-nav-goto-first-last-number.vue -->
