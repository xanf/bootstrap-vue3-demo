<template>
  <div>
    <b-button v-b-modal.modal-scrollable>Launch scrolling modal</b-button>

    <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
      <p class="my-4" v-for="i in 20" :key="i">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </b-modal>
  </div>

  <!-- b-modal-scrollable-content.vue -->
</template>
