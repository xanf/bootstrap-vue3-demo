<template>
  <div>
    <b-input-group
      v-for="size in ['sm', '', 'lg']"
      :key="size"
      :size="size"
      class="mb-3"
      prepend="Label"
    >
      <b-form-input></b-form-input>
      <b-input-group-append>
        <b-button size="sm" text="Button" variant="success">Button</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>

  <!-- b-input-group-size.vue -->
</template>
