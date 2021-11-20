<template>
  <div>
    <b-form-rating
      v-model="value"
      readonly
      show-value
      show-value-max
      precision="2"
    ></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.555,
    };
  },
};
</script>

<!-- b-form-rating-value-max.vue -->
