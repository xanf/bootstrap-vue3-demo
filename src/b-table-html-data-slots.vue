<template>
  <div>
    <b-table :items="items">
      <template #cell(html)="data">
        <span v-html="data.value"></span>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "This is <i>escaped</i> content",
          html: 'This is <i>raw <strong>HTML</strong></i> <span style="color:red">content</span>',
        },
      ],
    };
  },
};
</script>

<!-- b-table-html-data-slots.vue -->
