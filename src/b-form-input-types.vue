<template>
  <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`"
          >Type <code>{{ type }}</code
          >:</label
        >
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      types: [
        "text",
        "number",
        "email",
        "password",
        "search",
        "url",
        "tel",
        "date",
        "time",
        "range",
        "color",
      ],
    };
  },
};
</script>

<!-- b-form-input-types.vue -->
