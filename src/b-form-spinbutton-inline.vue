<template>
  <div>
    <label for="sb-inline">Inline spin button</label>
    <b-form-spinbutton
      id="sb-inline"
      v-model="value"
      inline
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

<!-- b-form-spinbutton-inline.vue -->
