<template>
  <div>
    <h5>Custom label via default slot</h5>
    <b-progress :max="max" height="2rem">
      <b-progress-bar :value="value">
        <span
          >Progress: <strong>{{ value.toFixed(2) }} / {{ max }}</strong></span
        >
      </b-progress-bar>
    </b-progress>

    <h5 class="mt-3">Custom label via property</h5>
    <b-progress :max="max">
      <b-progress-bar
        :value="value"
        :label="`${((value / max) * 100).toFixed(2)}%`"
      ></b-progress-bar>
    </b-progress>

    <h5 class="mt-3">Custom label via property (HTML support)</h5>
    <b-progress :max="max">
      <b-progress-bar
        :value="value"
        :label-html="`<del>${value}</del>`"
      ></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 33.333333333,
      max: 50,
    };
  },
};
</script>

<!-- b-progress-custom-labels.vue -->
