<template>
  <div>
    <b-card
      no-body
      style="max-width: 20rem"
      img-src="https://placekitten.com/380/200"
      img-alt="Image"
      img-top
    >
      <template #header>
        <h4 class="mb-0">Hello World</h4>
      </template>

      <b-card-body>
        <b-card-title>Card Title</b-card-title>
        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>

      <b-card-body>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>

      <b-card-footer>This is a footer</b-card-footer>

      <b-card-img
        src="https://placekitten.com/480/210"
        alt="Image"
        bottom
      ></b-card-img>
    </b-card>
  </div>

  <!-- b-card-kitchen-sink.vue -->
</template>
