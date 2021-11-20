<template>
  <div>
    <b-progress :max="max" class="mb-3">
      <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
    </b-progress>

    <b-progress show-progress :max="max" class="mb-3">
      <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
    </b-progress>

    <b-progress show-value striped :max="max" class="mb-3">
      <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
      <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
      <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
    </b-progress>

    <b-progress :max="max">
      <b-progress-bar
        variant="primary"
        :value="values[0]"
        show-progress
      ></b-progress-bar>
      <b-progress-bar
        variant="success"
        :value="values[1]"
        animated
        show-progress
      ></b-progress-bar>
      <b-progress-bar
        variant="info"
        :value="values[2]"
        striped
        show-progress
      ></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [15, 30, 20],
      max: 100,
    };
  },
};
</script>

<!-- b-progress-multiple.vue -->
