<template>
  <div>
    <b-input-group>
      <template #prepend>
        <b-input-group-text>Username</b-input-group-text>
      </template>
      <b-form-input></b-form-input>

      <template #append>
        <b-dropdown text="Dropdown" variant="success">
          <b-dropdown-item>Action A</b-dropdown-item>
          <b-dropdown-item>Action B</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-input-group>
  </div>

  <!-- b-input-group-using-slots.vue -->
</template>
