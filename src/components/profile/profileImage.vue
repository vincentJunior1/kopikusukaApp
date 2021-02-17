<template>
  <div class="profile-image">
    <b-alert class="notif" v-model="editAlert" variant="success" dismissible>
      Sucess Edit Profile
    </b-alert>
    <div class="image">
      <img
        class="image-profile"
        :src="
          user.user_image == null
            ? require('../../assets/img/profile-pic.png')
            : path + '/' + user.user_image
        "
        alt=""
      />
      <p class="fullname">{{ user.user_firstname }} {{ user.user_lastname }}</p>
      <p class="email">{{ user.user_email }}</p>
      <input type="file" @change="changeImage" id="fileUpload" hidden />
      <button class="image-user" @click="chooseFile">{{ photo }}</button>
      <button class="edit-password">Edit Password</button>
      <p class="desc-change">Do You Want To Save The Changes</p>
      <button class="save-change" @click="saveProfile">Save Changes</button>
      <button class="cancel-change">Cancel</button>
      <button class="edit-password">Log out</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import dotenv from 'dotenv'
dotenv.config()
export default {
  name: 'profileImage',
  data() {
    return {
      photo: 'Choose Photo',
      image: '',
      editAlert: false,
      path: process.env.VUE_APP_ROOT_URL
    }
  },
  computed: {
    ...mapGetters({ user: 'setUser' })
  },
  methods: {
    ...mapActions(['editProfiles']),
    changeImage(event) {
      this.image = event.target.files[0]
      this.photo = this.image.name
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    },
    saveProfile() {
      let newUser = { ...this.user, ...{ user_image: this.image } }
      const {
        user_id,
        user_name,
        user_email,
        user_address,
        user_firstname,
        user_lastname,
        user_birthday,
        user_image,
        user_gender,
        user_role,
        user_phone,
        user_status
      } = newUser
      const data = new FormData()
      data.append('user_id', user_id)
      data.append('user_name', user_name)
      data.append('user_email', user_email)
      data.append('user_address', user_address)
      data.append('user_firstname', user_firstname)
      data.append('user_lastname', user_lastname)
      data.append('user_birthday', user_birthday)
      data.append('user_image', user_image)
      data.append('user_gender', user_gender)
      data.append('user_role', user_role)
      data.append('user_phone', user_phone)
      data.append('user_status', user_status)
      this.editProfiles(data)
        .then(() => {
          this.editAlert = true
          setTimeout(() => {
            this.$router.push('/')
          }, 3000)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.notif {
  position: fixed;
  top: 100px;
  right: 100px;
}
.fullname {
  margin-top: 25px;
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;
}
.email {
  margin-top: -10px;
}
.image {
  text-align: center;
}
.image-profile {
  border-radius: 100px;
  width: 160px;
  height: 160px;
}
.image-user {
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #ffba33;
  color: #6a4029;
  font-weight: 700;
}
.edit-password {
  margin-top: 50px;
  width: 70%;
  height: 50px;
  border: 1px solid grey;
  border-radius: 30px;
  background-color: white;
  font-weight: 700;
}
.desc-change {
  margin-top: 40px;
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  font-size: 26px;
}
.save-change {
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #6a4029;
  font-weight: 700;
}
.cancel-change {
  margin-top: 20px;
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #ffba33;
  color: #6a4029;
  font-weight: 700;
}
</style>
