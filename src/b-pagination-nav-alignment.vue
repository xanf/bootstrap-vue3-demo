<template>
  <div class="overflow-auto">
    <div>
      <h6>Left alignment (default)</h6>
      <b-pagination-nav number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Center alignment</h6>
      <b-pagination-nav
        number-of-pages="10"
        base-url="#"
        align="center"
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6 class="text-right">Right (end) alignment</h6>
      <b-pagination-nav
        number-of-pages="10"
        base-url="#"
        align="right"
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Fill alignment</h6>
      <b-pagination-nav
        number-of-pages="10"
        base-url="#"
        align="fill"
      ></b-pagination-nav>
    </div>
  </div>
</template>

<!-- b-pagination-nav-alignment.vue -->
