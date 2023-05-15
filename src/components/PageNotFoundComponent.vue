<template>
  <div class="page-not-found">
    <h1>Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
  </div>
</template>

<script>
export default {
  name: "PageNotFoundComponent",
};
</script>

<style scoped>
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
}

h1 {
  font-size: 2.5rem;
  color: red;
}

p {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #555;
}
</style>
