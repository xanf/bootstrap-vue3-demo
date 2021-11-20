<template>
  <div class="overflow-auto">
    <div>
      <h6>Small</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="sm"
      ></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Default</h6>
      <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Large</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="lg"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 100,
      currentPage: 1,
    };
  },
};
</script>

<!-- b-pagination-size.vue -->
