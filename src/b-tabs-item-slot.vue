<template>
  <div>
    <b-tabs>
      <!-- Add your b-tab components here -->
      <template #tabs-end>
        <b-nav-item href="#" role="presentation" @click="() => {}"
          >Another tab</b-nav-item
        >
        <li role="presentation" class="nav-item align-self-center">
          Plain text
        </li>
      </template>
    </b-tabs>
  </div>

  <!-- b-tabs-item-slot.vue -->
</template>
