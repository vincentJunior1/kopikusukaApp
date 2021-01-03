<template>
  <div class="login-detail">
    <div class="nav-login">
      <span inline class="logo-login">
        <img src="../../assets/img/coffee 1.png" alt="" />
        <p class="title-login">KopiKuSuka</p>
      </span>
      <b-button class="sign-up">Sign Up</b-button>
    </div>
    <div class="login-form">
      <h2 class="login-type">login</h2>
      <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <input
          type="email"
          class="email-form"
          v-model="form.user_email"
          placeholder="Input Your Email ..."
        /><br />
        <input
          type="password"
          class="pass-form"
          v-model="form.user_password"
          placeholder="Input Your Password ..."
        />
        <br />
        <p class="forget-pass">Forget password?</p>
        <div class="btn-class">
          <button class="login-button" type="submit">Login</button>
        </div>
        <div class="btn-class">
          <button class="google-button" type="reset">Login With Google</button>
        </div>
      </b-form>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Footer from '../_base/Footer'
export default {
  name: 'loginForm',
  components: {
    Footer
  },
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          console.log(result)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          alert(err.data.message)
        })
    },
    onReset() {
      this.form = {
        user_email: '',
        user_password: ''
      }
    }
  }
}
</script>

<style scoped>
.nav-login {
  margin-top: 20px;
  margin-bottom: 30px;
}
.logo-login {
  width: 30px;
  height: 33px;
}
.title-login {
  position: absolute;
  top: 22px;
  left: 50px;
  font-size: 20px;
  font-family: Rubik;
}
.sign-up {
  position: absolute;
  right: 0px;
  top: 10px;
  color: #6a4029 !important;
  font-size: 24px;
  font-weight: 700;
  font-family: Rubik;
  background-color: white !important;
  border: none;
}
.sign-up:focus {
  box-shadow: none !important ;
}
.login-form {
  padding-top: 10%;
  height: 440px;
  text-align: center;
}
.login-type {
  font-size: 30px;
  color: #6a4029;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 40px;
}
input {
  width: 350px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid grey;
  padding-left: 30px;
}
.email-form {
  margin-bottom: 30px;
}
.pass-form {
  margin-bottom: 10px;
}
.forget-pass {
  position: absolute;
  left: 110px;
  font-size: 14px;
  color: #6a4029;
  font-family: Rubik;
  font-weight: 700;
  cursor: pointer;
}
.login-button {
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  width: 350px;
  height: 40px;
  background-color: #ffba33;
  color: #6a4029;
  font-family: Rubik;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 2px 0px 4px 1px black;
}
.login-button:focus {
  outline: none;
}
.google-button {
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  width: 350px;
  height: 40px;
  background-color: white;
  box-shadow: 2px 0px 4px 1px black;
}
.google-button:focus {
  outline: none;
}
</style>
