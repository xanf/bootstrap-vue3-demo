<template>
  <div>
    <b-form-textarea
      id="textarea-state"
      v-model="text"
      :state="text.length >= 10"
      placeholder="Enter at least 10 characters"
      rows="3"
    ></b-form-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>

<!-- b-form-textarea-state.vue -->
