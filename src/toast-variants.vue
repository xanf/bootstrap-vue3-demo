<template>
  <div>
    <b-button @click="makeToast()" class="mb-2">Default</b-button>
    <b-button variant="primary" @click="makeToast('primary')" class="mb-2"
      >Primary</b-button
    >
    <b-button variant="secondary" @click="makeToast('secondary')" class="mb-2"
      >Secondary</b-button
    >
    <b-button variant="danger" @click="makeToast('danger')" class="mb-2"
      >Danger</b-button
    >
    <b-button variant="warning" @click="makeToast('warning')" class="mb-2"
      >Warning</b-button
    >
    <b-button variant="success" @click="makeToast('success')" class="mb-2"
      >Success</b-button
    >
    <b-button variant="info" @click="makeToast('info')" class="mb-2"
      >Info</b-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>

<!-- toast-variants.vue -->
