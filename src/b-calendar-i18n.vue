<template>
  <b-row>
    <b-col cols="12" class="mb-3">
      <label for="example-locales">Locale:</label>
      <b-form-select
        id="example-locales"
        v-model="locale"
        :options="locales"
      ></b-form-select>
      <label for="example-weekdays" class="mt-2">Start weekday:</label>
      <b-form-select
        id="example-weekdays"
        v-model="weekday"
        :options="weekdays"
      ></b-form-select>
      <b-form-checkbox v-model="showDecadeNav" switch inline class="my-2">
        Show decade navigation buttons
      </b-form-checkbox>
      <b-form-checkbox v-model="hideHeader" switch inline class="my-2">
        Hide the date header
      </b-form-checkbox>
    </b-col>
    <b-col md="auto">
      <b-calendar
        v-model="value"
        v-bind="labels[locale] || {}"
        :locale="locale"
        :start-weekday="weekday"
        :hide-header="hideHeader"
        :show-decade-nav="showDecadeNav"
        @context="onContext"
      ></b-calendar>
    </b-col>
    <b-col>
      <p>
        Value: <b>'{{ value }}'</b>
      </p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      context: null,
      showDecadeNav: false,
      hideHeader: false,
      locale: "en-US",
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
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
  },
};
</script>

<!-- b-calendar-i18n.vue -->
