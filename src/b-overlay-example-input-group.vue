<template>
  <div>
    <b-overlay :show="busy" rounded="lg" opacity="0.6" @hidden="onHidden">
      <template #overlay>
        <div class="d-flex align-items-center">
          <b-spinner small type="grow" variant="secondary"></b-spinner>
          <b-spinner type="grow" variant="dark"></b-spinner>
          <b-spinner small type="grow" variant="secondary"></b-spinner>
          <!-- We add an SR only text for screen readers -->
          <span class="sr-only">Please wait...</span>
        </div>
      </template>
      <b-input-group size="lg" :aria-hidden="busy ? 'true' : null">
        <b-form-input v-model="value" :disabled="busy"></b-form-input>
        <b-input-group-append>
          <b-button
            ref="button"
            :disabled="busy"
            variant="primary"
            @click="onClick"
          >
            Do something
          </b-button>
        </b-input-group-append>
      </b-input-group>
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
      value: 'Some value',
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
      // Return focus to the button
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

<!-- b-overlay-example-input-group.vue -->
