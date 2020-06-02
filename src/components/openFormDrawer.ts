import FromDrawerComponent from "./FormDrawer.vue";
import Vue from "vue";

let instance: Vue | null = null;

const FromDrawerConstructor = Vue.extend(FromDrawerComponent);

const FromDrawer = function(options = {}) {
  if (Vue.prototype.$isServer) return;

  const close = () => {
    if (instance) {
      instance.$destroy();
      instance = null;
    }
  };

  options = Object.assign(
    {},
    {
      title: "组件配置",
      dialog: true,
      close
    },
    options
  );

  instance = new FromDrawerConstructor({
    data: options
  });

  instance.$mount();
  document.body.appendChild(instance.$el);
};

export default FromDrawer;
