<template>
  <div class="card-income">
    <p class="title">Today Income</p>
    <p class="income">
      Rp.
      {{
        dashboard.invoicePerday[0].invoice_perweek
          .toString()
          .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1\.')
      }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TodayIncome',
  computed: {
    ...mapGetters({ dashboard: 'getDataDashboard' })
  },
  created() {
    console.log(this.dashboard)
  }
}
</script>

<style scoped>
.card-income {
  height: 120px;
  border-radius: 20px;
  padding-left: 20px;
  padding-top: 10px;
  background-color: #6a4029;
  color: white;
  box-shadow: 2px 3px 5px black;
}
.title {
  font-size: 24px;
  font-weight: 700;
}
.income {
  font-size: 20px;
  margin-top: -10px;
}
@media only screen and (max-width: 600px) {
  .card-income {
    text-align: center;
    padding-left: 0px;
    margin-bottom: 20px;
  }
}
</style>
