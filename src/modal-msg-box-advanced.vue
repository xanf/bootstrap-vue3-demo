<template>
  <div>
    <b-button @click="showMsgOk"
      >Show OK message box with custom content</b-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    showMsgOk() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "Title from <i>HTML<i> string" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-center"] }, [
          " Flashy ",
          h("strong", "msgBoxOk"),
          " message ",
        ]),
        h("p", { class: ["text-center"] }, [h("b-spinner")]),
        h("b-img", {
          props: {
            src: "https://picsum.photos/id/20/250/250",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "circle",
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        centered: true,
        size: "sm",
      });
    },
  },
};
</script>

<!-- modal-msg-box-advanced.vue -->
