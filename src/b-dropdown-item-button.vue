<template>
  <div>
    <b-dropdown
      id="dropdown-buttons"
      text="Dropdown using buttons as menu items"
      class="m-2"
    >
      <b-dropdown-item-button>I'm a button</b-dropdown-item-button>
      <b-dropdown-item-button active
        >I'm a active button</b-dropdown-item-button
      >
      <b-dropdown-item-button disabled
        >I'm a button, but disabled!</b-dropdown-item-button
      >
      <b-dropdown-item-button
        >I don't look like a button, but I am!</b-dropdown-item-button
      >
    </b-dropdown>
  </div>

  <!-- b-dropdown-item-button.vue -->
</template>
