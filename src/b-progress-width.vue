<template>
  <div>
    <h5>Default width</h5>
    <b-progress :value="value" class="mb-3"></b-progress>

    <h5>Custom widths</h5>
    <b-progress :value="value" class="w-75 mb-2"></b-progress>
    <b-progress :value="value" class="w-50 mb-2"></b-progress>
    <b-progress :value="value" class="w-25"></b-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 75,
    };
  },
};
</script>

<!-- b-progress-width.vue -->
