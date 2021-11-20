<template>
  <div>
    <b-overlay no-center show rounded="sm">
      <template #overlay>
        <b-icon
          icon="stopwatch"
          variant="info"
          scale="2"
          shift-v="8"
          shift-h="8"
          class="position-absolute"
          style="top: 0; right: 0"
        ></b-icon>
      </template>
      <b-card title="Card with no-center overlay" aria-hidden="true">
        <b-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </b-card-text>
        <b-button disabled variant="primary">Button</b-button>
      </b-card>
    </b-overlay>
  </div>
</template>

<!-- b-overlay-no-center.vue -->
