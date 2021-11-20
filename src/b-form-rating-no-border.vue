<template>
  <div>
    <label for="rating-sm-no-border">Small rating with no border</label>
    <b-form-rating
      id="rating-sm-no-border"
      v-model="value"
      no-border
      size="sm"
    ></b-form-rating>

    <label for="rating-md-no-border" class="mt-3"
      >Default rating (medium) with no border</label
    >
    <b-form-rating
      id="rating-md-no-border"
      v-model="value"
      no-border
    ></b-form-rating>

    <label for="rating-lg-no-border" class="mt-3"
      >Large rating with no border</label
    >
    <b-form-rating
      id="rating-lg-no-border"
      v-model="value"
      no-border
      size="lg"
    ></b-form-rating>

    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<!-- b-form-rating-no-border.vue -->
