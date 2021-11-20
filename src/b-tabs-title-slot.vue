<template>
  <div>
    <b-tabs>
      <b-tab active>
        <template #title>
          <b-spinner type="grow" small></b-spinner> I'm <i>custom</i>
          <strong>title</strong>
        </template>
        <p class="p-3">Tab contents 1</p>
      </b-tab>

      <b-tab>
        <template #title>
          <b-spinner type="border" small></b-spinner> Tab 2
        </template>
        <p class="p-3">Tab contents 2</p>
      </b-tab>
    </b-tabs>
  </div>

  <!-- b-tabs-title-slot.vue -->
</template>
