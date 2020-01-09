<template>
  <div class="container" id="app">
    <app-navbar />
    <transition name="fade" appear mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    "app-navbar": Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.2s ease-in;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.2s ease-in;
}
</style>
