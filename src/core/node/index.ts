const enum NodeType {
  root = "root",
  native = "native",
  component = "component"
}

/**
 * @description 节点构造类
 * @param {*} nodeType
 * @param {*} props
 */
export default class NvwaNode {
  type: NodeType;
  props: any;
  children: any[];
  static NodeType: { root: NodeType; native: NodeType; component: NodeType };

  constructor(type: NodeType, props: any, children = []) {
    this.type = type;
    this.props = props;
    this.children = children;
  }

  appendChild(node: NvwaNode) {
    this.children.push(node);
  }
}

NvwaNode.NodeType = {
  root: NodeType.root,
  native: NodeType.native,
  component: NodeType.component
};
