<template>
  <div>
    <div class="mb-2">
      <b-button @click="showMsgBoxOne">Simple msgBoxOk</b-button>
      Return value: {{ String(boxOne) }}
    </div>
    <div class="mb-1">
      <b-button @click="showMsgBoxTwo">msgBoxOk with options</b-button>
      Return value: {{ String(boxTwo) }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxOne: "",
      boxTwo: "",
    };
  },
  methods: {
    showMsgBoxOne() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxOk("Action completed")
        .then((value) => {
          this.boxOne = value;
        })
        .catch((err) => {
          // An error occurred
        });
    },
    showMsgBoxTwo() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxOk("Data was submitted successfully", {
          title: "Confirmation",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          this.boxTwo = value;
        })
        .catch((err) => {
          // An error occurred
        });
    },
  },
};
</script>

<!-- b-modal-msg-box-ok.vue -->
