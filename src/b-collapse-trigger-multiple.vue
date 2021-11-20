<template>
  <div>
    <!-- Via multiple directive modifiers -->
    <b-button v-b-toggle.collapse-a.collapse-b
      >Toggle Collapse A and B</b-button
    >

    <!-- Via space separated string of IDs passed to directive value -->
    <b-button v-b-toggle="'collapse-a collapse-b'"
      >Toggle Collapse A and B</b-button
    >

    <!-- Via array of string IDs passed to directive value -->
    <b-button v-b-toggle="['collapse-a', 'collapse-b']"
      >Toggle Collapse A and B</b-button
    >

    <!-- Elements to collapse -->
    <b-collapse id="collapse-a" class="mt-2">
      <b-card>I am collapsible content A!</b-card>
    </b-collapse>
    <b-collapse id="collapse-b" class="mt-2">
      <b-card>I am collapsible content B!</b-card>
    </b-collapse>
  </div>

  <!-- b-collapse-trigger-multiple.vue -->
</template>
