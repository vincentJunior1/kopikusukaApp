<template>
  <div class="profile">
    <Navbar />
    <div class="profile-page" style="">
      <p class="user-profile">User Profile</p>
      <b-container class="bv-example-row container-page">
        <b-row>
          <b-col sm="4"><ProfileImage /></b-col>
          <b-col sm="8"><ProfileDetail /></b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import ProfileDetail from '../components/profile/profileDetail'
import ProfileImage from '../components/profile/profileImage'
export default {
  name: 'Profile',
  components: {
    Navbar,
    Footer,
    ProfileDetail,
    ProfileImage
  }
}
</script>

<style lang="css" scoped>
.profile-page {
  background-image: url('../assets/img/user-jumbotron.png');
  font-family: Rubik;
  padding-top: 80px;
  height: 1200px;
}
.container-page {
  background-color: white;
  border: 1px solid black;
  height: 1000px;
  border-radius: 20px;
  padding-top: 40px;
  padding-right: 30px;
}
.user-profile {
  margin-left: 110px;
  font-size: 36px;
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 4px black;
}
</style>
