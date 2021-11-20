<template>
  <div>
    <b-card title="Card Title" body-class="text-center" header-tag="nav">
      <template #header>
        <b-nav card-header tabs>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Inactive</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </template>

      <b-card-text>
        With supporting text below as a natural lead-in to additional content.
      </b-card-text>

      <b-button variant="primary">Go somewhere</b-button>
    </b-card>
  </div>

  <!-- card-with-nav-header-slot.vue -->
</template>
