import Vue from "vue";
import Vuex from "vuex";
import Node from "../core/node";
import { ADD_NODE, DELETE_NODE } from "../constant";
import Operation from "@/core/operation";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    node: new Node(Node.NodeType.root, {}, [])
  },
  mutations: {
    [ADD_NODE](state, operation: Operation) {
      state.node.appendChild(operation.payload);
    }
    // [DELETE_NODE](state, payload) {

    // },
  },
  actions: {},
  modules: {}
});
