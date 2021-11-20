<template>
  <div>
    <!-- Using props -->
    <b-input-group size="lg" prepend="$" append=".00">
      <b-form-input></b-form-input>
    </b-input-group>

    <!-- Using slots -->
    <b-input-group class="mt-3">
      <template #append>
        <b-input-group-text
          ><strong class="text-danger">!</strong></b-input-group-text
        >
      </template>
      <b-form-input></b-form-input>
    </b-input-group>

    <!-- Using components -->
    <b-input-group prepend="Username" class="mt-3">
      <b-form-input></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-success">Button</b-button>
        <b-button variant="info">Button</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>

  <!-- b-input-group.vue -->
</template>
