<template>
  <div class="register">
    <b-container>
      <b-row>
        <b-col> <LoginBackground /></b-col>
        <b-col> <RegisterForm /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RegisterForm from '../../components/register/registerForm'
import LoginBackground from '../../components/login/loginBackground'
export default {
  name: 'register',
  components: {
    LoginBackground,
    RegisterForm
  }
}
</script>

<style scoped></style>
