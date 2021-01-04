<template>
  <b-container class="container-footer">
    <footer>
      <b-container>
        <b-row class="d-flex justify-content-between">
          <b-col m="6" xl="6" class="footer-main">
            <img class="footer-image" src="../../assets/img/coffee 1.png" />
            <p class="footer-title">KopiKuSuka</p>
            <p class="footer-desc">
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans.
            </p>
            <div class="image-medsos">
              <img
                class="icon-footer"
                src="../../assets/img/sosmed1.png"
                alt=""
              />
              <img
                class="icon-footer"
                src="../../assets/img/sosmed2.png"
                alt=""
              />
              <img
                class="icon-footer"
                src="../../assets/img/sosmed3.png"
                alt=""
              />
            </div>
            <p class="cs-footer">&copy; KopiKuSuka</p>
          </b-col>
          <b-col class="product-footer" m="3" xl="3">
            <p class="footer-product-title">Product</p>
            <p class="footer-product-desc">Download</p>
            <p class="footer-product-desc">Pricing</p>
            <p class="footer-product-desc">Location</p>
            <p class="footer-product-desc">Countries</p>
            <p class="footer-product-desc">Blog</p>
          </b-col>
          <b-col class="footer-engage" m="3" xl="3">
            <p class="footer-engage-title">Engage</p>
            <p class="footer-engage-desc">KopiKuSuka</p>
            <p class="footer-engage-desc">FAQ</p>
            <p class="footer-engage-desc">About Us</p>
            <p class="footer-engage-desc">Privacy Policy</p>
            <p class="footer-engage-desc">Terms Of Services</p>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </b-container>
</template>

<style scoped>
@import '../../assets/styles.css';
.container-footer {
  max-width: 100%;
}
footer {
  margin-top: 90px !important;
  margin-left: auto;
  margin-right: auto;
  font-family: rubik;
}
.footer-image {
  position: absolute;
  width: 30px;
  height: 30px;
  /* top: -100px; */
}
.footer-main {
  text-align: left;
}

.footer-title {
  margin-left: 40px;
  font-weight: 700;
  font-size: 20px;
}

.footer-desc {
  margin-top: 34px;
  max-width: 340px;
  font-weight: 400;
}
.icon-footer {
  margin-right: 10px;
}
.cs-footer {
  margin-top: 18px;
}

.product-footer {
  text-align: center;
}
.footer-product-title {
  font-size: 20px;
  font-weight: 700;
}
.footer-product-desc {
  font-size: 14px;
  font-weight: 400;
}
.footer-engage {
  text-align: center;
}
.footer-engage-title {
  font-size: 20px;
  font-weight: 700;
}
.footer-engage-desc {
  font-size: 14px;
  font-weight: 400;
}
</style>
