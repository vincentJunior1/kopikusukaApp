<template>
  <div class="profile-detail">
    <div class="">
      <div class="row detail">
        <h3 class="col-sm-12 contact">Contacts</h3>
        <div class="mb-3 col-sm-6">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control col-sm-12"
            v-model="form.user_email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 col-sm-4">
          <label for="exampleInputEmail1" class="form-label">Password</label>
          <input type="password" class="form-control" />
        </div>
        <div class="delivery mb-3 col-sm-12">
          <label for="exampleInputEmail1" class="form-label">Delivery</label>
          <input
            type="text"
            v-model="form.user_address"
            class="form-control col-sm-6"
          />
        </div>
        <h3 class="col-sm-12 details">Details</h3>
        <div class="mb-3 col-sm-6">
          <label for="exampleInputEmail1" class="form-label"
            >Display Name</label
          >
          <input type="text" v-model="form.user_name" class="form-control" />
        </div>
        <div class="mb-3 col-sm-4">
          <label for="exampleInputEmail1" class="form-label">Birthday</label>
          <input
            type="date"
            v-model="form.user_birthday"
            class="form-control"
          />
        </div>
        <div class="mb-3 col-sm-12 firstname">
          <label for="exampleInputEmail1" class="form-label">First Name</label>
          <input
            type="text"
            v-model="form.user_firstname"
            class="form-control col-sm-6"
          />
        </div>
        <div class="mb-3 col-sm-12 lastname">
          <label for="exampleInputEmail1" class="form-label">Last Name</label>
          <input
            type="text"
            v-model="form.user_lastname"
            class="form-control col-sm-6"
          />
        </div>
        <div class="mb-3 col-sm-6 lastname">
          <label class="container"
            >Male
            <input
              class="radio"
              type="radio"
              v-bind="form.user_gender === 1"
              v-model="form.user_gender"
              value="1"
              checked="checked"
              name="radio"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="mb-3 col-sm-4 lastname">
          <label class="container"
            >Female
            <input
              class="radio"
              type="radio"
              v-bind="form.user_gender === 0"
              v-model="form.user_gender"
              value="0"
              checked="checked"
              name="radio"
            />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'profileEdit',
  data() {
    return {
      form: {}
    }
  },
  computed: {
    ...mapGetters({ user: 'setUser' })
  },
  created() {
    this.form = this.user
    console.log(this.user)
  }
}
</script>
<style scoped>
input {
  border: none;
  border-bottom: 1px solid rgb(204, 204, 204);
  box-shadow: none;
}
input:focus {
  outline: none;
  box-shadow: none;
}
.profile-detail {
  margin-top: 40px;
  padding-left: 20px;
  padding-top: 40px;
  height: 850px;
  border-radius: 20px;
  border-bottom: 4px solid #6a4029;
  box-shadow: 2px 2px 2px 2px black;
}
.detail {
  padding-right: 10px;
}
.delivery {
  margin-top: 40px;
}
.details {
  margin-bottom: 20px;
  color: #4f5665;
  margin-top: 50px;
}
.contact {
  margin-bottom: 20px;
  color: #4f5665;
}
.firstname {
  margin-top: 30px;
}
.mb-3 {
  font-size: 18px;
  font-weight: 700;
  color: #4f5665;
}
.lastname {
  margin-top: 30px;
}
/* custom checkbox */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container .radio {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover .radio ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container .radio:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container .radio:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
