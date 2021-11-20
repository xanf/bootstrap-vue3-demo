<template>
  <div>
    <b-button @click="toast('b-toaster-top-right')" class="mb-2"
      >b-toaster-top-right</b-button
    >
    <b-button @click="toast('b-toaster-top-left')" class="mb-2"
      >b-toaster-top-left</b-button
    >
    <b-button @click="toast('b-toaster-top-center')" class="mb-2"
      >b-toaster-top-center</b-button
    >
    <b-button @click="toast('b-toaster-top-full')" class="mb-2"
      >b-toaster-top-full</b-button
    >
    <b-button @click="toast('b-toaster-bottom-right', true)" class="mb-2"
      >b-toaster-bottom-right</b-button
    >
    <b-button @click="toast('b-toaster-bottom-left', true)" class="mb-2"
      >b-toaster-bottom-left</b-button
    >
    <b-button @click="toast('b-toaster-bottom-center', true)" class="mb-2"
      >b-toaster-bottom-center</b-button
    >
    <b-button @click="toast('b-toaster-bottom-full', true)" class="mb-2"
      >b-toaster-bottom-full</b-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    toast(toaster, append = false) {
      this.counter++;
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append,
      });
    },
  },
};
</script>

<!-- toast-targets.vue -->
