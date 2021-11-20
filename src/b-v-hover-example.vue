<template>
  <div>
    <div v-b-hover="handleHover" class="border rounded py-3 px-4">
      <b-icon v-if="isHovered" icon="battery-full" scale="2"></b-icon>
      <b-icon v-else icon="battery" scale="2"></b-icon>
      <span class="ml-2" :class="isHovered ? 'text-danger' : ''"
        >Hover this area</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    },
  },
};
</script>

<!-- b-v-hover-example.vue -->
