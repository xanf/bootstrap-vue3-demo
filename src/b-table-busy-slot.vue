<template>
  <div>
    <b-button @click="toggleBusy">Toggle Busy State</b-button>

    <b-table :items="items" :busy="isBusy" class="mt-3" outlined>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBusy: false,
      items: [
        { first_name: "Dickerson", last_name: "MacDonald", age: 40 },
        { first_name: "Larsen", last_name: "Shaw", age: 21 },
        { first_name: "Geneva", last_name: "Wilson", age: 89 },
        { first_name: "Jami", last_name: "Carney", age: 38 },
      ],
    };
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
  },
};
</script>

<!-- b-table-busy-slot.vue -->
