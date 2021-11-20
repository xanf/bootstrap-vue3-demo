<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-button-disable" variant="primary"
        >I have a popover</b-button
      >
    </div>

    <div class="p-2">
      <b-button @click="disabled = !disabled">
        {{ disabled ? "Enable" : "Disable" }} Popover by prop
      </b-button>
      <b-button @click="disableByRef">
        {{ disabled ? "Enable" : "Disable" }} Popover by $ref event
      </b-button>

      <b-popover
        :disabled.sync="disabled"
        target="popover-button-disable"
        title="Popover"
        ref="popover"
      >
        Hello <strong>World!</strong>
      </b-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    disableByRef() {
      if (this.disabled) {
        this.$refs.popover.$emit("enable");
      } else {
        this.$refs.popover.$emit("disable");
      }
    },
  },
};
</script>

<!-- b-popover-disable.vue -->
