<template>
  <div>
    <b-time v-model="value" show-seconds locale="en"></b-time>
    <div class="mt-2">Value: '{{ value }}'</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>
<!-- b-time-show-seconds.vue -->
