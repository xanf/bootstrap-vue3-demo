<template>
  <div>
    <b-button @click="show = !show" class="mb-2">Toggle display</b-button>
    <p>Visible: {{ isVisible }}</p>
    <div class="border p-3" style="height: 6em">
      <!-- We use Vue's `v-show` directive to control the CSS `display` of the div -->
      <div v-show="show" class="bg-info p-3">
        <b-badge v-b-visible="handleVisibility"
          >Element with v-b-visible directive</b-badge
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      isVisible: false,
    };
  },
  methods: {
    handleVisibility(isVisible) {
      this.isVisible = isVisible;
    },
  },
};
</script>

<!-- v-b-visible-display.vue -->
