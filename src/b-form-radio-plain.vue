<template>
  <div>
    <b-form-group label="Plain inline radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="plain-inline"
        plain
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Plain stacked radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="plain-stacked"
        plain
        stacked
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "first",
      options: [
        { text: "First radio", value: "first" },
        { text: "Second radio", value: "second" },
        { text: "Third radio", value: "third" },
      ],
    };
  },
};
</script>

<!-- b-form-radio-plain.vue -->
