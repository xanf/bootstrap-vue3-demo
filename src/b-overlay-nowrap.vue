<template>
  <div>
    <div class="position-relative p-4 bg-info">
      <p class="text-light font-weight-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <b-card title="Card with parent overlay">
        <b-card-text
          >Laborum consequat non elit enim exercitation cillum.</b-card-text
        >
        <b-card-text>Click the button to toggle the overlay:</b-card-text>
        <b-button :disabled="show" variant="primary" @click="show = true">
          Show overlay
        </b-button>
      </b-card>
      <p class="text-light font-weight-bold mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <b-overlay :show="show" no-wrap> </b-overlay>
    </div>
    <b-button class="mt-3" @click="show = !show">Toggle overlay</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<!-- b-overlay-nowrap.vue -->
