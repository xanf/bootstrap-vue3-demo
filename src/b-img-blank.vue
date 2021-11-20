<template>
  <div>
    <b-img v-bind="mainProps" alt="Transparent image"></b-img>
    <b-img
      v-bind="mainProps"
      blank-color="#777"
      alt="HEX shorthand color image (#777)"
    ></b-img>
    <b-img
      v-bind="mainProps"
      blank-color="red"
      alt="Named color image (red)"
    ></b-img>
    <b-img
      v-bind="mainProps"
      blank-color="black"
      alt="Named color image (black)"
    ></b-img>
    <b-img
      v-bind="mainProps"
      blank-color="#338833"
      alt="HEX color image"
    ></b-img>
    <b-img
      v-bind="mainProps"
      blank-color="rgba(128, 255, 255, 0.5)"
      alt="RGBa color image"
    ></b-img>
    <b-img
      v-bind="mainProps"
      blank-color="#88f"
      alt="HEX shorthand color (#88f)"
    ></b-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: { blank: true, width: 75, height: 75, class: "m1" },
    };
  },
};
</script>

<!-- b-img-blank.vue -->
