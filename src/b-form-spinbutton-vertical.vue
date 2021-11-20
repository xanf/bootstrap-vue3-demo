<template>
  <div>
    <label for="sb-vertical">Vertical spin button</label><br />
    <b-form-spinbutton
      id="sb-vertical"
      v-model="value"
      vertical
    ></b-form-spinbutton>
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

<!-- b-form-spinbutton-vertical.vue -->
