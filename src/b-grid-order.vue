<template>
  <b-container fluid class="bv-example-row">
    <b-row class="mb-3">
      <b-col>First in DOM, no order applied</b-col>
      <b-col order="5">Second in DOM, with a larger order</b-col>
      <b-col order="1">Third in DOM, with an order of 1</b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col order="6">First in DOM, with order of 6</b-col>
      <b-col order="1">Second in DOM, with an order of 1</b-col>
      <b-col>Third in DOM, no order applied</b-col>
    </b-row>
  </b-container>

  <!-- b-grid-order.vue -->
</template>
