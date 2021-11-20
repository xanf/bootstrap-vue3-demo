<template>
  <div>
    <b-form-rating v-model="value" show-clear show-value></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2.5,
    };
  },
};
</script>

<!-- b-form-rating-clear.vue -->
