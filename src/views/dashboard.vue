<template>
  <div class="dashboard">
    <Navbar />
    <div class="dashboard-page">
      <b-container class="bv-example-row" style="padding-top:20px;">
        <b-row class="d-flex justify-content-between">
          <b-col sm="3" mr="auto"><TodayIncome /></b-col>
          <b-col sm="3" mr="auto"><TodayOrders /></b-col>
          <b-col sm="3" mr="auto"><YearIncome /></b-col>
          <b-col sm="12" style="margin-top:40px;"
            ><canvas id="planet-chart"></canvas
          ></b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import TodayIncome from '../components/dashboard/TodayIncome'
import TodayOrders from '../components/dashboard/TodayOrders'
import YearIncome from '../components/dashboard/YearIncome'
import ChartIncome from '../components/dashboard/ChartIncome.js'
import moment from 'moment'
import Chart from 'chart.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'dashboard',
  components: {
    Navbar,
    Footer,
    TodayIncome,
    TodayOrders,
    YearIncome
  },
  created() {
    this.getDashboard().then(() => {
      this.createChart('planet-chart', this.charts)
    })
  },
  data() {
    return {
      charts: ChartIncome,
      show: false
    }
  },
  mounted() {},
  computed: {
    ...mapGetters({ dashboard: 'getDataDashboard' })
  },
  methods: {
    ...mapActions(['getDashboard']),
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId)
      new Chart(ctx, {
        type: chartData.type,
        data: {
          labels: this.dashboard.intervalInvoice.map(x =>
            moment(x.history_created_at).format('DD-MM-YYYY')
          ),
          datasets: [
            {
              label: 'Invoice Peryear',
              data: this.dashboard.intervalInvoice.map(x => x.invoice_interval),
              backgroundColor: [
                'rgba(255,255,255, 0.5)' // Green
              ],
              borderColor: ['#6a4029'],
              borderWidth: 3
            }
          ]
        },
        options: chartData.options
      })
    }
  }
}
</script>

<style scoped>
.dashboard {
  font-family: Rubik;
}
@media only screen and (max-width: 600px) {
  .d-flex {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
