<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["first_name", "last_name", "age"],
      items: [
        {
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          status: "awesome",
        },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
      ],
    };
  },
  methods: {
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.status === "awesome") return "table-success";
    },
  },
};
</script>

<!-- b-table-styled-row.vue -->
