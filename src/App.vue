<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
import LoginLayout from './layout/LoginLayout.vue'
import MainLayout from "./layout/MainLayout.vue"
import UserLayout from './layout/UserLayout.vue'
export default {
  components:{
    LoginLayout,
    MainLayout,
    UserLayout,
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || "login") + '-layout'
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
