<template>
  <b-container fluid>
    <b-row>
      <b-col md="6" class="py-4">
        <b-button v-b-tooltip title="Online!" variant="outline-success"
          >Live chat</b-button
        >
      </b-col>

      <b-col md="6" class="py-4">
        <b-button
          v-b-tooltip.html
          title="Hello <strong>World!</strong>"
          variant="outline-success"
        >
          Html chat
        </b-button>
      </b-col>
    </b-row>
  </b-container>

  <!-- b-tooltip-directive.vue -->
</template>
