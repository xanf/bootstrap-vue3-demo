<template>
  <div>
    <b-overlay
      :show="busy"
      rounded
      opacity="0.6"
      spinner-small
      spinner-variant="primary"
      class="d-inline-block"
      @hidden="onHidden"
    >
      <b-button
        ref="button"
        :disabled="busy"
        variant="primary"
        @click="onClick"
      >
        Do something
      </b-button>
    </b-overlay>
  </div>
</template>

<script>
export default {
  compatConfig: {
    MODE: 3,
    OPTIONS_BEFORE_DESTROY: 'suppress-warning',
  },

  data() {
    return {
      busy: false,
      timeout: null,
    };
  },
  beforeDestroy() {
    this.clearTimeout();
  },
  methods: {
    clearTimeout() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    },
    setTimeout(callback) {
      this.clearTimeout();
      this.timeout = setTimeout(() => {
        this.clearTimeout();
        callback();
      }, 5000);
    },
    onHidden() {
      // Return focus to the button once hidden
      this.$refs.button.focus();
    },
    onClick() {
      this.busy = true;
      // Simulate an async request
      this.setTimeout(() => {
        this.busy = false;
      });
    },
  },
};
</script>

<!-- b-overlay-example-loading-button.vue -->
