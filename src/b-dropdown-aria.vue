<template>
  <div>
    <b-dropdown
      id="dropdown-aria"
      text="Dropdown ARIA"
      variant="primary"
      class="m-2"
    >
      <b-dropdown-header id="dropdown-header-1">Groups</b-dropdown-header>
      <b-dropdown-item-button aria-describedby="dropdown-header-1"
        >Add</b-dropdown-item-button
      >
      <b-dropdown-item-button aria-describedby="dropdown-header-1"
        >Delete</b-dropdown-item-button
      >

      <b-dropdown-header id="dropdown-header-2">Users</b-dropdown-header>
      <b-dropdown-item-button aria-describedby="dropdown-header-2"
        >Add</b-dropdown-item-button
      >
      <b-dropdown-item-button aria-describedby="dropdown-header-2"
        >Delete</b-dropdown-item-button
      >

      <b-dropdown-divider></b-dropdown-divider>

      <b-dropdown-item-button>
        Something <strong>not</strong> associated with Users
      </b-dropdown-item-button>
    </b-dropdown>
  </div>

  <!-- b-dropdown-aria.vue -->
</template>
