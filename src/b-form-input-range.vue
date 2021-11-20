<template>
  <div>
    <label for="range-1">Example range with min and max</label>
    <b-form-input
      id="range-1"
      v-model="value"
      type="range"
      min="0"
      max="5"
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

<!-- b-form-input-range.vue -->
