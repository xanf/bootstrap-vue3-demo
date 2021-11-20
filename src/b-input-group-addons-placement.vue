<template>
  <div>
    <b-input-group>
      <b-input-group-prepend>
        <b-button variant="outline-info">Button</b-button>
      </b-input-group-prepend>

      <b-form-input type="number" min="0.00"></b-form-input>

      <b-input-group-append>
        <b-button variant="outline-secondary">Button</b-button>
        <b-button variant="outline-primary">Button</b-button>
        <b-input-group-text>
          <b-icon icon="x" />
        </b-input-group-text>
      </b-input-group-append>
    </b-input-group>
  </div>

  <!-- b-input-group-addons-placement.vue -->
</template>
