<template>
  <div>
    <b-form @submit.stop.prevent>
      <label for="feedback-user">User ID</label>
      <b-form-input
        v-model="userId"
        :state="validation"
        id="feedback-user"
      ></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
  },
};
</script>

<!-- b-form-feedback-example.vue -->
