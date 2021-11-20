<template>
  <div>
    <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
    <b-button v-b-modal.modal-lg variant="primary">lg modal</b-button>
    <b-button v-b-modal.modal-sm variant="primary">sm modal</b-button>

    <b-modal id="modal-xl" size="xl" title="Extra Large Modal"
      >Hello Extra Large Modal!</b-modal
    >
    <b-modal id="modal-lg" size="lg" title="Large Modal"
      >Hello Large Modal!</b-modal
    >
    <b-modal id="modal-sm" size="sm" title="Small Modal"
      >Hello Small Modal!</b-modal
    >
  </div>

  <!-- b-modal-sizes.vue -->
</template>
