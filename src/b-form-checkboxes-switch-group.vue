<template>
  <div>
    <b-form-group
      label="Inline switch style checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group
      label="Stacked (vertical) switch style checkboxes"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        switches
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Red", value: "red" },
        { text: "Green", value: "green" },
        { text: "Yellow (disabled)", value: "yellow", disabled: true },
        { text: "Blue", value: "blue" },
      ],
    };
  },
};
</script>

<!-- b-form-checkboxes-switch-group.vue -->
