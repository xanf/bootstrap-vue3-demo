<template>
  <div>
    <h5>Pressed and un-pressed state</h5>
    <b-button :pressed="true" variant="success">Always Pressed</b-button>
    <b-button :pressed="false" variant="success">Not Pressed</b-button>

    <h5 class="mt-3">Toggleable Button</h5>
    <b-button :pressed.sync="myToggle" variant="primary">Toggle Me</b-button>
    <p>
      Pressed State: <strong>{{ myToggle }}</strong>
    </p>

    <h5>In a button group</h5>
    <b-button-group size="sm">
      <b-button
        v-for="(btn, idx) in buttons"
        :key="idx"
        :pressed.sync="btn.state"
        variant="primary"
      >
        {{ btn.caption }}
      </b-button>
    </b-button-group>
    <p>
      Pressed States: <strong>{{ btnStates }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myToggle: false,
      buttons: [
        { caption: "Toggle 1", state: true },
        { caption: "Toggle 2", state: false },
        { caption: "Toggle 3", state: true },
        { caption: "Toggle 4", state: false },
      ],
    };
  },
  computed: {
    btnStates() {
      return this.buttons.map((btn) => btn.state);
    },
  },
};
</script>

<!-- b-button-toggles.vue -->
