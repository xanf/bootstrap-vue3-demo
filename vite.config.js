import { createVuePlugin } from 'vite-plugin-vue2';
import vue from '@vitejs/plugin-vue';

const isVue3 = !('USE_VUE2' in process.env);

export default {
  build: {
    outDir: `dist/vue${isVue3 ? '3' : '2'}`,
  },
  resolve: {
    alias: isVue3
      ? {
          vue: '@vue/compat',
        }
      : {},
  },
  plugins: [
    isVue3
      ? vue({
          template: {
            compilerOptions: {
              compatConfig: {
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
              },
            },
          },
        })
      : createVuePlugin({
          vueTemplateOptions: {
            compilerOptions: {
              whitespace: 'preserve',
            },
          },
        }),
  ],
};
