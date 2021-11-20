<template>
  <div>
    <b-form-input list="my-list-id"></b-form-input>

    <datalist id="my-list-id">
      <option>Manual Option</option>
      <option v-for="size in sizes">{{ size }}</option>
    </datalist>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: ["Small", "Medium", "Large", "Extra Large"],
    };
  },
};
</script>

<!-- b-form-input-datalist.vue -->
