<template>
  <el-container>{{ node }}</el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Viewer extends Vue {
  @State("node") node: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
