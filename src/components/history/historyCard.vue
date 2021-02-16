<template>
  <div class="history-card">
    <b-container>
      <b-row class="history-page">
        <div
          inline
          class="card-history"
          v-for="(item, index) in history"
          :key="index"
        >
          <img class="img-history" src="../../assets/img/item1.png" alt="" />
          <span class="history-inf">
            <p class="history-title">{{ item.product_name }}</p>
            <p class="history-price">Rp.{{ item.history_detail_price }}</p>
            <p class="history-status">Delivered</p>
          </span>
          <b-button
            class="delete-history"
            @click="deleteHistoryCard(item.history_detail_id)"
            >X</b-button
          >
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'historyCard',
  created() {
    this.getAllHistory()
  },
  computed: {
    ...mapGetters({ history: 'getDataDetailHistory' })
  },
  methods: {
    ...mapActions(['getAllHistory', 'deleteHistory']),
    deleteHistoryCard(id) {
      this.deleteHistory(id)
      this.getAllHistory()
    }
  }
}
</script>

<style scoped>
.delete-history {
  position: absolute;
  bottom: 0px;
  right: 0px;
  text-align: center;
  background-color: red;
  border: none;
  font-weight: 700;
  border-radius: 40px;
}
.history-page {
  align-items: center;
}
.card-history {
  position: relative;
  width: 250px;
  height: 100px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  background-color: white;
}
.img-history {
  width: 76px;
  height: 60px;
  margin-top: 7%;
  margin-bottom: auto;
  margin-left: 10px;
}
.history-inf {
  position: absolute;
  top: 10px;
  line-height: 5px;
  margin-left: 20px;
}
.history-title {
  line-height: 15px;
  font-family: Rubik;
  font-size: 16px;
  font-weight: 700;
}
.history-price {
  font-size: 16px;
  margin-top: -5px;
  color: #895537;
}
.history-status {
  font-size: 14px;
  font-family: Rubik;
  font-weight: 500;
  color: #895537;
}
</style>
