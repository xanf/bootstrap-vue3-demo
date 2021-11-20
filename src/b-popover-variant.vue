<template>
  <div class="text-center">
    <b-button id="popover-button-variant" href="#" tabindex="0"
      >Button</b-button
    >
    <b-popover
      target="popover-button-variant"
      variant="danger"
      triggers="focus"
    >
      <template #title>Danger!</template>
      Danger variant popover
    </b-popover>
  </div>

  <!-- b-popover-variant.vue -->
</template>
