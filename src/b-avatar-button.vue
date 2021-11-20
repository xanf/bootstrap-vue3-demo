<template>
  <b-list-group>
    <b-list-group-item>
      <b-avatar
        button
        @click="onClick"
        variant="primary"
        text="FF"
        class="align-baseline"
      ></b-avatar>
      Button Text Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar
        button
        @click="onClick"
        src="https://placekitten.com/300/300"
      ></b-avatar>
      Button Image Avatar
    </b-list-group-item>
    <b-list-group-item>
      <b-avatar
        button
        @click="onClick"
        icon="star-fill"
        class="align-center"
      ></b-avatar>
      Button Icon Avatar
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$bvModal.msgBoxOk("User name: Fred Flintstone", {
        title: "User Info",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        headerClass: "p-2 border-bottom-0",
        footerClass: "p-2 border-top-0",
      });
    },
  },
};
</script>

<!-- b-avatar-button.vue -->
