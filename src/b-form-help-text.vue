<template>
  <div>
    <b-form @submit.stop.prevent>
      <label for="text-password">Password</label>
      <b-form-input
        type="password"
        id="text-password"
        aria-describedby="password-help-block"
      ></b-form-input>
      <b-form-text id="password-help-block">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </b-form-text>
    </b-form>
  </div>

  <!-- b-form-help-text.vue -->
</template>
