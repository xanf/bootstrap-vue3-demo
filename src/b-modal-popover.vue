<template>
  <div>
    <b-button v-b-modal.modalPopover>Show Modal</b-button>

    <b-modal id="modalPopover" title="Modal with Popover" ok-only>
      <p>
        This
        <b-button v-b-popover="'Popover inside a modal!'" title="Popover"
          >Button</b-button
        >
        triggers a popover on click.
      </p>
      <p>
        This <a href="#" v-b-tooltip title="Tooltip in a modal!">Link</a> will
        show a tooltip on hover.
      </p>
    </b-modal>
  </div>

  <!-- b-modal-popover.vue -->
</template>
