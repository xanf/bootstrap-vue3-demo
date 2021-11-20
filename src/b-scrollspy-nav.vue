<template>
  <div>
    <b-card no-body>
      <b-nav pills card-header slot="header" v-b-scrollspy:nav-scroller>
        <b-nav-item href="#fat" @click="scrollIntoView">@fat</b-nav-item>
        <b-nav-item href="#mdo" @click="scrollIntoView">@mdo</b-nav-item>
        <b-nav-item-dropdown text="Dropdown 1,2,3" right-alignment>
          <b-dropdown-item href="#one" @click="scrollIntoView"
            >one</b-dropdown-item
          >
          <b-dropdown-item href="#two" @click="scrollIntoView"
            >two</b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#three" @click="scrollIntoView"
            >three</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item href="#pi0" @click="scrollIntoView">@pi0</b-nav-item>
      </b-nav>

      <b-card-body
        id="nav-scroller"
        ref="content"
        style="position: relative; height: 300px; overflow-y: scroll"
      >
        <p>{{ text }}</p>
        <h4 id="fat">@fat</h4>
        <p v-for="i in 3">{{ text }}</p>
        <h4 id="mdo">@mdo</h4>
        <p v-for="i in 3">{{ text }}</p>
        <h4 id="one">one</h4>
        <p v-for="i in 2">{{ text }}</p>
        <h4 id="two">two</h4>
        <p>{{ text }}</p>
        <h4 id="three">three</h4>
        <p v-for="i in 2">{{ text }}</p>
        <h4 id="pi0">@pi0</h4>
        <p v-for="i in 3">{{ text }}</p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  methods: {
    // Convenience method to scroll a heading into view.
    // Not required for scrollspy to work
    scrollIntoView(event) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
  },
  data() {
    return {
      text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `,
    };
  },
};
</script>

<!-- b-scrollspy-nav.vue -->
