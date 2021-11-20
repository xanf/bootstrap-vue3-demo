<template>
  <div>
    <input v-model="value" type="text" class="form-control" />
    <br />
    <p>Value: "{{ value }}"</p>
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

<!-- native-input.vue -->
