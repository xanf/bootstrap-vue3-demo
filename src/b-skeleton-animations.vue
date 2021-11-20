<template>
  <div>
    <h5>Wave (default)</h5>
    <b-card>
      <b-skeleton animation="wave" width="85%"></b-skeleton>
      <b-skeleton animation="wave" width="55%"></b-skeleton>
      <b-skeleton animation="wave" width="70%"></b-skeleton>
    </b-card>

    <h5 class="mt-3">Fade</h5>
    <b-card>
      <b-skeleton animation="fade" width="85%"></b-skeleton>
      <b-skeleton animation="fade" width="55%"></b-skeleton>
      <b-skeleton animation="fade" width="70%"></b-skeleton>
    </b-card>

    <h5 class="mt-3">Throb</h5>
    <b-card>
      <b-skeleton animation="throb" width="85%"></b-skeleton>
      <b-skeleton animation="throb" width="55%"></b-skeleton>
      <b-skeleton animation="throb" width="70%"></b-skeleton>
    </b-card>

    <h5 class="mt-3">None</h5>
    <b-card>
      <b-skeleton animation width="85%"></b-skeleton>
      <b-skeleton animation width="55%"></b-skeleton>
      <b-skeleton animation width="70%"></b-skeleton>
    </b-card>

    <!-- b-skeleton-animations.vue -->
  </div>
</template>
