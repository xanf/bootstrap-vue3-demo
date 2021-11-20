<template>
  <div>
    <b-form-checkbox v-model="checked" name="check-button" switch>
      Switch Checkbox <b>(Checked: {{ checked }})</b>
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<!-- b-form-checkbox-switch.vue -->
