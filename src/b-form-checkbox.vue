<template>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>

    <div>
      State: <strong>{{ status }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "not_accepted",
    };
  },
};
</script>

<!-- b-form-checkbox.vue -->
