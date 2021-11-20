<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="tooltip-button-disable" variant="primary"
        >I have a tooltip</b-button
      >
    </div>

    <div class="p-2">
      <b-button @click="disabled = !disabled">
        {{ disabled ? "Enable" : "Disable" }} Tooltip by prop
      </b-button>
      <b-button @click="disableByRef">
        {{ disabled ? "Enable" : "Disable" }} Tooltip by $ref event
      </b-button>

      <b-tooltip
        :disabled.sync="disabled"
        ref="tooltip"
        target="tooltip-button-disable"
      >
        Hello <strong>World!</strong>
      </b-tooltip>
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
        this.$refs.tooltip.$emit("enable");
      } else {
        this.$refs.tooltip.$emit("disable");
      }
    },
  },
};
</script>

<!-- b-tooltip-disable.vue -->
