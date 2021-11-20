<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-button-sync" variant="primary"
        >I have a popover</b-button
      >
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="show = !show">Toggle Popover</b-button>

      <b-popover :show.sync="show" target="popover-button-sync" title="Popover">
        Hello <strong>World!</strong>
      </b-popover>
    </div>
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

<!-- b-popover-show-sync.vue -->
