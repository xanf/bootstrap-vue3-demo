<template>
  <div>
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
        <b-tab title="Tab 1" :title-link-class="linkClass(0)"
          >Tab contents 1</b-tab
        >
        <b-tab title="Tab 2" :title-link-class="linkClass(1)"
          >Tab contents 2</b-tab
        >
        <b-tab title="Tab 3" :title-link-class="linkClass(2)"
          >Tab contents 3</b-tab
        >
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
  },
};
</script>

<!-- b-tabs-with-classes.vue -->
