
<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { init } from './core'

init()

</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  .view {
      width: 100%;
      height: 100%;
  }
}
</style>
