<template>
  <div>
    <b-form-select v-model="selected" :options="options" class="mb-3">
      <!-- This slot appears above the options from 'options' prop -->
      <template #first>
        <b-form-select-option :value="null" disabled
          >-- Please select an option --</b-form-select-option
        >
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <b-form-select-option value="C">Option C</b-form-select-option>
      <b-form-select-option value="D">Option D</b-form-select-option>
    </b-form-select>

    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: "A", text: "Option A (from options prop)" },
        { value: "B", text: "Option B (from options prop)" },
      ],
    };
  },
};
</script>

<!-- b-form-select-both.vue -->
