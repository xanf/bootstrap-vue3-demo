<template>
  <div>
    <b-container>
      <b-row class="text-center">
        <b-col md="3" class="py-3">
          <b-button v-b-tooltip="'Tooltip!'" variant="outline-success"
            >Hover + Focus</b-button
          >
        </b-col>
        <b-col md="3" class="py-3">
          <b-button v-b-tooltip.hover="'Tooltip!'" variant="outline-success"
            >Hover</b-button
          >
        </b-col>
        <b-col md="3" class="py-3">
          <b-button v-b-tooltip.click="'Tooltip!'" variant="outline-success"
            >Click</b-button
          >
        </b-col>
        <b-col md="3" class="py-3">
          <b-button v-b-tooltip.focus="'Tooltip!'" variant="outline-success"
            >Focus</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>

  <!-- b-tooltip-triggers.vue -->
</template>
