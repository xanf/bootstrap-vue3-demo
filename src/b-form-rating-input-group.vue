<template>
  <div>
    <b-input-group>
      <b-input-group-prepend>
        <b-button @click="value = null">Clear</b-button>
      </b-input-group-prepend>
      <b-form-rating v-model="value" color="#ff8800"></b-form-rating>
      <b-input-group-append>
        <b-input-group-text
          class="justify-content-center"
          style="min-width: 3em"
        >
          {{ value }}
        </b-input-group-text>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<!-- b-form-rating-input-group.vue -->
