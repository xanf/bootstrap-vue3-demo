<template>
  <div>
    <b-calendar
      v-model="value"
      :date-info-fn="dateClass"
      locale="en"
    ></b-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    dateClass(ymd, date) {
      const day = date.getDate();
      return day >= 10 && day <= 20 ? "table-info" : "";
    },
  },
};
</script>

<!-- b-calendar-date-classes.vue -->
