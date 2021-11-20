<template>
  <div>
    <b-form-checkbox-group
      v-model="value"
      :options="options"
      :state="state"
      name="checkbox-validation"
    >
      <b-form-invalid-feedback :state="state"
        >Please select two</b-form-invalid-feedback
      >
      <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
    </b-form-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        { text: "First Check", value: "first" },
        { text: "Second Check", value: "second" },
        { text: "Third Check", value: "third" },
      ],
    };
  },
  computed: {
    state() {
      return this.value.length === 2;
    },
  },
};
</script>

<!-- form-checkbox-validation.vue -->
