<template>
  <b-container fluid>
    <b-row>
      <b-col sm="2">
        <label for="textarea-small">Small:</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          id="textarea-small"
          size="sm"
          placeholder="Small textarea"
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="textarea-default">Default:</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          id="textarea-default"
          placeholder="Default textarea"
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="textarea-large">Large:</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          id="textarea-large"
          size="lg"
          placeholder="Large textarea"
        ></b-form-textarea>
      </b-col>
    </b-row>
  </b-container>

  <!-- b-form-textarea-sizes.vue -->
</template>
