<template>
  <b-container fluid>
    <b-row class="text-center">
      <b-col md="3" class="py-3">
        <b-button
          v-b-popover.hover="'Content!'"
          title="Title from title attribute"
          variant="success"
        >
          Title + Content
        </b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button
          v-b-popover.hover="{
            title: 'Popover',
            content: 'This is the content of popover',
          }"
          variant="success"
        >
          Config Object
        </b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover="popoverData" variant="success"
          >Config from data</b-button
        >
      </b-col>
      <b-col md="3" class="py-3">
        <b-button
          v-b-popover.hover.html="popoverMethod"
          title="Popover with HTML"
          variant="success"
        >
          Method
        </b-button>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="12" class="py-3">
        <b-button v-b-popover.hover="popoverConfig" variant="success"
          >Config Object</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  compatConfig: {
    MODE: 3,
    OPTIONS_BEFORE_DESTROY: 'suppress-warning',
  },

  data() {
    return {
      date: new Date(),
      counter: 0,
      timer: null,
    };
  },
  computed: {
    popoverConfig() {
      // Both title and content specified as a function in this example
      // and will be called the each time the popover is opened
      return {
        html: true,
        title: () => {
          // Note this is called only when the popover is opened
          return 'Hello <b>Popover:</b> ' + ++this.counter;
        },
        content: () => {
          // Note this is called only when the popover is opened
          return 'The date is:<br><em>' + new Date() + '</em>';
        },
      };
    },
    popoverData() {
      return {
        title: 'Popover Title',
        content: 'The date is ' + this.date,
      };
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    popoverMethod() {
      // Returns the content as a string
      // Will be called each time the popover is opened
      return '<strong>' + new Date() + '</strong>';
    },
  },
};
</script>

<!-- b-popover-content.vue -->
