<template>
  <div>
    <b-form-select v-model="selected" class="mb-3">
      <b-form-select-option :value="null"
        >Please select an option</b-form-select-option
      >
      <b-form-select-option value="a">Option A</b-form-select-option>
      <b-form-select-option value="b" disabled
        >Option B (disabled)</b-form-select-option
      >
      <b-form-select-option-group label="Grouped options">
        <b-form-select-option :value="{ C: '3PO' }"
          >Option with object value</b-form-select-option
        >
        <b-form-select-option :value="{ R: '2D2' }"
          >Another option with object value</b-form-select-option
        >
      </b-form-select-option-group>
    </b-form-select>

    <div class="mt-2">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
};
</script>

<!-- b-form-select-manual.vue -->
