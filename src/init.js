import Vue from 'vue';
import 'bootstrap/scss/bootstrap.scss';
import './styles.scss';

if (Vue.version.startsWith('3')) {
  Vue.configureCompat({
    MODE: 3,
    // required by Vue-router
    CONFIG_OPTION_MERGE_STRATS: 'suppress-warning',
    GLOBAL_PRIVATE_UTIL: 'suppress-warning',
    GLOBAL_PROTOTYPE: 'suppress-warning',

    // required due to global mixin on vue-router
    INSTANCE_EVENT_HOOKS: 'suppress-warning',
    OPTIONS_DESTROYED: 'suppress-warning',
    INSTANCE_EVENT_EMITTER: 'suppress-warning',

    // required by portal-vue
    GLOBAL_SET: 'suppress-warning',

    // globals
    GLOBAL_EXTEND: 'suppress-warning',
    GLOBAL_MOUNT: 'suppress-warning',

    // functional does not work how you think ;)
    COMPONENT_FUNCTIONAL: 'suppress-warning',
    RENDER_FUNCTION: 'suppress-warning',

    CUSTOM_DIR: 'suppress-warning',
  });

  // See https://github.com/vuejs/vue-next/pull/4121 for details
  const originalVModelDynamicCreated = Vue.vModelDynamic.created;
  const originalVModelDynamicBeforeUpdate = Vue.vModelDynamic.beforeUpdate;
  Vue.vModelDynamic.created = function (el, binding, vnode) {
    originalVModelDynamicCreated.call(this, el, binding, vnode);
    if (!el._assign) {
      el._assign = () => {};
    }
  };
  Vue.vModelDynamic.beforeUpdate = function (el, binding, vnode) {
    originalVModelDynamicBeforeUpdate.call(this, el, binding, vnode);
    if (!el._assign) {
      el._assign = () => {};
    }
  };
}

// postponing imports after compat config was set
async function run() {
  const { default: BootstrapVue, BootstrapVueIcons } = await import(
    'bootstrap-vue/src'
  );
  const { default: Root } = await import('./root.vue');
  const PortalVue = await import('portal-vue');
  PortalVue.Portal.options.compatConfig = {
    MODE: 2,
    RENDER_FUNCTION: 'suppress-warning',
    INSTANCE_SCOPED_SLOTS: 'suppress-warning',
    OPTIONS_BEFORE_DESTROY: 'suppress-warning',
  };
  PortalVue.PortalTarget.options.compatConfig = {
    MODE: 2,
    RENDER_FUNCTION: 'suppress-warning',
    WATCH_ARRAY: 'suppress-warning',
    OPTIONS_BEFORE_DESTROY: 'suppress-warning',
    INSTANCE_SCOPED_SLOTS: 'suppress-warning',
  };
  PortalVue.Wormhole.$.type.compatConfig = {
    MODE: 3,
    INSTANCE_SET: 'suppress-warning',
    INSTANCE_DELETE: 'suppress-warning',
  };

  Vue.use(BootstrapVue);
  Vue.use(BootstrapVueIcons);

  const app = new Vue({
    el: '#app',
    render: (h) => h(Root),
  });
}

run();
