<template>
  <b-container fluid>
    <b-row>
      <b-col sm="2">
        <label for="textarea-auto-height">Auto height:</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          id="textarea-auto-height"
          placeholder="Auto height textarea"
          rows="3"
          max-rows="8"
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="textarea-no-auto-shrink">No auto-shrink:</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          id="textarea-no-auto-shrink"
          placeholder="Auto height (no-shrink) textarea"
          rows="3"
          max-rows="8"
          no-auto-shrink
        ></b-form-textarea>
      </b-col>
    </b-row>
  </b-container>

  <!-- b-form-textarea-auto-height.vue -->
</template>
