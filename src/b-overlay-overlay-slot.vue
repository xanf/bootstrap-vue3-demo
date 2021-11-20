<template>
  <div>
    <b-overlay :show="show" rounded="sm" @shown="onShown" @hidden="onHidden">
      <b-card
        title="Card with custom overlay content"
        :aria-hidden="show ? 'true' : null"
      >
        <b-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text
        >
        <b-card-text>Click the button to toggle the overlay:</b-card-text>
        <b-button
          ref="show"
          :disabled="show"
          variant="primary"
          @click="show = true"
        >
          Show overlay
        </b-button>
      </b-card>
      <template #overlay>
        <div class="text-center">
          <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
          <p id="cancel-label">Please wait...</p>
          <b-button
            ref="cancel"
            variant="outline-danger"
            size="sm"
            aria-describedby="cancel-label"
            @click="show = false"
          >
            Cancel
          </b-button>
        </div>
      </template>
    </b-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onShown() {
      // Focus the cancel button when the overlay is showing
      this.$refs.cancel.focus();
    },
    onHidden() {
      // Focus the show button when the overlay is removed
      this.$refs.show.focus();
    },
  },
};
</script>

<!-- b-overlay-overlay-slot.vue -->
