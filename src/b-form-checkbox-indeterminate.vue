<template>
  <div>
    <b-form-checkbox v-model="checked" :indeterminate.sync="indeterminate">
      Click me to see what happens
    </b-form-checkbox>

    <div class="mt-3">
      Checked: <strong>{{ checked }}</strong
      ><br />
      Indeterminate: <strong>{{ indeterminate }}</strong>
    </div>

    <b-button @click="toggleIndeterminate">Toggle Indeterminate State</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      indeterminate: true,
    };
  },
  methods: {
    toggleIndeterminate() {
      this.indeterminate = !this.indeterminate;
    },
  },
};
</script>

<!-- b-form-checkbox-indeterminate.vue -->
