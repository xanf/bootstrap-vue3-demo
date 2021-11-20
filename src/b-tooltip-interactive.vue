<template>
  <div class="text-center">
    <div>
      <b-button id="tooltip-button-interactive"
        >My tooltip is interactive</b-button
      >
      <b-tooltip target="tooltip-button-interactive"
        >I will stay open when hovered</b-tooltip
      >
    </div>

    <div class="mt-3">
      <b-button id="tooltip-button-not-interactive">Mine is not...</b-button>
      <b-tooltip target="tooltip-button-not-interactive" noninteractive
        >Catch me if you can!</b-tooltip
      >
    </div>
  </div>

  <!-- b-tooltip-interactive.vue -->
</template>
