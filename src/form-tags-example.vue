<template>
  <div>
    <label for="tags-basic">Type a new tag and press enter</label>
    <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["apple", "orange"],
    };
  },
};
</script>

<!-- form-tags-example.vue -->
