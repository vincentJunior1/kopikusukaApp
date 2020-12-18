<template>
  <div class="product">
    <b-container class="bv-example-row">
      <b-row class="product-page">
        <b-col class="cupon-info" sm="4">
          <Cupon v-bind:dataCupon="cupon"></Cupon>
        </b-col>
        <b-col sm="8">
          <b-row sm="12" style="display:inline" class="text-center">
            <ProductCard v-bind:dataProduct="product" />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Cupon from '../components/_base/Cupon'
import ProductCard from '../components/_base/productCard'
import axios from 'axios'
export default {
  name: 'Product',
  components: {
    Cupon,
    ProductCard
  },
  data() {
    return {
      cupon: [
        {
          cupon_name: 'Selamat Hari Ibu aslkdfjlksdjflksdjafkjsd',
          cupon_desc: 'kode promo hanya berlaku dengan minimal pembelian 20000'
        },
        {
          cupon_name: 'Selamat Hari Natal',
          cupon_desc: 'kode promo hanya berlaku dengan minimal pembelian 20000'
        },
        {
          cupon_name: 'Selamat Hari Ibu aslkdfjlksdjflksdjafkjsd',
          cupon_desc: 'kode promo hanya berlaku dengan minimal pembelian 20000'
        },
        {
          cupon_name: 'Selamat Hari Natal',
          cupon_desc: 'kode promo hanya berlaku dengan minimal pembelian 20000'
        }
      ],
      product: []
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      axios
        .get('http://localhost:3000/product/?page=1&limit=10')
        .then(res => {
          this.product = res.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
