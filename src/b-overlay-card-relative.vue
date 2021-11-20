<template>
  <div>
    <b-card header="Card header" footer="Card footer">
      <b-media>
        <template #aside>
          <b-img
            thumbnail
            rounded="circle"
            src="https://picsum.photos/72/72/?image=58"
            alt="Image"
          ></b-img>
        </template>
        <p class="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </b-media>
      <b-overlay :show="show" no-wrap></b-overlay>
    </b-card>
    <b-button @click="show = !show" class="mt-3">Toggle overlay</b-button>
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

<!-- b-overlay-card-relative.vue -->
