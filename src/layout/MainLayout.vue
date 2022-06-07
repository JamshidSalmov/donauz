<template>
  <div class="main">
    <div class="sub_header">
      <div class="container">
        <div class="row sub_header_row">
          <div class="p-0 col-12 col-sm-10 col-md-6 location">
            <div class="call_loc">
              <a href="#"><span><img src="@/assets/location0.png"></span> Toshkent, O'zbekiston</a>
            </div>
            <div >
              <a href="#"><span><img src="@/assets/call1.png"></span> +99895 401-20-21</a>
            </div>
          </div>
          <div class="p-0 col-12 col-sm-8 col-md-6 location1">
            <div class="d-flex align-items-center">
                <router-link class="ml-2 router" to="/login"><p>Kirish</p></router-link>
            </div>
            <div class="d-flex align-items-center">
                <router-link class="ml-2 router" to="/rigestruser"><p>Ro'yhatdan o'tish</p></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="container">
        <div class="row d-flex sub_header_row">
          <div class="col-3 col-md-3 p-0 bac_img">
            <router-link class="w-100" :to="'/main'"><img src="@/assets/logohead.png"></router-link>
          </div>
          <div class="p-0 col-7 col-md-6 search_inputt">
            <div class="w-100 d-flex align-iteme-center justify-content-between">
              <div class="search_input">
                <input @blur="blurFunk" @focus="focusInput" id="lupaa" type="text" placeholder="Izlash..." v-model="searchQuary" />
                <!-- <input id="lupaa" type="text" placeholder="Izlash..."  /> -->
              </div>
              <div class="search_icon">
                <label for="lupaa"><i class="fas fa-search" ></i></label>
              </div>
            </div>


            <div class="searchBody visible_show" v-if="showItem">
                <div v-for="(item,index) in searchFunk" :key="index" class="w-100">
                  <router-link class="w-100 rows row" :to="'/detail/' + item.id">
                      <div class="col-12 col-sm-12 col-md-3 col-lg-3 p-0">
                      <div class="w-100 img_box">
                        <img :src="getImgUrl(item.img)">
                      </div>
                      </div>
                      <div class="col-12 col-sm-12 col-md-5 col-lg-5 p-0">
                        <div class="title_box">
                          <div>
                            <h4>{{item.title}}</h4>
                          </div>
                          <div>
                            <h5>{{item.price}}</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 col-md-4 col-lg-4 p-0">
                        <div class="star_box">
                            <div class="w-100"><span><img src="@/assets/smallstar.png"></span><span><img src="@/assets/smallstar.png"></span><span><img src="@/assets/smallstar.png"></span><span><img src="@/assets/smallstar.png"></span> <span><img src="@/assets/smallstar.png"></span></div>
                        </div>
                      </div>
                  </router-link>
                </div>            
            </div>
            <div class="searchBody_back visible_hedi" v-if="showItem">
              <div v-for="(item,index) in searchFunk" :key="index" class="w-100">
                <router-link class="w-100 rows row" :to="'/detail/' + item.id">
                  <div class="col-12 col-sm-12  p-0">
                    <div class="title_boxx">
                      <div class="w-60">
                        <h4>{{item.title}}</h4>
                      </div>
                      <div class="w-40">
                        <h5>{{item.price}}</h5>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>


          </div>
          <div class="p-0 col-9 col-md-2 karzina_icons">
            <div class="karzina_user w-100">
              <div class="box1">
                <router-link :to="'/savat/0'"><img src="@/assets/karzina.png" alt="png"></router-link>
                <!-- <a href="#"><img src="@/assets/karzina.png" alt="png"></a> -->
              </div>
              <div class="box2" @click="show_hede1">
                <a href="#"><img src="@/assets/user.png" alt="png"></a>
                <drop-downn  v-if="show_hide1" class="dropdown1" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="w-100 main_content">
      <div class="container">
          <router-view></router-view>
      </div>
    </div>
    <footer>
      <div class="container-fluid">
        <div class="row m-0 footer_row">
          <div class="col-12 col-sm-10 col-md-2 mx-2 p-0 mt-1 ">
            <div class="social">
              <div class="logotip1 w-100">
                  <img src="@/assets/logo1.png">
                </div>
            </div>           
          </div>
          <div class="col-12 col-sm-5 col-md-2 mx-2 p-0 mt-1">
            <div class="social">
              <div class="footer_text">
                <h2>Kompaniya</h2>
              </div>
              <div class="social_btn1">
                <div class="call">
                  <a href="#"><span>Biz haqimizda</span></a>
                </div>
                <div class="call">
                  <a href="#"><span>Aloqa</span></a>
                </div>
                <div>
                  <a href="#"><span>Hamkorlar</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-5 col-md-2 mx-2 p-0 mt-1">
            <div class="social">
              <div class="footer_text">
                <h2>To'lov turlari</h2>
              </div>
              <div class="social_btn0">
                <div>
                  <a href="#"><img src="@/assets/uzkard.png"></a>
                </div>
                <div>
                  <a href="#"><img src="@/assets/click.png"></a>
                </div>
              </div>
              <div class="social_btn0">
                <div>
                  <a href="#"><img src="@/assets/visa.png"></a>
                </div>
                <div>
                  <a href="#"><img src="@/assets/humo.png"></a>
                </div>
              </div>
              <div class="social_btn0">
                <div>
                  <a href="#"><img src="@/assets/payme.png"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-5 col-md-2 mx-2 p-0 mt-1">
            <div class="social">
              <div class="footer_text">
                <h2>Aloqa uchun</h2>
              </div>
              <div class="social_btn1">
                <div class="call">
                  <a href="#"><img src="@/assets/call.png"><span> +99895 401-20-21</span></a>
                </div>
                <div>
                  <a href="#"><img src="@/assets/location1.png"><span>Toshkent, O'zbekiston</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-5 col-md-3 mx-2 p-0 mt-1">
            <div class="social">
              <div class="footer_text">
                <h2>Ijtimoiy tarmoqlar</h2>
              </div>
              <div class="social_btn">
                <div>
                  <a href="#"><img src="@/assets/telegram.png"></a>
                </div>
                <div>
                  <a href="#"><img src="@/assets/instagram.png"></a>
                </div>
                <div>
                  <a href="#"><img src="@/assets/facebook.png"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-10 col-lg-8 footer_bottom">
              <div>
               <p>© Dona.uz 2022</p>
              </div>
              <div>
                <p>Sayt GREATSOFT kompaniyasi tomonidan ishlab chiqildi</p>
              </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import DropDownn from "@/components/DropTwo.vue"
import { mapGetters } from 'vuex'
export default {
  components:{
    DropDownn,
  },
  data(){
    return{
      show_hide1:false,
      showItem:false,
      searchQuary: '',
    }
  },
  computed:{
    searchFunk(){
      return this.felterFunk()
    },
    ...mapGetters(['searchItem'])
  },
  methods:{
    getImgUrl(pic) {
      return require('@/assets'+pic)
    },
    show_hede1(){
      this.show_hide1=!this.show_hide1
    },
    felterFunk(){
      return this.searchItem.filter(row => row.title.toLowerCase().includes(this.searchQuary.toLowerCase())) 
    },
    focusInput(){
      this.showItem=!this.showItem;
    },
    blurFunk(){
      setTimeout(() => {
          this.showItem=!this.showItem;
      }, 200)
    }
  }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}
body{
   min-width: 320px;
   font-family: sans-serif;
   height: 100vh;
   background: rgb(252, 252, 252);
}
.visible_hedi{
  display: none;
}
.visible_show{
  display: block;
}
.dropdown1{
  position: absolute;
  top:calc(100% + 10px);
  z-index: 100 !important;
  transform: translateX(-165px);
}
.searchBody{
  width: 85%;
  position: absolute;
  top: calc(100% + 10px);
  z-index: 100 !important;
  background: #FFFFFF;
  box-shadow: 0px 1px 5px rgba(86, 86, 86, 0.15);
  border-radius: 10px;
  max-height: 257px;
  /* padding: 10px 5px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
}
.rows{
  margin: 0;
  width: 100%;
  height: 80px;
  background: #F5F5F5;
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
}
.rows:hover{
    background: #F5F5F5;
  
}
.title_box{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  text-align: start;
  height: 70px;
}
.title_box h4{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #490D2A;
}
.title_box h5{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #F77F00;
}
.star_box{
  width: 100%;
  display: flex;
  justify-content: end;
  text-align: end;
  padding-right: 5px;
  height: 70px;
}
/* Skrol barni yuq qilish */
.searchBody::-webkit-scrollbar {
  display: none;
}
img{
  border: none;
}
.search_inputt{
  position: relative;
}
/* sub_header Start =====*/
.sub_header{
    width: 100%;
    height: 45px;
    background: #F77F00;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sub_header_row{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.location {
  display: flex;
  align-items: center;
  justify-content: start;
}
.location .call_loc{
  margin-right: 20px;

}
.location1 .call_loc{
  margin-left: 20px;
}

.location a{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
}
.location1 {
  display: flex;
  align-items: center;
  justify-content: end;
}
.location1 a{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
}
/* sub_header end =====*/

/* header start ===== */
.header{
  height: 80px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 1px 5px rgba(208, 208, 208, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}
.search_input{
  padding: 10px 20px;
  width: 85%; 
  height: 45px;
  border: 1px solid rgba(128, 128, 128, 0.5); 
  border-radius: 10px 0px 0px 10px;
}
.search_input input{
  width:100%; 
  border:none; 
  font-family: 'Inter'; 
  font-weight: 400; 
  font-size: 18px;
  line-height: 22px; 
  outline:none;
  color: #495057;
  background-clip: padding-box;
  /* border: 1px solid #ced4da; */
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.search_icon {
  padding: 10px; 
  width: 15%; 
  height:45px; 
  background: #F77F00;
  border-radius: 0px 10px 10px 0px;
}
.search_icon i{
  color:#fff; 
  width:25px; 
  height: 25px;
  line-height:25px;
  font-size: 22px;
}
.karzina_user{
  display: flex;
  align-items: center;
  justify-content: end;
}
.karzina_user img{
  width: 35px;
  height: 35px;
  border: none;
}
.karzina_user .box1 img{
  width: 35px;
  height: 35px;
  margin-right: 25px;
  
}
/* footer start */
footer{
  background: #111344;
  padding-top: 80px;
  padding-bottom: 60px;
}
.footer_row{
  display: flex;
  align-items: start;
  justify-content: center;

}
.social{
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}
.logotip1 img{
  border: none;
  max-width: 140px;
  width: 100%;
}
.social h2{
  text-align: start;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #FFFFFF;
}
.footer_text{
  width: 100%;
  margin-bottom: 35px;
}
.social_btn{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
}
.social_btn1{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  align-items: start;
}
.social_btn0 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
}
.social_btn1 .call{
  margin-bottom: 15px;
}
.social_btn1 img{
  border: none;
}
.social_btn1 span{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #FFFFFF;
  margin-left: 5px;
}
.social_btn img{
  border: none;
  margin-right: 40px;
}
.social_btn0 img{
  border: none;
}
.social_btn0 div:nth-child(1){
  margin-right: 15px;
}
.footer_bottom{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}
.footer_bottom img{
  border: none;
}
.footer_bottom p{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  padding: 0 5px;
}
/* footer end  */
@media (max-width:1200px) {
 .footer_bottom p{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  padding: 0 5px;
} 
}
@media (max-width: 992px){
.bac_img img{
  width:100px;
}
footer{
  background: #111344;
  padding-top: 40px;
  padding-bottom: 40px;
}
.footer_bottom p{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  padding: 0 5px;
}

.social h2{
  text-align: start;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  color: #FFFFFF;
}
.social_btn1 span{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  margin-left: 5px;
}
.social_btn1 .call{
  margin-bottom: 15px;
}
.location a{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
}
.location1 a{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
}
}
@media (max-width:767px){
.sub_header_row{
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub_header .location{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.sub_header .location1{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.location .call_loc{
  margin-right: 30px;

}
.location1 .call_loc{
  margin-left: 30px;
}
.bac_img img{
  width: 70px;
}
.search_input{
  padding: 0 5px;
  width: 85%; 
  height: 28px;
  border: 1px solid rgba(128, 128, 128, 0.5); 
  border-radius: 10px 0px 0px 10px;
}
.search_input input{
  width:100%; 
  border:none; 
  font-family: 'Inter'; 
  font-weight: 400; 
  font-size: 14px;
  line-height: 22px; 
  outline:none;
  color: #495057;
  background-clip: padding-box;
  /* border: 1px solid #ced4da; */
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.social{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.search_icon {
  padding: 0px 5px; 
  width: 15%; 
  height:28px; 
  background: #F77F00;
  border-radius: 0px 10px 10px 0px;
}
.search_icon i{
  color:#fff; 
  width:25px; 
  line-height:22px;
  font-size: 12px;
}
.karzina_user .box1 img{
  width: 35px;
  height: 35px;
  margin-right: 25px;
  
}

.karzina_user{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}
.box2{
  position: relative;
  transition: 0.4s;

}
.karzina_user .box1 img, .karzina_user .box2 img{
  width: 25px;
  height: 25px;

}
.footer_bottom{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
}
.footer_bottom img{
  border: none;
}
.footer_bottom p{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  padding: 0 5px;
}

.social h2{
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #FFFFFF;
}
.social_btn1 span{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  margin-left: 5px;
}

footer{
  background: #111344;
  padding-top: 25px;
  padding-bottom: 25px;
}
.footer_text{
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
  text-align: center;
}
.social_btn1 .call{
  margin-bottom: 5px;
}
.social_btn1{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.social_btn0 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.social_btn{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.searchBody_back{
  width: 85%;
  position: absolute;
  top: calc(100% + 10px);
  z-index: 101 !important;
  background: #FFFFFF;
  box-shadow: 0px 1px 5px rgba(86, 86, 86, 0.15);
  border-radius: 10px;
  max-height: 100px;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
}
.visible_hedi{
  display: block;
}
.visible_show{
  display: none;
}
.title_boxx{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  text-align: start;
  border-bottom: #495057;
}

.title_boxx h4{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #490D2A;
}
.title_boxx h5{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #F77F00;
}
.location a{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
}
.location1 a{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
}
}
@media (max-width:576px){
.sub_header_row{
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub_header .location{
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub_header .location1{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.location a, .location1 a{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #fff;
}
.bac_img img{
  width: 60px;
}
.search_input{
  padding: 0 5px;
  width: 85%; 
  height: 28px;
  border: 1px solid rgba(128, 128, 128, 0.5); 
  border-radius: 10px 0px 0px 10px;
}
.search_input input{
  width:100%; 
  border:none; 
  font-family: 'Inter'; 
  font-weight: 400; 
  font-size: 14px;
  line-height: 22px; 
  outline:none;
  color: #495057;
  background-clip: padding-box;
  /* border: 1px solid #ced4da; */
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.search_icon {
  padding: 0px 5px; 
  width: 15%; 
  height:28px; 
  background: #F77F00;
  border-radius: 0px 10px 10px 0px;
}
.search_icon i{
  color:#fff; 
  width:25px; 
  line-height:22px;
  font-size: 12px;
}
.karzina_user .box1 img{
  width: 35px;
  height: 35px;
  margin-right: 25px;
  
}

.karzina_user{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}
.karzina_user .box1 img, .karzina_user .box2 img{
  width: 25px;
  height: 25px;

}
.footer_bottom{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;

}
.footer_bottom img{
  border: none;
}
.footer_bottom p{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  padding: 0 5px;
}
footer{
  background: #111344;
  padding-top: 20px;
  padding-bottom: 20px;
}
.social{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.social h2{
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
}
.social_btn1 span{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  margin-left: 5px;
}
.footer_row{
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer_text{
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
  text-align: center;
}
.social_btn0 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.social_btn1{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.social_btn{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.social_btn1 .call{
  margin-bottom: 5px;
}
.searchBody_back{
  width: 85%;
  position: absolute;
  top: calc(100% + 10px);
  z-index: 101 !important;
  background: #FFFFFF;
  box-shadow: 0px 1px 5px rgba(86, 86, 86, 0.15);
  border-radius: 10px;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
}
.visible_hedi{
  display: block;
}
.visible_show{
  display: none;
}
.rows{
  margin: 0;
  width: 100%;
  height: 30px;
  background: #F5F5F5;
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
}
.title_boxx{
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  text-align: start;
  border-bottom: #495057;
}

.title_boxx h4{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #490D2A;
}
.title_boxx h5{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #F77F00;
}
}

.main{
    height: 100vh;
}


</style>