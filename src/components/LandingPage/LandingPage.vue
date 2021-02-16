<template>
  <main>
    <section>
      <div class="jumbotron index-jumbotron">
        <div class="container">
          <div class="container-search">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control search-jumbotron mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <h1 class="display-4 title-jumbotron">
            Start Your Day With Coffee and Good Meals
          </h1>
          <p class="jumbotron-teks">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </p>
          <b-button class="btn get-started" to="/product" role="button"
            >Get Started</b-button
          >
        </div>
      </div>
      <div class="container information-rec">
        <div class="row">
          <div class="rec col-sm-4">
            <div class="color">
              <img class="image-inf" src="../../assets/img/Vector3.png" />
            </div>
            <span class="number">90+</span>
            <p class="role">Staff</p>
          </div>
          <div class="rec col-sm-4">
            <div class="color">
              <img class="image-inf" src="../../assets/img/Vector2.png" />
            </div>
            <span class="number">30+</span>
            <p class="role">Stories</p>
          </div>
          <div class="rec col-sm-4">
            <div class="color">
              <img class="image-inf" src="../../assets/img/Vector.png" />
            </div>
            <span class="number">800+</span>
            <p class="role-customers">Customers</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
main .index-jumbotron {
  background-image: url('../../assets/img/jumbo.png');
  position: relative;
  height: 640px;
  background-size: 100% 100%;
}

main .jumbotron .contanier {
  margin-left: 200px;
}

main .jumbotron .container h1 {
  margin-top: 20px;
  margin-left: 20px;
  width: 570px !important;
  color: white;
  font-size: 50px;
  font-weight: 700;
}

main .jumbotron .container .jumbotron-teks {
  /* margin-top:70px; */
  margin-left: 20px;
  width: 555px;
  color: white;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
}

main .jumbotron .container .get-started {
  padding: 17.5px 77px;
  margin: 29px 20px;
  font-size: 16px;
  width: 250px;
  height: 60px;
  border-radius: 10px;
  color: #6a4029;
  background-color: #ffba33;
}

main .jumbotron .container .container-search {
  position: absolute;
  top: 18px;
  right: 150px;
}

main .jumbotron .container .container-search .search-jumbotron {
  border-radius: 30px;
  padding-left: 49px;
  width: 314px;
  height: 60px;
  font-size: 17px;
}

main .information-rec {
  background-color: white;
  position: relative;
  margin: 0px auto;
  top: -100px;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0px 2px 6px black;
  text-align: center;
  align-items: center;
  line-height: 5px;
  padding: 60px 0px;
}
/* main .information .row.rec {
    margin-left: 100px;
  } */

main .information-rec .row {
  padding-left: auto;
  padding-right: auto;
  text-align: center;
}
main .information-rec .row .number {
  font-size: 24px;
  font-weight: 700;
  margin-left: 40px;
}
main .information-rec .row .role {
  font-size: 16px;
  margin-top: 15px;
  margin-left: 40px;
}
main .information-rec .row .role-customers {
  font-size: 16px;
  margin-top: 15px;
  margin-left: 55px;
}

main .information-rec .row .color {
  position: absolute;
  margin: -5% 25%;
  left: 20px;
  background-color: #ffba33;
  border: 1px solid #ffba33;
  border-radius: 70px;
  width: 55px;
  height: 55px;
}

.image-inf {
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
}
/*  */

article {
  margin: 100px;
  display: flex;
  text-align: center;
}

article .container .img-article {
  width: 573px;
  height: 457px;
}

article .container .row .description {
  text-align: left;
  padding-left: 150px;
  /* margin: 0px 30px; */
}
article .container .desc-article {
  font-weight: 500;
  font-size: 35px;
}
article .container .desc-article1 {
  font-weight: 400;
  font-size: 16px;
}
article .container .desc-article2 {
  font-weight: 400;
  font-size: 12px;
}

article .con-favorite {
  margin: 140px auto;
}

article .con-favorite .row {
  align-items: center;
  text-align: center;
  margin: 0px auto;
}
article .con-favorite .title-favorite {
  text-align: center;
  margin: 10px auto;
  font-size: 35px;
  font-weight: 500;
}
article .con-favorite .desc-favorite {
  margin-bottom: 60px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
}

article .container .row .favorite {
  background-color: white;
  position: relative;
  border: 1px solid #dddddd;
  border-radius: 10px;
  width: 300px;
  height: 760px;
  margin: 20px 40px;
  text-align: center;
  /* display: block; */
}

article .container .row .favorite .image {
  margin-top: 53px;
  margin-bottom: 23px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dddddd;
  border-radius: 20px;
  width: 168px;
  height: 189px;
}
article .container .row .favorite .desc-coffee {
  font-size: 14px;
}

.all-desc {
  text-align: left;
  margin-right: auto;
  margin-left: auto;
  margin-left: 40px;
}

.another-cek {
  width: 10px;
  height: 9px;
  margin-right: 25px;
}

.title-coffee {
  font-weight: 500;
  font-size: 18px;
}

article .container .row .coffee {
  position: absolute;
  bottom: 50px;
  text-align: center;
}

article .container .row .all-desc .price {
  font-weight: 500;
  font-size: 25px;
  /* left: 30px; */
}

article .container .row .all-desc .buy-coffee {
  /* position: absolute; */
  width: 177px;
  height: 45px;
  border: 2px solid #ffba33;
  border-radius: 20px;
  /* bottom: 0px; */
}

.selected {
  background-color: #ffba33 !important;
}

article .container .row .favorite .img-favorite {
  margin: 20px 0px;
  border: 1px solid white;
  border-radius: 70px;
}
</style>
