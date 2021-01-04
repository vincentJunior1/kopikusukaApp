<template>
  <div class="login-detail">
    <div class="nav-login">
      <span inline class="logo-login">
        <img src="../../assets/img/coffee 1.png" alt="" />
        <p class="title-login">KopiKuSuka</p>
      </span>
      <b-button to="/login" class="sign-up">Login</b-button>
    </div>
    <div class="login-form">
      <h2 class="login-type">Sign Up</h2>
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
        <input
          type="text"
          class="phone-form"
          v-model="form.user_phone"
          placeholder="Input Your Phone Number ..."
        />
        <br />
        <div class="btn-class">
          <button class="login-button" type="submit">Sign Up</button>
        </div>
        <div class="btn-class">
          <button class="google-button">Login With Google</button>
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
        user_password: '',
        user_phone: '',
        user_name: 'User',
        user_firstname: 'User',
        user_lastname: 'User',
        user_address: 'Location',
        user_gender: 1,
        user_birthday: new Date(),
        user_role: 0,
        user_status: 1
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      this.register(this.form)
        .then(result => {
          console.log(result)
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err.data)
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
.login-detail {
  background-color: white;
}
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
  height: 490px;
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
.phone-form {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
