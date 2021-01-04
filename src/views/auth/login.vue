<template>
  <div class="login-page">
    <b-container class="bv-example-row">
      <b-row>
        <b-col><LoginBackground /></b-col>
        <b-col><LoginForm /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginForm from '../../components/login/loginForm'
import LoginBackground from '../../components/login/loginBackground'
export default {
  name: 'Login',
  components: {
    LoginForm,
    LoginBackground
  }
}
</script>

<style scoped></style>
