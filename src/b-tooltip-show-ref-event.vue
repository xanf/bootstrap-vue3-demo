<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="tooltip-button-show-event" variant="primary"
        >I have a tooltip</b-button
      >
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="onOpen">Open</b-button>
      <b-button class="px-1" @click="onClose">Close</b-button>
    </div>

    <b-tooltip ref="tooltip" target="tooltip-button-show-event">
      Hello <strong>World!</strong>
    </b-tooltip>
  </div>
</template>

<script>
export default {
  methods: {
    onOpen() {
      this.$refs.tooltip.$emit("open");
    },
    onClose() {
      this.$refs.tooltip.$emit("close");
    },
  },
};
</script>

<!-- b-tooltip-show-ref-event.vue -->
