import Operation from "../operation";
import store from "../../store";
import { ADD_NODE } from "../../constant/index";

export default class Transation {
  stack: Operation[];

  constructor() {
    this.stack = [];
    this.init();
  }

  pop(operation: Operation) {
    this.stack.unshift(operation);
  }

  flushStack() {
    const operations = this.stack;

    const len = operations.length - 1;
    let i = len;

    while (i >= 0) {
      const operation = operations[i];

      if (operation.actionType === Operation.ActionType.add) {
        store.commit(ADD_NODE, operation);
      }

      i--;
    }

    this.stack = [];
  }

  init() {
    setInterval(() => {
      if (this.stack.length) {
        console.log("flush", this.stack);

        this.flushStack();
      }
    }, 500);
  }
}
