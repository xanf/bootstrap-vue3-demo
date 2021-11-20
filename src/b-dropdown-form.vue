<template>
  <div>
    <b-dropdown
      id="dropdown-form"
      text="Dropdown with form"
      ref="dropdown"
      class="m-2"
    >
      <b-dropdown-form>
        <b-form-group
          label="Email"
          label-for="dropdown-form-email"
          @submit.stop.prevent
        >
          <b-form-input
            id="dropdown-form-email"
            size="sm"
            placeholder="email@example.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password" label-for="dropdown-form-password">
          <b-form-input
            id="dropdown-form-password"
            type="password"
            size="sm"
            placeholder="Password"
          ></b-form-input>
        </b-form-group>

        <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
        <b-button variant="primary" size="sm" @click="onClick"
          >Sign In</b-button
        >
      </b-dropdown-form>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>New around here? Sign up</b-dropdown-item-button>
      <b-dropdown-item-button>Forgot Password?</b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true);
    },
  },
};
</script>

<!-- b-dropdown-form.vue -->
