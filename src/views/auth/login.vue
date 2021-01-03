<template>
  <div class="login-page">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col><LoginForm /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginForm from '../../components/login/loginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped></style>
