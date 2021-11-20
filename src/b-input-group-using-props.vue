<template>
  <div>
    <b-input-group prepend="$" append=".00">
      <b-form-input></b-form-input>
    </b-input-group>

    <b-input-group prepend="0" append="100" class="mt-3">
      <b-form-input type="range" min="0" max="100"></b-form-input>
    </b-input-group>
  </div>

  <!-- b-input-group-using-props.vue -->
</template>
