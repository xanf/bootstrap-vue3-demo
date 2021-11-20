<template>
  <div>
    <b-input-group size="sm" prepend="Small" class="mb-2">
      <b-form-input
        aria-label="Small text input with custom switch"
      ></b-form-input>
      <b-input-group-append is-text>
        <b-form-checkbox switch class="mr-n2 mb-n1">
          <span class="sr-only">Checkbox for previous text input</span>
        </b-form-checkbox>
      </b-input-group-append>
    </b-input-group>

    <b-input-group size="lg" prepend="Large" class="mb-2">
      <b-form-input aria-label="Large text input with switch"></b-form-input>
      <b-input-group-append is-text>
        <b-form-checkbox switch class="mr-n2">
          <span class="sr-only">Switch for previous text input</span>
        </b-form-checkbox>
      </b-input-group-append>
    </b-input-group>
  </div>

  <!-- b-input-group-custom-checks-radios-sizing.vue -->
</template>
