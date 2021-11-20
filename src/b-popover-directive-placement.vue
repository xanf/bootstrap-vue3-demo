<template>
  <div>
    <b-container fluid>
      <b-row class="text-center">
        <b-col md="3" class="py-3">
          <b-button
            v-b-popover.hover.top="'Popover!'"
            title="Title"
            variant="primary"
            >Top</b-button
          >
        </b-col>

        <b-col md="3" class="py-3">
          <b-button
            v-b-popover.hover.right="'Popover!'"
            title="Title"
            variant="primary"
            >Right</b-button
          >
        </b-col>

        <b-col md="3" class="py-3">
          <b-button
            v-b-popover.hover.left="'Popover!'"
            title="Title"
            variant="primary"
            >Left</b-button
          >
        </b-col>

        <b-col md="3" class="py-3">
          <b-button
            v-b-popover.hover.bottom="'Popover!'"
            title="Title"
            variant="primary"
            >Bottom</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>

  <!-- b-popover-directive-placement.vue -->
</template>
