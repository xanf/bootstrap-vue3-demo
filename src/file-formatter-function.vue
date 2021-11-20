<template>
  <b-form-file multiple :file-name-formatter="formatNames"></b-form-file>
</template>

<script>
export default {
  methods: {
    formatNames(files) {
      return files.length === 1
        ? files[0].name
        : `${files.length} files selected`;
    },
  },
};
</script>

<!-- file-formatter-function.vue -->
