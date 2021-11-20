<template>
  <div class="text-center">
    <div>
      <b-button id="tooltip-button-1" variant="primary"
        >I have a tooltip</b-button
      >
    </div>

    <div class="mt-3">
      <b-button @click="show = !show">Toggle Tooltip</b-button>
    </div>

    <b-tooltip :show.sync="show" target="tooltip-button-1" placement="top">
      Hello <strong>World!</strong>
    </b-tooltip>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>

<!-- b-tooltip-show-sync.vue -->
