<template>
  <div>
    <label for="range-2">Example range with step value</label>
    <b-form-input
      id="range-2"
      v-model="value"
      type="range"
      min="0"
      max="5"
      step="0.5"
    ></b-form-input>
    <div class="mt-2">Value: {{ value }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "2",
    };
  },
};
</script>

<!-- b-form-input-range-step.vue -->
