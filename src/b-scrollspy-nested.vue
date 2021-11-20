<template>
  <b-container fluid>
    <b-row>
      <b-col cols="4">
        <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column">
          <b-navbar-brand href="#">Navbar</b-navbar-brand>
          <b-nav pills vertical>
            <b-nav-item href="#item-1">Item 1</b-nav-item>
            <b-nav pills vertical>
              <b-nav-item class="ml-3 my-1" href="#item-1-1"
                >Item 1-1</b-nav-item
              >
              <b-nav-item class="ml-3 my-1" href="#item-1-2"
                >Item 1-2</b-nav-item
              >
            </b-nav>
            <b-nav-item href="#item-2">Item 2</b-nav-item>
            <b-nav-item href="#item-3">Item 3</b-nav-item>
            <b-nav pills vertical>
              <b-nav-item class="ml-3 my-1" href="#item-3-1"
                >Item 3-1</b-nav-item
              >
              <b-nav-item class="ml-3 my-1" href="#item-3-2"
                >Item 3-2</b-nav-item
              >
            </b-nav>
          </b-nav>
        </b-navbar>
      </b-col>

      <b-col cols="8">
        <div
          id="scrollspy-nested"
          style="position: relative; height: 350px; overflow-y: auto"
        >
          <h4 id="item-1" style="">Item 1</h4>
          <p>{{ text }}</p>
          <h5 id="item-1-1" style="">Item 1-1</h5>
          <p>{{ text }}</p>
          <h5 id="item-1-2" style="">Item 2-2</h5>
          <p>{{ text }}</p>
          <h4 id="item-2" style="">Item 2</h4>
          <p>{{ text }}</p>
          <h4 id="item-3" style="">Item 3</h4>
          <p>{{ text }}</p>
          <h5 id="item-3-1" style="">Item 3-1</h5>
          <p>{{ text }}</p>
          <h5 id="item-3-2" style="">Item 3-2</h5>
          <p>{{ text }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
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

<!-- b-scrollspy-nested.vue -->
