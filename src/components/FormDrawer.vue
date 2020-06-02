<template>
  <el-drawer :title="title" :visible.sync="dialog" direction="ltr" ref="drawer">
    <div class="demo-drawer__content">
      <ele-form
        v-model="formData"
        :formDesc="schema.formDesc"
        :request-fn="handleSubmit"
        :rules="schema.rules"
        @request-success="handleSuccess"
      ></ele-form>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Operation from "../core/operation";
import Node from "../core/node";

@Component
export default class HelloWorld extends Vue {
  title!: string;
  dialog!: boolean;
  schema!: unknown;
  close!: any;

  formData: any = {};

  handleSubmit(props) {
    this.$transation.pop(
      new Operation(
        Operation.ActionType.add,
        new Node(Node.NodeType.native, { src: props.src })
      )
    );

    this.dialog = false;

    return Promise.resolve();
  }

  handleSuccess() {
    this.$message.success("创建成功");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
