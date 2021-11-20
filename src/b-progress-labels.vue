<template>
  <div>
    <h5>No label</h5>
    <b-progress :value="value" :max="max" class="mb-3"></b-progress>

    <h5>Value label</h5>
    <b-progress :value="value" :max="max" show-value class="mb-3"></b-progress>

    <h5>Progress label</h5>
    <b-progress
      :value="value"
      :max="max"
      show-progress
      class="mb-3"
    ></b-progress>

    <h5>Value label with precision</h5>
    <b-progress
      :value="value"
      :max="max"
      :precision="2"
      show-value
      class="mb-3"
    ></b-progress>

    <h5>Progress label with precision</h5>
    <b-progress
      :value="value"
      :max="max"
      :precision="2"
      show-progress
      class="mb-3"
    ></b-progress>
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

<!-- b-progress-labels.vue -->
