<template>
  <div class="overflow-auto">
    <div>
      <h6>Small Pills</h6>
      <b-pagination-nav
        pills
        size="sm"
        number-of-pages="10"
        base-url="#"
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Default Pills</h6>
      <b-pagination-nav
        pills
        number-of-pages="10"
        base-url="#"
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Large Pills</h6>
      <b-pagination-nav
        pills
        size="lg"
        number-of-pages="10"
        base-url="#"
      ></b-pagination-nav>
    </div>
  </div>
</template>

<!-- b-pagination-nav-pills.vue -->
