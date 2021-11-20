<template>
  <div>
    <label for="tags-separators"
      >Enter tags separated by space, comma or semicolon</label
    >
    <b-form-tags
      input-id="tags-separators"
      v-model="value"
      separator=" ,;"
      placeholder="Enter new tags separated by space, comma or semicolon"
      no-add-on-enter
    ></b-form-tags>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["one", "two"],
    };
  },
};
</script>

<!-- form-tags-separator.vue -->
