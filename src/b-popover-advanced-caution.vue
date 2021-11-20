<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <b-button id="popover-manual-1" variant="primary" ref="button"
        >Unreliable</b-button
      >

      <b-popover target="popover-manual-1" :show.sync="pop1" triggers="click">
        I can be stubborn sometimes.
      </b-popover>
    </div>

    <div class="p-2">
      <b-button
        id="popover-manual-2"
        variant="primary"
        ref="button"
        @click="pop2 = !pop2"
      >
        Comfortably Numb
      </b-button>

      <b-popover target="popover-manual-2" :show.sync="pop2" triggers="">
        I do believe it's working, good.
      </b-popover>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="popOpen">Open</b-button>
      <b-button class="px-1" @click="popClose">Close</b-button>
      <b-button class="px-1" @click="popToggle">Toggle</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pop1: false,
      pop2: false,
    };
  },
  methods: {
    popOpen() {
      this.pop1 = this.pop2 = true;
    },
    popClose() {
      this.pop1 = this.pop2 = false;
    },
    popToggle() {
      this.pop1 = !this.pop1;
      this.pop2 = !this.pop2;
    },
  },
};
</script>

<!-- b-popover-advanced-caution.vue -->
