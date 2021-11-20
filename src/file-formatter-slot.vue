<template>
  <b-form-file multiple>
    <template slot="file-name" slot-scope="{ names }">
      <b-badge variant="dark">{{ names[0] }}</b-badge>
      <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
        + {{ names.length - 1 }} More files
      </b-badge>
    </template>
  </b-form-file>
</template>

<!-- file-formatter-slot.vue -->
