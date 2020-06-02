<template>
  <div id="app">
    <Main />
    <div id="drawer_form"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Main from "./components/Main.vue";

@Component({
  components: {
    Main
  }
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
