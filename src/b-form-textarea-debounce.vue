<template>
  <div>
    <b-form-textarea
      v-model="value"
      debounce="500"
      rows="3"
      max-rows="5"
    ></b-form-textarea>
    <pre class="mt-2 mb-0">{{ value }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<!-- b-form-textarea-debounce.vue -->
