<template>
  <div>
    <label for="tags-remove-on-delete">Enter new tags separated by space</label>
    <b-form-tags
      input-id="tags-remove-on-delete"
      :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
      v-model="value"
      separator=" "
      placeholder="Enter new tags separated by space"
      remove-on-delete
      no-add-on-enter
    ></b-form-tags>
    <b-form-text id="tags-remove-on-delete-help" class="mt-2">
      Press <kbd>Backspace</kbd> to remove the last tag entered
    </b-form-text>
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["apple", "orange", "grape"],
    };
  },
};
</script>

<!-- form-tags-remove-on-delete.vue -->
