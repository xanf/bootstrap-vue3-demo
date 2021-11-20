<template>
  <div>
    <b-table :fields="fields" :items="items" foot-clone>
      <!-- A custom formatted data column cell -->
      <template #cell(name)="data">
        {{ data.value.first }} {{ data.value.last }}
      </template>

      <!-- A custom formatted header cell for field 'name' -->
      <template #head(name)="data">
        <span class="text-info">{{ data.label.toUpperCase() }}</span>
      </template>

      <!-- A custom formatted footer cell for field 'name' -->
      <template #foot(name)="data">
        <span class="text-danger">{{ data.label }}</span>
      </template>

      <!-- Default fall-back custom formatted footer cell -->
      <template #foot()="data">
        <i>{{ data.label }}</i>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        // A column that needs custom formatting
        { key: "name", label: "Full Name" },
        // A regular column
        "age",
        // A regular column
        "sex",
      ],
      items: [
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "Jane", last: "Doe" }, sex: "Female", age: 36 },
        { name: { first: "Rubin", last: "Kincade" }, sex: "Male", age: 73 },
        {
          name: { first: "Shirley", last: "Partridge" },
          sex: "Female",
          age: 62,
        },
      ],
    };
  },
};
</script>

<!-- b-table-head-foot-slots.vue -->
