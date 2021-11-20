<template>
  <b-container fluid>
    <b-row class="my-1">
      <b-col sm="3">
        <label for="input-none">No State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="input-none"
          :state="null"
          placeholder="No validation"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="3">
        <label for="input-valid">Valid State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="input-valid"
          :state="true"
          placeholder="Valid input"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="3">
        <label for="input-invalid">Invalid State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="input-invalid"
          :state="false"
          placeholder="Invalid input"
        ></b-form-input>
      </b-col>
    </b-row>
  </b-container>

  <!-- b-form-input-states.vue -->
</template>
