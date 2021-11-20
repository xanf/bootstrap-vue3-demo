<template>
  <div>
    <h5>Default height</h5>
    <b-progress :value="value" show-progress class="mb-3"></b-progress>

    <h5>Custom heights</h5>
    <b-progress
      height="2rem"
      :value="value"
      show-progress
      class="mb-2"
    ></b-progress>
    <b-progress
      height="20px"
      :value="value"
      show-progress
      class="mb-2"
    ></b-progress>
    <b-progress height="2px" :value="value"></b-progress>
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

<!-- b-progress-height.vue -->
