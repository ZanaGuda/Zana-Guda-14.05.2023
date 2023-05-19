<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    <div class="help-component">
      <h2 class="help-component__title">Welcome to the Help Component</h2>
      <p class="help-component__description">
        Need assistance with our product or service? We're here to help! Our
        support team is available 24/7 to provide you with the best possible
        assistance. Whether you have questions, encounter issues, or need
        guidance, we'll ensure a prompt and helpful response.
      </p>
      <div class="help-component__contact">
        <h3 class="help-component__contact-title">Contact Us</h3>
        <ul class="help-component__contact-list">
          <li>Email: support@hotelkey.com</li>
          <li>Phone: 1-800-123-4567</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import NavbarComponent from "./NavbarComponent.vue";

export default {
  name: "HelpComponent",
  components: { HeaderComponent, NavbarComponent },
};
</script>

<style scoped>
.navbar {
  margin-top: 10px;
}
.help-component {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  font-family: "Montserrat";
  margin-bottom: 30px;
}

.help-component__title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.help-component__description {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.help-component__contact-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.help-component__contact-list {
  list-style-type: disc;
  margin-left: 20px;
}

.help-component__contact-list li {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
