<template>
  <div>
    <b-progress :value="25" variant="success" :striped="striped"></b-progress>
    <b-progress
      :value="50"
      variant="info"
      :striped="striped"
      class="mt-2"
    ></b-progress>
    <b-progress
      :value="75"
      variant="warning"
      :striped="striped"
      class="mt-2"
    ></b-progress>
    <b-progress
      :value="100"
      variant="danger"
      :striped="striped"
      class="mt-2"
    ></b-progress>

    <b-button variant="secondary" @click="striped = !striped" class="mt-3">
      {{ striped ? "Remove" : "Add" }} Striped
    </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      striped: true,
    };
  },
};
</script>

<!-- b-progress-striped.vue -->
