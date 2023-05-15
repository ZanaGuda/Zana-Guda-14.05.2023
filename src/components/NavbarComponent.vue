<template>
  <div class="header">
    <router-view></router-view>
    <router-link to="/home">Home</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/archive">Archive</router-link>
    <router-link to="/help">Help</router-link>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;
}

.header a {
  margin-right: 10px;
  padding: 5px 10px;
  text-decoration: none;
  color: #333;
}

.header a:hover {
  background-color: #ddd;
}

.header a:not(:last-child)::after {
  content: "|";
  margin-left: 10px;
  color: #888;
}
</style>
