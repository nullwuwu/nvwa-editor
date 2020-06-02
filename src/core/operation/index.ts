/**
 * @description 编辑操作类
 * @param {OperationActionType} actionType 操作类型
 * @param {Node} target 目标
 * @param {Node} payload 数据
 */
const enum ActionType {
  add = "add",
  delete = "delete",
  mutation = "mutation"
}

export default class Operation {
  static ActionType: {
    add: ActionType;
    delete: ActionType;
    mutation: ActionType;
  };
  actionType: ActionType;
  target: any;
  payload: any;

  constructor(actionType: ActionType, payload: any, target = null) {
    this.actionType = actionType;
    this.target = target;
    this.payload = payload;
  }
}

Operation.ActionType = {
  add: ActionType.add,
  delete: ActionType.delete,
  mutation: ActionType.mutation
};
