<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      :select-size="4"
    ></b-form-select>
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select some item" },
        { value: "a", text: "This is option a" },
        { value: "b", text: "Default Selected Option b" },
        { value: "c", text: "This is option c" },
        { value: "d", text: "This one is disabled", disabled: true },
        { value: "e", text: "This is option e" },
        { value: "e", text: "This is option f" },
      ],
    };
  },
};
</script>

<!-- b-form-select-size.vue -->
