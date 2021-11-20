<template>
  <div>
    <b-form-rating v-model="value" readonly></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2.567,
    };
  },
};
</script>

<!-- b-form-rating-non-interactive.vue -->
