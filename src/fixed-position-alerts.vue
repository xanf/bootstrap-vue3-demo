<template>
  <div>
    <b-button size="sm" @click="showBottom = !showBottom">
      {{ showBottom ? "Hide" : "Show" }} Fixed bottom Alert
    </b-button>
    <b-alert
      v-model="showBottom"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000"
      variant="warning"
      dismissible
    >
      Fixed position (bottom) alert!
    </b-alert>

    <b-button size="sm" @click="showTop = !showTop">
      {{ showTop ? "Hide" : "Show" }} Fixed top Alert
    </b-button>
    <b-alert
      v-model="showTop"
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 2000"
      variant="success"
      dismissible
    >
      Fixed position (top) alert!
    </b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBottom: false,
      showTop: false,
    };
  },
};
</script>

<!-- fixed-position-alerts.vue -->
