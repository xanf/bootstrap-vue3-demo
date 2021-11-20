<template>
  <div>
    <label for="datepicker-invalid">Choose a date (invalid style)</label>
    <b-form-datepicker
      id="datepicker-invalid"
      :state="false"
      class="mb-2"
    ></b-form-datepicker>
    <label for="datepicker-valid">Choose a date (valid style)</label>
    <b-form-datepicker id="datepicker-valid" :state="true"></b-form-datepicker>
  </div>
</template>

<!-- b-form-datepicker-invalid-valid.vue -->
