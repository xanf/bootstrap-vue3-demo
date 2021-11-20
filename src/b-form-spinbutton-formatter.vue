<template>
  <div>
    <label for="sb-days" class="mt-2">Spin button with formatter</label>
    <b-form-spinbutton
      id="sb-days"
      v-model="value"
      :formatter-fn="dayFormatter"
      min="0"
      max="6"
      wrap
    ></b-form-spinbutton>
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  methods: {
    dayFormatter(value) {
      return this.days[value];
    },
  },
};
</script>

<!-- b-form-spinbutton-formatter.vue -->
