<template>
  <div>
    <label for="timepicker-invalid">Choose a time (invalid style)</label>
    <b-form-timepicker
      id="datepicker-invalid"
      :state="false"
      class="mb-2"
    ></b-form-timepicker>

    <label for="timepicker-valid">Choose a time (valid style)</label>
    <b-form-timepicker id="datepicker-valid" :state="true"></b-form-timepicker>
  </div>
</template>

<!-- b-form-timepicker-validation.vue -->
