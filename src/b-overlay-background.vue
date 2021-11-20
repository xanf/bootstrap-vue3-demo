<template>
  <div>
    <b-row>
      <b-col lg="6" aria-controls="overlay-background">
        <b-form-group
          label="Variant"
          label-for="bg-variant"
          label-cols-sm="4"
          label-cols-lg="12"
        >
          <b-form-select
            id="bg-variant"
            v-model="variant"
            :options="variants"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          label="Opacity"
          label-for="bg-opacity"
          label-cols-sm="4"
          label-cols-lg="12"
        >
          <b-input-group>
            <b-form-input
              id="bg-opacity"
              v-model="opacity"
              type="range"
              number
              min="0"
              max="1"
              step="0.01"
            ></b-form-input>
            <b-input-group-append is-text class="text-monospace">
              {{ opacity.toFixed(2) }}
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-form-group
          label="Blur"
          label-for="bg-blur"
          label-cols-sm="4"
          label-cols-lg="12"
        >
          <b-form-select
            id="bg-blur"
            v-model="blur"
            :options="blurs"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col lg="6">
        <b-overlay
          id="overlay-background"
          show
          :variant="variant"
          :opacity="opacity"
          :blur="blur"
          rounded="sm"
        >
          <b-card title="Card with overlay" aria-hidden="true">
            <b-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </b-card-text>

            <b-button disabled variant="primary">Button</b-button>
          </b-card>
        </b-overlay>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variant: "light",
      opacity: 0.85,
      blur: "2px",
      variants: [
        "transparent",
        "white",
        "light",
        "dark",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
      blurs: [
        { text: "None", value: "" },
        "1px",
        "2px",
        "5px",
        "0.5em",
        "1rem",
      ],
    };
  },
};
</script>

<!-- b-overlay-background.vue -->
