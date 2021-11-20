<template>
  <div>
    <!-- Using modifiers -->
    <b-button v-b-modal.my-modal>Show Modal</b-button>

    <!-- Using value -->
    <b-button v-b-modal="'my-modal'">Show Modal</b-button>

    <!-- The modal -->
    <b-modal id="my-modal">Hello From My Modal!</b-modal>
  </div>

  <!-- b-modal-directive.vue -->
</template>
