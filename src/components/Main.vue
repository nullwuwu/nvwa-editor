<template>
  <el-container>
    <el-aside width="300px"
      ><el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>

      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu
          v-for="category in formsList"
          :key="category.type"
          :index="category.type"
        >
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span slot="title">{{ category.localName }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(component, i) in category.componentList"
              @click="openComponentEditor(component)"
              :index="`${category.type}-${i}`"
              :key="i"
              >{{ component.title }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <Viewer />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import formsList from "../forms/index";
import Viewer from "./Viewer.vue";

@Component({
  components: {
    Viewer
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  isCollapse = false;
  formsList = formsList;

  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }

  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }

  openComponentEditor(component) {
    this.$openForm(component);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 500px;
}
</style>
