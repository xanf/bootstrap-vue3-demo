<template>
  <div>
    <b-button v-b-modal.modal-no-backdrop>Open modal</b-button>

    <b-modal
      id="modal-no-backdrop"
      hide-backdrop
      content-class="shadow"
      title="BootstrapVue"
    >
      <p class="my-2">
        We've added the utility class <code>'shadow'</code>
        to the modal content for added effect.
      </p>
    </b-modal>
  </div>

  <!-- modal-no-backdrop.vue -->
</template>
