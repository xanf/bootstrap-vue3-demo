<template>
  <div>
    <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
      <b-button-group class="mx-1">
        <b-button>New</b-button>
        <b-button>Edit</b-button>
        <b-button>Undo</b-button>
      </b-button-group>
      <b-dropdown class="mx-1" right text="menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-button-group class="mx-1">
        <b-button>Save</b-button>
        <b-button>Cancel</b-button>
      </b-button-group>
    </b-button-toolbar>
  </div>

  <!-- b-button-toolbar-dropdown.vue -->
</template>
