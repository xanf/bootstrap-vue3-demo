<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab no-body title="Picture 1">
          <b-card-img
            bottom
            src="https://picsum.photos/600/200/?image=21"
            alt="Image 21"
          ></b-card-img>
          <b-card-footer>Picture 1 footer</b-card-footer>
        </b-tab>

        <b-tab no-body title="Picture 2">
          <b-card-img
            bottom
            src="https://picsum.photos/600/200/?image=25"
            alt="Image 25"
          ></b-card-img>
          <b-card-footer>Picture 2 footer</b-card-footer>
        </b-tab>

        <b-tab no-body title="Picture 3">
          <b-card-img
            bottom
            src="https://picsum.photos/600/200/?image=26"
            alt="Image 26"
          ></b-card-img>
          <b-card-footer>Picture 3 footer</b-card-footer>
        </b-tab>

        <b-tab title="Text">
          <b-card-title
            >This tab does not have the <code>no-body</code> prop
            set</b-card-title
          >
          <b-card-text>
            Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
            nulla tempor. Laborum consequat non elit enim exercitation cillum
            aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est
            in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit
            elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit
            aliqua esse irure.
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>

  <!-- b-tabs-card-no-body.vue -->
</template>
