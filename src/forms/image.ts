import Node from "../core/node";

export default {
  title: "图片组件",

  schema: {
    nodeType: Node.NodeType.native,
    formDesc: {
      src: {
        type: "input",
        label: "图片链接",
        required: true
      }
    },
    rules: {}
  }
};
