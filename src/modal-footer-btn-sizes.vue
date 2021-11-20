<template>
  <div>
    <b-button v-b-modal.modal-footer-sm>Small Footer Buttons</b-button>
    <b-button v-b-modal.modal-footer-lg>Large Footer Buttons</b-button>

    <b-modal id="modal-footer-sm" title="BootstrapVue" button-size="sm">
      <p class="my-2">This modal has small footer buttons</p>
    </b-modal>

    <b-modal id="modal-footer-lg" title="BootstrapVue" button-size="lg">
      <p class="my-2">This modal has large footer buttons</p>
    </b-modal>
  </div>

  <!-- modal-footer-btn-sizes.vue -->
</template>
