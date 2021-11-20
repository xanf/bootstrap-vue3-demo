<template>
  <div>
    <b-img v-bind="mainProps" rounded alt="Rounded image"></b-img>
    <b-img v-bind="mainProps" rounded="top" alt="Top-rounded image"></b-img>
    <b-img v-bind="mainProps" rounded="right" alt="Right-rounded image"></b-img>
    <b-img
      v-bind="mainProps"
      rounded="bottom"
      alt="Bottom-rounded image"
    ></b-img>
    <b-img v-bind="mainProps" rounded="left" alt="Left-rounded image"></b-img>
    <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
    <b-img v-bind="mainProps" rounded="0" alt="Not rounded image"></b-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1",
      },
    };
  },
};
</script>

<!-- b-img-rounded.vue -->
