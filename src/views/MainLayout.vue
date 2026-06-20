<script setup lang="ts">

import SideNavBar from "@/components/SideNavBar.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="main-container">
    <div class="navigation-container">
      <SideNavBar/>
    </div>
    <div class="right-container">
      <div class="header-container">
        <Header/>
      </div>
      <div class="content-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
}

.navigation-container {

}

.header-container {
  height: 70px;

}

.right-container {
  flex: 1;
  display: flex;
  flex-direction: column;

}

.content {
  flex: 1;
}

</style>