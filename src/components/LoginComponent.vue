<template>
  <div>
    <img src="../assets/logo.png" alt="" class="logo" />
    <div class="login-container">
      <div class="login-container__student-information-system">
        <img
          src="../assets/student_management_information_logo.png"
          class="student-information-system__logo"
        />
        <p class="student-information-system__title">
          Student Information System
        </p>
      </div>
      <el-form
        ref="loginForm"
        :model="form"
        :rules="rules"
        label-width="98px"
        class="login-form"
      >
        <el-form-item
          label="Username"
          prop="username"
          required
          class="el-form__label"
        >
          <el-input
            v-model="form.username"
            placeholder="Enter your username"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Password"
          prop="password"
          required
          class="el-form__label"
        >
          <el-input
            type="password"
            v-model="form.password"
            placeholder="Enter your password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled="!isFormValid" @click="login">
            <img src="../assets/login-icon.png" class="login-icon" />
            Login</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please enter your username",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Password should be at least 6 characters long",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    isFormValid() {
      const isUsernameValid = this.form.username.trim() !== "";
      const isPasswordValid =
        this.form.password.trim().length >= 6 &&
        (!this.$refs.loginForm || this.$refs.loginForm.validate());

      return isUsernameValid && isPasswordValid;
    },
  },
  methods: {
    login() {
      if (this.isFormValid) {
        this.redirectToHome();
      }
    },
    redirectToHome() {
      router.push("/home");
    },
  },
};
</script>

<style scoped>
.logo {
  width: 320px;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  flex-direction: column;
}

.login-form {
  max-width: 300px;
}

.student-information-system__logo {
  transform: rotate(90deg);
  border-radius: 10px;
  border: 2px solid black;
  width: 55px;
}
.login-container__student-information-system {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.el-button.el-button--primary.is-disabled {
  width: 200px;
  background: #e6e6e6;
  border: 1px solid black;
  height: 39px;
}
.el-button.el-button--primary.is-disabled span {
  color: black;
}

.el-form.login-form {
  margin-top: 50px;
}
.el-form-item__label {
  width: 98px;
  font-size: 17px;
  font-family: "Montserrat";
  font-weight: 700;
}
.student-information-system__title {
  font-family: "Montserrat";
}
.login-icon {
  width: 15px;
}
.el-button {
  width: 200px;
  background: #e6e6e6;
  border: 1px solid black;
  height: 39px;
  color: black;
}
.el-button--primary:hover {
  color: black;
  background: #e6e6e6;
  border: none;
}
.el-form__label {
  font-size: 16px;
  font-family: "Montserrat";
}
.label.el-form-item__label:before {
  display: none;
}
</style>
