<template>
  <div>
    <label for="demo-sb">Spin Button</label>
    <b-form-spinbutton
      id="demo-sb"
      v-model="value"
      min="1"
      max="100"
    ></b-form-spinbutton>
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 50,
    };
  },
};
</script>

<!-- b-form-spinbutton-demo.vue -->
