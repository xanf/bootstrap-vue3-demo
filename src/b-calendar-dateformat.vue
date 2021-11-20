<template>
  <div>
    <p>Custom date format:</p>
    <b-calendar
      :date-format-options="{
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        weekday: 'short',
      }"
      locale="en"
    ></b-calendar>
    <p class="mt-3">Short date format:</p>
    <b-calendar
      :date-format-options="{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      }"
      locale="en"
    ></b-calendar>
  </div>
</template>

<!-- b-calendar-dateformat.vue -->
