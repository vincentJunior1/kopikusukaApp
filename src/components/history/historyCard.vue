<template>
  <div class="history-card">
    <b-container>
      <b-row class="history-page">
        <div inline class="card-history">
          <img class="img-history" src="../../assets/img/item1.png" alt="" />
          <span class="history-inf">
            <p class="history-title">Viegie Mix Potato salad</p>
            <p class="history-price">Rp.20000</p>
            <p class="history-status">Delivered</p>
          </span>
        </div>
        <div class="card-history">asdfasdf</div>
        <div class="card-history">asdfasdf</div>
        <div class="card-history">asdfasdf</div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'historyCard'
}
</script>

<style scoped>
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
