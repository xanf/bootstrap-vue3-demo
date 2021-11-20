<template>
  <div>
    <b-nav pills>
      <b-nav-item href="#1" active>Link 1</b-nav-item>
      <b-nav-item href="#2">Link 2</b-nav-item>
      <b-nav-form @submit.stop.prevent="alert('Form Submitted')">
        <b-form-input aria-label="Input" class="mr-1"></b-form-input>
        <b-button type="submit">Ok</b-button>
      </b-nav-form>
    </b-nav>
  </div>

  <!-- b-nav-form.vue -->
</template>
