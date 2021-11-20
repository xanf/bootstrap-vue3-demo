<template>
  <div>
    <label for="sb-locales">Locale</label>
    <b-form-select
      id="sb-locales"
      v-model="locale"
      :options="locales"
    ></b-form-select>
    <label for="sb-local" class="mt-2">Spin button with locale</label>
    <b-form-spinbutton
      id="sb-locale"
      v-model="value"
      :locale="locale"
      min="0"
      max="10"
      step="0.125"
    ></b-form-spinbutton>
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      locale: "fr-CA",
      locales: [
        { value: "en", text: "English" },
        { value: "de", text: "German" },
        { value: "fr-CA", text: "French (Canadian)" },
        { value: "fa", text: "Persian" },
        { value: "ar-EG", text: "Arabic (Egyptian)" },
      ],
    };
  },
};
</script>

<!-- b-form-spinbutton-locale.vue -->
