<template>
  <div class="w-100">
  <!-- row for katigories start-->
      <div class="row">
        <div v-for="(row1, index) in rowKatigories" :key="index" class="col-10 col-sm-6  col-md-4 col-lg-2  px-1 my-1">
          <div class="card">
            <div class="img1">
                <router-link class="img11" :to="'/detail/' + row1.id"><img :src="getImgUrl(row1.img)"></router-link>
            </div>
            <div class="title">
              <h4>
                {{row1.katigory}}
              </h4>
            </div>
          </div>
        </div>
      </div>
  <!-- row for katigories end-->

  <!-- new products start-->
      <div class="row">
        <div class="col-10 col-sm-10 col-md-12">
        <div class="new_product_title">
            <h4>
              Yangi maxsulotlar
            </h4>
        </div>
        </div>
        <div v-for="(row,index) in rowss" :key="index" class="col-10 col-sm-10  col-md-6 col-lg-3 px-1 my-1">
          <div class="card">
            <div class="img2">
                <router-link class="img22" :to="'/detail/'+row.id"><img :src="getImgUrl(row.img)"></router-link>
            </div>
            <div class="title1">
              <div class="star_savat pb-2">
                <div class="w-65">
                  <p>{{row.title}}</p>
                </div>
                <div class="star_icon">
                  <div>
                    <img :src="getImgUrl(row.stars)">
                  </div>
                  <div>
                    <h5>{{row.star_value}}</h5>
                  </div>
                </div>
              </div>
              <div class="star_savat">
                <div class="w-65">
                  <h3>{{row.price}} so'm</h3>
                </div>
                <div class="karzina_icon">
                    <div class="w-100 d-flex align-items-center justify-content-end">
                        <router-link :to="'/savat/'+row.id"><img src="@/assets/NewProducts/karzina.png" alt="png"></router-link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-10 col-md-10">
          <div class="big_btn">
            <button>Barchasini ko'rish</button>
          </div>
        </div>
      </div>
  <!-- new products start-->

  <!-- Mashxur brendlar start -->
      <div class="row popular">
        <div class="col-12">
        <div class="new_product_title">
            <h4>
              Mashhur brendlar
            </h4>
        </div>
        </div>
        <div class="col-10 col-sm-6 col-md-4 col-lg-2 mt-1 pad_marg">
          <div class="card">
            <div class="img3">
            <div>
                <img src="@/assets/acer.png">
            </div>
            </div>
          </div>
        </div>
        <div class="col-10 col-sm-6 col-md-4 col-lg-2 mt-1 pad_marg">
          <div class="card">
              <div class="img3">
                <div>
                  <img src="@/assets/apple.png">
                </div>
              </div>
          </div>
        </div>
        <div class="col-10 col-sm-6 col-md-4 col-lg-2 mt-1 pad_marg">
          <div class="card">
              <div class="img3">
                <div>
                  <img src="@/assets/lg.png">
                </div>
              </div>
          </div>
        </div>
        <div class="col-10 col-sm-6 col-md-4 col-lg-2 mt-1 pad_marg">
          <div class="card">
              <div class="img3">
                <img src="@/assets/sony.png">
              </div>
          </div>
        </div>
        <div class="col-10 col-sm-6 col-md-4 col-lg-2 mt-1 pad_marg">
          <div class="card">
            <div class="img3">
              <img src="@/assets/asus.png">
            </div>
          </div>
        </div>
        <div class="col-10 col-sm-6 col-md-4 col-lg-2 mt-1 pad_marg">
          <div class="card">
            <div class="img3">
              <img src="@/assets/hp.png">
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-10 col-md-10">
          <div class="slayder_btn">
            <div>
              <button><img src="@/assets/point.png"></button>
            </div>
            <div>
              <button><img src="@/assets/pint1.png"></button>
            </div>
            <div>
              <button><img src="@/assets/pint1.png"></button>
            </div>
          </div>
        </div>
      </div>
  <!-- Mashxur brindlar end -->

  <!-- Ommabop products start-->
      <div class="row">
        <div class="col-12">
        <div class="new_product_title">
            <h4>
              Ommabop tavarlar
            </h4>
        </div>
        </div>
        <div v-for="(row,index) in rowss" :key="index" class="col-10 col-sm-10  col-md-6 col-lg-3 px-1 my-1">
          <div class="card">
            <div class="img2">
                <router-link class="img22" :to="'/detail/'+row.id"><img :src="getImgUrl(row.img)"></router-link>
            </div>
            <div class="title1">
              <div class="star_savat pb-2">
                <div class="w-65">
                  <p>{{row.title}}</p>
                </div>
                <div class="star_icon">
                  <div>
                    <img :src="getImgUrl(row.stars)">
                  </div>
                  <div>
                    <h5>{{row.star_value}}</h5>
                  </div>
                </div>
              </div>
              <div class="star_savat">
                <div class="w-65">
                  <h3>{{row.price}} so'm</h3>
                </div>
                <div class="karzina_icon">
                    <div class="w-100 d-flex align-items-center justify-content-end">
                        <router-link :to="'/savat/'+row.id"><img src="@/assets/NewProducts/karzina.png" alt="png"></router-link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  <!-- Ommabop products start-->
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['rowss','rowKatigories']),
  },
  methods:{
    // ...mapMutations([''])
    getImgUrl(pic) {
      return require('@/assets/'+pic)
    },

  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.row{
  margin: 40px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #fff;
}
.card{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.card .img1{
  width: 100%;
  height: 140px;
}
.imd11{
    width: 100%;
    height: 140px;
}
.card .img2{
  width: 100%;
  height: 200px;
}
.card .img22{
  width: 100%;
  height: 200px;
}
.pad_marg{
  padding: 0 15px;
}
.card .img3{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card .img1 img{
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}
.card .img2 img{
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}
.card .img3 img{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #FFFFFF;
  border-radius: 8px;
  border: none;
}
.popular div:nth-child(2){
  padding-left: 0;
}
.popular div:nth-last-child(2){
  padding-right: 0;
}
.title{
  width: 100%;
}
.title1{
  height: 80px;
  width: 100%;
  padding: 10px;
}
.star_icon{
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: end;
}
.karzina_icon{
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: end;
}
.karzina_icon img{
  max-width: 27px;
  border: none;
}
.star_icon img{
  border: none;
}
.star_icon h5{
  width: 18px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #666666;
}
.star_savat{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.star_savat p{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #490D2A;
}
.star_savat h3{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #490D2A;
}
.title h4{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  padding: 5px 0;
  color: #250615;
}
.new_product_title{
  display: flex;
  align-items: center;
  justify-content: start;
  height: 48px;
  width: 100%;
  margin-bottom: 40px;
  text-align: start;
}
.new_product_title h4{
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
}
.big_btn{
  margin: 40px 0;
}
.big_btn button{
  border: none;
  outline: none;
  padding: 10px 42px;
  background: #F77F00;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
}
.slayder_btn{
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slayder_btn button{
  margin: 0 15px;
  border: none;
  outline: none;
  background: transparent;
}
.slayder_btn img{
  border: none;
}
@media (max-width:992px){
  
}
@media (max-width:768px){
  .row{
    margin: 30px 20px;
  }
  .new_product_title {
    margin-bottom: 30px;
    height: 35px;
    width: 100%;
    text-align: center;
  }
  .new_product_title h4{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }
.big_btn{
  margin: 30px 0;
}
.big_btn button{
  border: none;
  outline: none;
  padding: 8px 32px;
  background: #F77F00;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
}
.slayder_btn{
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slayder_btn button{
  margin: 0 8px;
  border: none;
  outline: none;
  background: transparent;
}
.popular div:nth-child(2){
  padding-left: 15px;
}
.popular div:nth-last-child(2){
  padding-right: 15px;
}
}
@media (max-width:576px){
  .row{
    margin: 20px 10px;
  }
  .new_product_title {
    margin-bottom: 20px;
    height: 28px;
    width: 100%;
    text-align: center;
  }
  .new_product_title h4{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
.big_btn{
  margin: 20px 0;
}
.big_btn button{
  border: none;
  outline: none;
  padding: 5px 22px;
  background: #F77F00;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
}
.slayder_btn{
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slayder_btn button{
  margin: 0 5px;
  border: none;
  outline: none;
  background: transparent;
}
.popular div:nth-child(2){
  padding-left: 15px;
}
.popular div:nth-last-child(2){
  padding-right: 15px;
}
}
</style>