<template>
  <div class="confirmation-email">
    <p class="text-confirmation">Please Wait</p>
    <div class="d-flex justify-content-center mb-3">
      <b-spinner label="Loading..."></b-spinner>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { alert } from '../mixins/alert'
export default {
  name: 'ConfirmationEmail',
  mxins: [alert],
  created() {
    this.confirmationEmail(this.$route.params.id)
      .then(() => {
        this.successAlert('Sucess Verify Your Email')
        this.$router.push('/login')
      })
      .catch(() => {
        this.successAlert('Sucess Verify Your Email')
        this.$router.push('/login')
      })
  },
  methods: {
    ...mapActions(['confirmationEmail'])
  }
}
</script>
<style scoped>
.text-confirmation {
  text-align: center;
  margin-top: 15%;
  font-family: Rubik;
  font-weight: 500;
  font-size: 22px;
}
</style>
