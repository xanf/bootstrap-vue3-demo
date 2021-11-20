<template>
  <div>
    <label for="datepicker-dateformat1">Custom date format</label>
    <b-form-datepicker
      id="datepicker-dateformat1"
      :date-format-options="{
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        weekday: 'short',
      }"
      locale="en"
    ></b-form-datepicker>

    <label class="mt-3" for="datepicker-dateformat2">Short date format</label>
    <b-form-datepicker
      id="datepicker-dateformat2"
      :date-format-options="{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }"
      locale="en"
    ></b-form-datepicker>
  </div>
</template>

<!-- b-form-datepicker-dateformat.vue -->
