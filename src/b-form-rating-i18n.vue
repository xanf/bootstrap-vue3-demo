<template>
  <div>
    <b-form-select
      v-model="locale"
      :options="locales"
      class="mb-2"
    ></b-form-select>
    <b-form-rating
      v-model="value"
      :locale="locale"
      show-value
      precision="1"
    ></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.5,
      locale: "en-US",
      locales: [
        { text: "English US (en-US)", value: "en-US" },
        { text: "French (fr)", value: "fr" },
        { text: "Persian (fa)", value: "fa" },
        { text: "Arabic Egyptian (ar-EG)", value: "ar-EG" },
      ],
    };
  },
};
</script>

<!-- b-form-rating-i18n.vue -->
