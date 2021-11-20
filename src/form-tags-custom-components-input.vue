<template>
  <div>
    <b-form-tags v-model="value" no-outer-focus class="mb-2">
      <template
        v-slot="{
          tags,
          inputAttrs,
          inputHandlers,
          tagVariant,
          addTag,
          removeTag,
        }"
      >
        <b-input-group class="mb-2">
          <b-form-input
            v-bind="inputAttrs"
            v-on="inputHandlers"
            placeholder="New tag - Press enter to add"
            class="form-control"
          ></b-form-input>
          <b-input-group-append>
            <b-button @click="addTag()" variant="primary">Add</b-button>
          </b-input-group-append>
        </b-input-group>
        <div class="d-inline-block" style="font-size: 1.5rem">
          <b-form-tag
            v-for="tag in tags"
            @remove="removeTag(tag)"
            :key="tag"
            :title="tag"
            :variant="tagVariant"
            class="mr-1"
            >{{ tag }}</b-form-tag
          >
        </div>
      </template>
    </b-form-tags>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["apple", "orange", "banana"],
    };
  },
};
</script>

<!-- form-tags-custom-components-input.vue -->
