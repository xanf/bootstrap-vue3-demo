<template>
  <b-container fluid>
    <b-row class="text-center">
      <b-col>
        <b-button
          v-b-popover.hover.v-danger="{ content: 'Popover content' }"
          title="Danger variant"
        >
          Danger Modifier
        </b-button>
      </b-col>
      <b-col>
        <b-button
          v-b-popover.hover="{ variant: 'info', content: 'Popover content' }"
          title="Info variant"
        >
          Info Config
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<!-- b-popover-variants.vue -->
