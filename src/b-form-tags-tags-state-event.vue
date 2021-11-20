<template>
  <div>
    <label for="tags-state-event">Enter tags</label>
    <b-form-tags
      input-id="tags-state-event"
      v-model="tags"
      :tag-validator="validator"
      placeholder="Enter tags (3-5 characters) separated by space"
      separator=" "
      @tag-state="onTagState"
    ></b-form-tags>
    <p class="mt-2">Tags: {{ tags }}</p>
    <p>Event values:</p>
    <ul>
      <li>validTags: {{ validTags }}</li>
      <li>invalidTags: {{ invalidTags }}</li>
      <li>duplicateTags: {{ duplicateTags }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
      validTags: [],
      invalidTags: [],
      duplicateTags: [],
    };
  },
  methods: {
    onTagState(valid, invalid, duplicate) {
      this.validTags = valid;
      this.invalidTags = invalid;
      this.duplicateTags = duplicate;
    },
    validator(tag) {
      return tag.length > 2 && tag.length < 6;
    },
  },
};
</script>

<!-- b-form-tags-tags-state-event.vue -->
