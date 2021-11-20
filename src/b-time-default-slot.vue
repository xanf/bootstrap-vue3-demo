<template>
  <b-time v-model="value" show-seconds locale="en">
    <div class="d-flex" dir="ltr">
      <b-button
        size="sm"
        variant="outline-danger"
        v-if="value"
        @click="clearTime"
      >
        Clear time
      </b-button>
      <b-button
        size="sm"
        variant="outline-primary"
        class="ml-auto"
        @click="setNow"
      >
        Set Now
      </b-button>
    </div>
  </b-time>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
  methods: {
    setNow() {
      const now = new Date();
      // Grab the HH:mm:ss part of the time string
      this.value = now.toTimeString().slice(0, 8);
    },
    clearTime() {
      this.value = "";
    },
  },
};
</script>

<!-- b-time-default-slot.vue -->
