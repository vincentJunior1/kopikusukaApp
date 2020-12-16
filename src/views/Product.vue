<template>
  <div class="product">
    <b-container class="bv-example-row">
      <b-row class="product-page">
        <b-col class="cupon-info" sm="4">
          <Cupon v-bind:dataCupon="cupon"></Cupon>
        </b-col>
        <b-col sm="6">
          <b-row sm="12" class="text-center">
            <ProductCard />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Cupon from '../components/_base/Cupon'
import ProductCard from '../components/_base/productCard'
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
      ]
    }
  }
}
</script>
