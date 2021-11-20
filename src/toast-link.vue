<template>
  <div>
    <b-button @click="toast()">Toast with link</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    toast() {
      this.$bvToast.toast(`Toast with action link`, {
        href: "#foo",
        title: "Example",
      });
    },
  },
};
</script>

<!-- toast-link.vue -->
