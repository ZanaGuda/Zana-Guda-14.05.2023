<template>
  <div class="navbar">
    <router-link to="/home">Home</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/archive">Archive</router-link>
    <router-link to="/help">Help</router-link>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;
  font-family: "Montserrat";
}

.navbar a {
  margin-right: 10px;
  padding: 5px 10px;
  text-decoration: none;
  color: #333;
}

.navbar a:hover {
  background-color: #ddd;
}

.navbar a:not(:last-child)::after {
  content: "|";
  margin-left: 10px;
  color: #888;
}
</style>
