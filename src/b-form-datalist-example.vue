<template>
  <div>
    <label for="input-with-list">Input with datalist</label>
    <b-form-input list="input-list" id="input-with-list"></b-form-input>
    <b-form-datalist id="input-list" :options="options"></b-form-datalist>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["Apple", "Banana", "Grape", "Kiwi", "Orange"],
    };
  },
};
</script>

<!-- b-form-datalist-example.vue -->
