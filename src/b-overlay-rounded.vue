<template>
  <div>
    <b-button @click="show = !show">Toggle overlay</b-button>
    <b-row class="text-center mt-3">
      <b-col md="6">
        <p>With rounding</p>
        <b-overlay :show="show" class="d-inline-block" rounded="circle">
          <b-img
            thumbnail
            rounded="circle"
            fluid
            src="https://picsum.photos/200/200/?image=54"
            alt="Image 1"
          ></b-img>
        </b-overlay>
      </b-col>
      <b-col md="6">
        <p>Without rounding</p>
        <b-overlay :show="show" class="d-inline-block">
          <b-img
            thumbnail
            rounded="circle"
            fluid
            src="https://picsum.photos/200/200/?image=54"
            alt="Image 1"
          ></b-img>
        </b-overlay>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<!-- b-overlay-rounded.vue -->
