<template>
  <div>
    <b-form-tags v-model="value" no-outer-focus class="mb-2">
      <template v-slot="{ tags, inputAttrs, inputHandlers, addTag, removeTag }">
        <b-input-group aria-controls="my-custom-tags-list">
          <input
            v-bind="inputAttrs"
            v-on="inputHandlers"
            placeholder="New tag - Press enter to add"
            class="form-control"
          />
          <b-input-group-append>
            <b-button @click="addTag()" variant="primary">Add</b-button>
          </b-input-group-append>
        </b-input-group>
        <ul
          id="my-custom-tags-list"
          class="list-unstyled d-inline-flex flex-wrap mb-0"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions removals"
        >
          <!-- Always use the tag value as the :key, not the index! -->
          <!-- Otherwise screen readers will not read the tag
               additions and removals correctly -->
          <b-card
            v-for="tag in tags"
            :key="tag"
            :id="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
            tag="li"
            class="mt-1 mr-1"
            body-class="py-1 pr-2 text-nowrap"
          >
            <strong>{{ tag }}</strong>
            <b-button
              @click="removeTag(tag)"
              variant="link"
              size="sm"
              :aria-controls="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
              >remove</b-button
            >
          </b-card>
        </ul>
      </template>
    </b-form-tags>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["apple", "orange", "banana", "pear", "peach"],
    };
  },
};
</script>

<!-- form-tags-custom-native.vue -->
