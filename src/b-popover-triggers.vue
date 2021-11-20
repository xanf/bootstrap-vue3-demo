<template>
  <div>
    <b-container fluid>
      <h5>Triggers</h5>
      <b-row class="text-center">
        <b-col md="6" class="py-3">
          <b-button v-b-popover="'Popover!'" variant="outline-success"
            >Click (default)</b-button
          >
        </b-col>
        <b-col md="6" class="py-3">
          <b-button v-b-popover.hover="'Popover!'" variant="outline-success"
            >Hover</b-button
          >
        </b-col>
        <b-col md="6" class="py-3">
          <b-button v-b-popover.focus="'Popover!'" variant="outline-success"
            >Focus</b-button
          >
        </b-col>
        <b-col md="6" class="py-3">
          <b-button
            v-b-popover.hover.focus="'Popover!'"
            variant="outline-success"
            >Hover + Focus</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>

  <!-- b-popover-triggers.vue -->
</template>
