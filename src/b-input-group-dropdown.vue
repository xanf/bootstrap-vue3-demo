<template>
  <div>
    <b-input-group>
      <template #prepend>
        <b-dropdown text="Dropdown" variant="info">
          <b-dropdown-item>Action A</b-dropdown-item>
          <b-dropdown-item>Action B</b-dropdown-item>
        </b-dropdown>
      </template>

      <b-form-input></b-form-input>

      <template #append>
        <b-dropdown
          text="Dropdown"
          variant="outline-secondary"
          v-for="i in 2"
          :key="i"
        >
          <b-dropdown-item>Action C</b-dropdown-item>
          <b-dropdown-item>Action D</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-input-group>
  </div>

  <!-- b-input-group-dropdown.vue -->
</template>
