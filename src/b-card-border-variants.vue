<template>
  <div>
    <div>
      <b-card-group deck>
        <b-card
          border-variant="primary"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>

        <b-card
          border-variant="secondary"
          header="Secondary"
          header-border-variant="secondary"
          align="center"
        >
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>

        <b-card border-variant="success" header="Success" align="center">
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card border-variant="info" header="Info" align="center">
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>

        <b-card
          border-variant="warning"
          header="Warning"
          header-bg-variant="transparent"
          align="center"
        >
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>

        <b-card
          border-variant="danger"
          header="Danger"
          header-border-variant="danger"
          header-text-variant="danger"
          align="center"
        >
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck class="mb-3">
        <b-card border-variant="light" header="Light" class="text-center">
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>

        <b-card border-variant="dark" header="Dark" align="center">
          <b-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.</b-card-text
          >
        </b-card>
      </b-card-group>
    </div>
  </div>

  <!-- b-card-border-variants.vue -->
</template>
