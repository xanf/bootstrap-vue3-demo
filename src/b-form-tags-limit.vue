<template>
  <div>
    <label for="tags-limit">Enter tags</label>
    <b-form-tags
      input-id="tags-limit"
      v-model="value"
      :limit="limit"
      remove-on-delete
    ></b-form-tags>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      limit: 5,
    };
  },
};
</script>

<!-- b-form-tags-limit.vue -->
