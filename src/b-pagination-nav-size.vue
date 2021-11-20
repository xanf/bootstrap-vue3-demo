<template>
  <div class="overflow-auto">
    <div>
      <h6>Small</h6>
      <b-pagination-nav
        size="sm"
        number-of-pages="10"
        base-url="#"
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Default</h6>
      <b-pagination-nav number-of-pages="10" base-url="#"></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Large</h6>
      <b-pagination-nav
        size="lg"
        number-of-pages="10"
        base-url="#"
      ></b-pagination-nav>
    </div>
  </div>
</template>

<!-- b-pagination-nav-size.vue -->
