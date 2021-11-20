<template>
  <b-container class="bv-example-row">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <b-row>
      <b-col cols="12" md="8">cols="12" md="8"</b-col>
      <b-col cols="6" md="4">cols="6" md="4"</b-col>
    </b-row>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <b-row>
      <b-col cols="6" md="4">cols="6" md="4"</b-col>
      <b-col cols="6" md="4">cols="6" md="4"</b-col>
      <b-col cols="6" md="4">cols="6" md="4"</b-col>
    </b-row>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <b-row>
      <b-col cols="6">cols="6"</b-col>
      <b-col cols="6">cols="6"</b-col>
    </b-row>
  </b-container>

  <!-- b-grid-mix-and-match.vue -->
</template>
