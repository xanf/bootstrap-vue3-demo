<template>
  <div>
    <select v-model="currentComponent">
      <option
        v-for="option in Object.keys($options.componentMap)"
        :key="option"
      >
        {{ option }}
      </option>
    </select>
    <hr />
    <component
      class="m-2"
      :is="$options.componentMap[currentComponent]"
      v-if="currentComponent"
    ></component>
  </div>
</template>

<script>
import Vue from "vue";
const componentMap = Object.fromEntries(
  Object.entries(import.meta.glob("./*.vue")).map(([k, c]) => [
    k,
    Vue.version.startsWith("3") ? Vue.defineAsyncComponent(c) : c,
  ])
);

export default {
  data() {
    const fromLs = localStorage.getItem("bv-demo");
    const keys = Object.keys(componentMap);
    const currentComponent = keys.includes(fromLs) ? fromLs : keys[0];
    return {
      currentComponent,
    };
  },
  watch: {
    currentComponent(newValue) {
      localStorage.setItem("bv-demo", newValue);
    },
  },
  componentMap,
};
</script>
