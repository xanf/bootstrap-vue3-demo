<template>
  <div>
    <label for="sb-step">Spin button with step of 0.25</label>
    <b-form-spinbutton
      id="sb-step"
      v-model="value"
      min="0"
      max="10"
      step="0.25"
    ></b-form-spinbutton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<!-- b-form-spinbutton-step.vue -->
