<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import NavbarComponent from "./NavbarComponent.vue";

export default {
  name: "ArchiveComponent",
  components: { HeaderComponent, NavbarComponent },
};
</script>

<style scoped></style>
