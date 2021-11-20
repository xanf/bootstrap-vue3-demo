<template>
  <b-container fluid>
    <b-row>
      <b-col md="4" class="py-4">
        <b-button id="button-1" variant="outline-success">Live chat</b-button>
      </b-col>
      <b-col md="4" class="py-4">
        <b-button id="button-2" variant="outline-success">Html chat</b-button>
      </b-col>
      <b-col md="4" class="py-4">
        <b-button ref="button-3" variant="outline-success"
          >Alternative chat</b-button
        >
      </b-col>
    </b-row>

    <!-- Tooltip title specified via prop title -->
    <b-tooltip target="button-1" title="Online!"></b-tooltip>

    <!-- HTML title specified via default slot -->
    <b-tooltip target="button-2" placement="bottom">
      Hello <strong>World!</strong>
    </b-tooltip>

    <!-- Tooltip for an element identified by ref -->
    <b-tooltip
      :target="() => $refs['button-3']"
      title="Alternative!"
    ></b-tooltip>
  </b-container>

  <!-- b-tooltip-component.vue -->
</template>
