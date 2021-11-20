<template>
  <div>
    <b-form-group
      label="Text input with formatter (on input)"
      label-for="input-formatter"
      description="We will convert your name to lowercase instantly"
      class="mb-0"
    >
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter your name"
        :formatter="formatter"
      ></b-form-input>
    </b-form-group>
    <p><b>Value:</b> {{ text1 }}</p>

    <b-form-group
      label="Text input with lazy formatter (on blur)"
      label-for="input-lazy"
      description="This one is a little lazy!"
      class="mb-0"
    >
      <b-form-input
        id="input-lazy"
        v-model="text2"
        placeholder="Enter your name"
        lazy-formatter
        :formatter="formatter"
      ></b-form-input>
    </b-form-group>
    <p class="mb-0"><b>Value:</b> {{ text2 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: "",
      text2: "",
    };
  },
  methods: {
    formatter(value) {
      return value.toLowerCase();
    },
  },
};
</script>

<!-- b-form-input-formatter.vue -->
