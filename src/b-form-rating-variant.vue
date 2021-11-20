<template>
  <div>
    <b-form-rating
      v-model="value"
      variant="warning"
      class="mb-2"
    ></b-form-rating>
    <b-form-rating
      v-model="value"
      variant="success"
      class="mb-2"
    ></b-form-rating>
    <b-form-rating
      v-model="value"
      variant="danger"
      class="mb-2"
    ></b-form-rating>
    <b-form-rating
      v-model="value"
      variant="primary"
      class="mb-2"
    ></b-form-rating>
    <b-form-rating v-model="value" variant="info" class="mb-2"></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
</script>

<!-- b-form-rating-variant.vue -->
