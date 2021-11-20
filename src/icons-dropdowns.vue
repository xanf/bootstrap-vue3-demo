<template>
  <div>
    <b-dropdown variant="primary">
      <template #button-content>
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
      </template>
      <b-dropdown-item-button>
        <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
        Locked <span class="sr-only">(Click to unlock)</span>
      </b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-group header="Choose options" class="small">
        <b-dropdown-item-button>
          <b-icon icon="blank" aria-hidden="true"></b-icon>
          Option A <span class="sr-only">(Not selected)</span>
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="check" aria-hidden="true"></b-icon>
          Option B <span class="sr-only">(Selected)</span>
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="blank" aria-hidden="true"></b-icon>
          Option C <span class="sr-only">(Not selected)</span>
        </b-dropdown-item-button>
      </b-dropdown-group>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>Some action</b-dropdown-item-button>
      <b-dropdown-item-button>Some other action</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button variant="danger">
        <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        Delete
      </b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>

<!-- icons-dropdowns.vue -->
