<template>
  <div>
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-form-checkbox class="mr-n2">
          <span class="sr-only">Checkbox for following text input</span>
        </b-form-checkbox>
      </b-input-group-prepend>
      <b-form-input aria-label="Text input with checkbox"></b-form-input>
    </b-input-group>

    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-form-radio class="mr-n2">
          <span class="sr-only">Radio for following text input</span>
        </b-form-radio>
      </b-input-group-prepend>
      <b-form-input aria-label="Text input with radio input"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-input-group-prepend is-text>
        <b-form-checkbox switch class="mr-n2">
          <span class="sr-only">Switch for following text input</span>
        </b-form-checkbox>
      </b-input-group-prepend>
      <b-form-input aria-label="Text input with switch"></b-form-input>
    </b-input-group>
  </div>

  <!-- b-input-group-custom-checks-radios.vue -->
</template>
