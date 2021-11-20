<template>
  <div>
    <b-dropdown text="Button text via Prop">
      <b-dropdown-item href="#">An item</b-dropdown-item>
      <b-dropdown-item href="#">Another item</b-dropdown-item>
    </b-dropdown>

    <b-dropdown>
      <template #button-content>
        Custom <strong>Content</strong> with <em>HTML</em> via Slot
      </template>
      <b-dropdown-item href="#">An item</b-dropdown-item>
      <b-dropdown-item href="#">Another item</b-dropdown-item>
    </b-dropdown>
  </div>

  <!-- b-dropdown-button-content.vue -->
</template>
