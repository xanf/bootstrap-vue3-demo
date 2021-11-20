<template>
  <b-container fluid>
    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-small">Small:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input
          id="input-small"
          size="sm"
          placeholder="Enter your name"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-default">Default:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input
          id="input-default"
          placeholder="Enter your name"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="2">
        <label for="input-large">Large:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input
          id="input-large"
          size="lg"
          placeholder="Enter your name"
        ></b-form-input>
      </b-col>
    </b-row>
  </b-container>

  <!-- b-form-input-size.vue -->
</template>
