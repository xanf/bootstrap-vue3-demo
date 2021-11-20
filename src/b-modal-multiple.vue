<template>
  <div>
    <b-button v-b-modal.modal-multi-1>Open First Modal</b-button>

    <b-modal
      id="modal-multi-1"
      size="lg"
      title="First Modal"
      ok-only
      no-stacking
    >
      <p class="my-2">First Modal</p>
      <b-button v-b-modal.modal-multi-2>Open Second Modal</b-button>
    </b-modal>

    <b-modal id="modal-multi-2" title="Second Modal" ok-only>
      <p class="my-2">Second Modal</p>
      <b-button v-b-modal.modal-multi-3 size="sm">Open Third Modal</b-button>
    </b-modal>

    <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
      <p class="my-1">Third Modal</p>
    </b-modal>
  </div>

  <!-- b-modal-multiple.vue -->
</template>
