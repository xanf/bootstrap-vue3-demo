<template>
  <b-container fluid>
    <b-row class="text-center">
      <b-col>
        <b-button v-b-tooltip.hover.v-danger title="Danger variant"
          >Danger Modifier</b-button
        >
      </b-col>
      <b-col>
        <b-button v-b-tooltip.hover="{ variant: 'info' }" title="Info variant"
          >Info Config</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>
<!-- b-tooltip-variants.vue -->
