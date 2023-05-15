<template>
  <div class="navbar">
    <div class="logo-container">
      <img
        src="../assets/student_management_information_logo.png"
        alt="Logo"
        class="logo"
      />
      <span class="logo-text">Student Information System</span>
    </div>
    <div class="logout-container">
      <router-link to="/login" class="logout-button">Logout</router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #888;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 32px;
  margin-right: 10px;
  transform: rotate(90deg);
  border-radius: 10px;
  border: 2px solid black;
  width: 55px;
}

.logo-text {
  font-weight: bold;
}

.logout-container {
  display: flex;
  align-items: center;
}

.logout-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #e6e6e6;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
}

.logout-button:hover {
  background-color: #d4d4d4;
}
</style>
