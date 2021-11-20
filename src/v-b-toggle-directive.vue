<template>
  <div>
    <div class="mb-3">
      <b-button v-b-toggle.my-collapse>Toggle Collapse</b-button>
      <b-button v-b-toggle.my-sidebar>Toggle Sidebar</b-button>
    </div>

    <b-collapse id="my-collapse">
      <b-card title="Collapsible card"> Hello world! </b-card>
    </b-collapse>

    <b-sidebar id="my-sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </div>
    </b-sidebar>
  </div>
</template>

<!-- v-b-toggle-directive.vue -->
