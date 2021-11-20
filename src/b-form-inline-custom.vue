<template>
  <div>
    <b-form inline>
      <label class="mr-sm-2" for="inline-form-custom-select-pref"
        >Preference</label
      >
      <b-form-select
        id="inline-form-custom-select-pref"
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']"
        :value="null"
      ></b-form-select>

      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
        >Remember my preference</b-form-checkbox
      >

      <b-button variant="primary">Save</b-button>
    </b-form>
  </div>

  <!-- b-form-inline-custom.vue -->
</template>
