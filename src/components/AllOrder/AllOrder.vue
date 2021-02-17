<template>
  <div class="all-order">
    <p class="title-order">Order Today</p>
    <div class="order-scroll">
      <div class="card-order" v-for="(item, index) in orders" :key="index">
        <p>Invoice:{{ item.history_invoice }}</p>
        <p>Name:{{ item.user_name }}</p>
        <b-button
          class="more-detail"
          @click="
            showDetail(item.history_id)
            $bvModal.show('bv-modal-example')
          "
          >Detail Order</b-button
        >
        <b-button class="mark-done" @click="orderDone(item.history_id)"
          >Mark As Done</b-button
        >
      </div>
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title>Order Detail:</template>
        <div class="d-block text-center">
          <div
            class="detail-data"
            v-for="(item, index) in detailOrder"
            :key="index"
          >
            {{ item.product_name }}
            x {{ item.history_detail_quantity }}
          </div>
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
          >Close Me</b-button
        >
      </b-modal>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  name: 'AllOrder',
  computed: {
    ...mapGetters({ orders: 'getOrders', detailOrder: 'getDetailOrder' })
  },
  mixins: [alert],
  created() {},
  methods: {
    ...mapActions(['getDetailOrder', 'markAsDone', 'getAllOrders']),
    showDetail(id) {
      this.getDetailOrder(id)
    },
    orderDone(id) {
      this.markAsDone(id)
        .then(result => {
          this.successAlert(result.data.message)
          this.getAllOrders()
        })
        .catch(() => {
          this.errorAlert('Something Wrong Try Again')
        })
    }
  }
}
</script>

<style scoped>
.all-order {
  font-family: Rubik;
  width: 50%;
  height: 700px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-left: 40px;
  border-radius: 40px;
}
.title-order {
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
  margin-right: 40px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
}
.order-scroll {
  padding-right: 40px;
  height: 500px;
  overflow-y: scroll;
}

.card-order {
  height: 150px;
  margin-bottom: 20px;
  border-bottom: 1px dotted black;
  position: relative;
}
.more-detail {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #6a4029 !important;
}
.detail-data {
  height: 40px;
  text-align: left;
}
.mark-done {
  background-color: red;
  border: none;
}
.mark-done:hover {
  background-color: red;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
@media only screen and (max-width: 600px) {
  .all-order {
    width: 100%;
  }
  .more-detail {
    width: 70px;
  }
}
</style>
