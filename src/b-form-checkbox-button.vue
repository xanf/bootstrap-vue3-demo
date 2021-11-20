<template>
  <div>
    <b-form-checkbox v-model="checked1" name="check-button" button>
      Button Checkbox <b>(Checked: {{ checked1 }})</b>
    </b-form-checkbox>
    <b-form-checkbox
      v-model="checked2"
      name="check-button"
      button
      button-variant="info"
    >
      Button Checkbox <b>(Checked: {{ checked2 }})</b>
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
    };
  },
};
</script>

<!-- b-form-checkbox-button.vue -->
