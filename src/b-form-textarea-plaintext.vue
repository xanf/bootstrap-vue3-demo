<template>
  <div>
    <b-form-textarea
      id="textarea-plaintext"
      plaintext
      :value="text"
    ></b-form-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "This is some text.\nIt is read only and doesn't look like an input.",
    };
  },
};
</script>

<!-- b-form-textarea-plaintext.vue -->
