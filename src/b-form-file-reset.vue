<template>
  <div>
    <b-form-file v-model="file" ref="file-input" class="mb-2"></b-form-file>

    <b-button @click="clearFiles" class="mr-2">Reset via method</b-button>
    <b-button @click="file = null">Reset via v-model</b-button>

    <p class="mt-2">
      Selected file: <b>{{ file ? file.name : "" }}</b>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },
  methods: {
    clearFiles() {
      this.$refs["file-input"].reset();
    },
  },
};
</script>

<!-- b-form-file-reset.vue -->
