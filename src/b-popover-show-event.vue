<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-button-event" variant="primary"
        >I have a popover</b-button
      >
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="onOpen">Open</b-button>
      <b-button class="px-1" @click="onClose">Close</b-button>
    </div>

    <b-popover ref="popover" target="popover-button-event" title="Popover">
      Hello <strong>World!</strong>
    </b-popover>
  </div>
</template>

<script>
export default {
  methods: {
    onOpen() {
      this.$refs.popover.$emit("open");
    },
    onClose() {
      this.$refs.popover.$emit("close");
    },
  },
};
</script>

<!-- b-popover-show-event.vue -->
