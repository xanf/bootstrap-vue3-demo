<template>
  <b-tabs content-class="mt-3">
    <!-- This tabs content will always be mounted -->
    <b-tab title="Regular tab"
      ><b-alert show>I'm always mounted</b-alert></b-tab
    >

    <!-- This tabs content will not be mounted until the tab is shown -->
    <!-- and will be un-mounted when hidden -->
    <b-tab title="Lazy tab" lazy
      ><b-alert show>I'm lazy mounted!</b-alert></b-tab
    >
  </b-tabs>

  <!-- b-tabs-lazy-tab.vue -->
</template>
