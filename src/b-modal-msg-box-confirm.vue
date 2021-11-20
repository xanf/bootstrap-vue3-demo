<template>
  <div>
    <div class="mb-2">
      <b-button @click="showMsgBoxOne">Simple msgBoxConfirm</b-button>
      Return value: {{ String(boxOne) }}
    </div>
    <div class="mb-1">
      <b-button @click="showMsgBoxTwo">msgBoxConfirm with options</b-button>
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
        .msgBoxConfirm("Are you sure?")
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
        .msgBoxConfirm("Please confirm that you want to delete everything.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
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

<!-- b-modal-msg-box-confirm.vue -->
