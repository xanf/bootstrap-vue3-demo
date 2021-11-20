<template>
  <div>
    <b-table
      id="table-transition-example"
      :items="items"
      :fields="fields"
      striped
      small
      primary-key="a"
      :tbody-transition-props="transProps"
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transProps: {
        // Transition name
        name: "flip-list",
      },
      items: [
        { a: 2, b: "Two", c: "Moose" },
        { a: 1, b: "Three", c: "Dog" },
        { a: 3, b: "Four", c: "Cat" },
        { a: 4, b: "One", c: "Mouse" },
      ],
      fields: [
        { key: "a", sortable: true },
        { key: "b", sortable: true },
        { key: "c", sortable: true },
      ],
    };
  },
};
</script>

<!-- b-table-transitions.vue -->
