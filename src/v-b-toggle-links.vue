<template>
  <div>
    <div class="mb-3">
      <a v-b-toggle href="#example-collapse" @click.prevent>Toggle Collapse</a>
      <b-button v-b-toggle href="#example-sidebar" @click.prevent
        >Toggle Sidebar</b-button
      >
    </div>

    <b-collapse id="example-collapse">
      <b-card title="Collapsible card"> Hello world! </b-card>
    </b-collapse>

    <b-sidebar id="example-sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </div>
    </b-sidebar>
  </div>
</template>

<!-- v-b-toggle-links.vue -->
