<template>
  <div>
    <label for="example-locales">Locale:</label>
    <b-form-select
      id="example-locales"
      v-model="locale"
      :options="locales"
      class="mb-2"
    ></b-form-select>

    <label for="example-weekdays">Start weekday:</label>
    <b-form-select
      id="example-weekdays"
      v-model="weekday"
      :options="weekdays"
      class="mb-2"
    ></b-form-select>

    <div>
      <b-form-checkbox v-model="showDecadeNav" switch inline class="my-2">
        Show decade navigation buttons
      </b-form-checkbox>

      <b-form-checkbox v-model="hideHeader" switch inline class="my-2">
        Hide calendar header
      </b-form-checkbox>
    </div>

    <label for="example-i18n-picker">Date picker:</label>
    <b-form-datepicker
      id="example-i18n-picker"
      v-model="value"
      v-bind="labels[locale] || {}"
      :locale="locale"
      :start-weekday="weekday"
      :show-decade-nav="showDecadeNav"
      :hide-header="hideHeader"
      class="mb-2"
    ></b-form-datepicker>
    <p>
      Value: <b>'{{ value }}'</b>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      locale: "en-US",
      showDecadeNav: false,
      hideHeader: false,
      locales: [
        { value: "en-US", text: "English US (en-US)" },
        { value: "de", text: "German (de)" },
        { value: "ar-EG", text: "Arabic Egyptian (ar-EG)" },
        { value: "zh", text: "Chinese (zh)" },
      ],
      weekday: 0,
      weekdays: [
        { value: 0, text: "Sunday" },
        { value: 1, text: "Monday" },
        { value: 6, text: "Saturday" },
      ],
      labels: {
        de: {
          labelPrevDecade: "Vorheriges Jahrzehnt",
          labelPrevYear: "Vorheriges Jahr",
          labelPrevMonth: "Vorheriger Monat",
          labelCurrentMonth: "Aktueller Monat",
          labelNextMonth: "Nächster Monat",
          labelNextYear: "Nächstes Jahr",
          labelNextDecade: "Nächstes Jahrzehnt",
          labelToday: "Heute",
          labelSelected: "Ausgewähltes Datum",
          labelNoDateSelected: "Kein Datum gewählt",
          labelCalendar: "Kalender",
          labelNav: "Kalendernavigation",
          labelHelp: "Mit den Pfeiltasten durch den Kalender navigieren",
        },
        "ar-EG": {
          weekdayHeaderFormat: "narrow",
          labelPrevDecade: "العقد السابق",
          labelPrevYear: "العام السابق",
          labelPrevMonth: "الشهر السابق",
          labelCurrentMonth: "الشهر الحالي",
          labelNextMonth: "الشهر المقبل",
          labelNextYear: "العام المقبل",
          labelNextDecade: "العقد القادم",
          labelToday: "اليوم",
          labelSelected: "التاريخ المحدد",
          labelNoDateSelected: "لم يتم اختيار تاريخ",
          labelCalendar: "التقويم",
          labelNav: "الملاحة التقويم",
          labelHelp: "استخدم مفاتيح المؤشر للتنقل في التواريخ",
        },
        zh: {
          weekdayHeaderFormat: "narrow",
          labelPrevDecade: "过去十年",
          labelPrevYear: "上一年",
          labelPrevMonth: "上个月",
          labelCurrentMonth: "当前月份",
          labelNextMonth: "下个月",
          labelNextYear: "明年",
          labelNextDecade: "下一个十年",
          labelToday: "今天",
          labelSelected: "选定日期",
          labelNoDateSelected: "未选择日期",
          labelCalendar: "日历",
          labelNav: "日历导航",
          labelHelp: "使用光标键浏览日期",
        },
      },
    };
  },
};
</script>

<!-- b-form-datepicker-i18n.vue -->
