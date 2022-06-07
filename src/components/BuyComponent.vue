<template>
  <div class="w-100">
      <div class="row box_title">
          <div class="col-9 col-sm-8 col-md-6 col-lg-4 border">
            <div class="w-100 boxx">
                <h2>Buyurtma berish</h2>
            </div>
          </div>
          <div class="col-7 col-sm-6 col-md-4 col-lg-3">
            <div class="w-100 boxx">
                <button class="w-100">Chegirma turi <span> 1 + 1 = 3</span></button>
            </div>
          </div>
      </div>
      <div class="w-100 paddin_bottom">
          <div class="row input_box">
          <div class="col-lg-6">
              <div class="form_box">
                  <div class="boxcha">
                      <input type="text" placeholder="Ismingiz...">
                  </div>
                  <div class="boxcha">
                      <input type="text" placeholder="Telefon raqamingiz...">
                  </div>
              </div>
          </div>
          <div class="col-lg-6">
              <div class="form_box">
                  <div class="boxcha">
                      <input type="text" placeholder="Ismingiz...">
                  </div>
                  <div class="boxcha">
                      <input type="text" placeholder="Telefon raqamingiz...">
                  </div>
                  <div class="button_heart">
                      <div class="heart_img">
                          <img src="@/assets/heart.png">
                      </div>
                      <div class="main_btn">
                          <button @click="ArizaFunk">Buyurtma berish</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        ArizaFunk(){
            this.$router.push('/ariza')
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.box_title{
    padding-top: 40px;
    padding-bottom: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
   
    text-align: start;
}
.paddin_bottom{
    padding-bottom: 90px;
}
.boxx h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #141414;
}
.boxx button{
    padding: 8px 36px;
    border: 1px solid #F77F00;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #F77F00;
}
/* ========================================= */
.input_box{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    padding: 30px;
    background: #fff;
    box-shadow: 0px 1px 5px rgba(106, 106, 106, 0.15);
    border-radius: 10px;
}
.form_box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
}
.boxcha{
    width: 100%;
    padding: 10px;

}
.form_box input{
    width: 100%;
    border: none;
    outline: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #6C6C6C;
    padding: 10px 0;
    padding-left: 10px;
    border-bottom: 1px solid #6C6C6C;
}
.button_heart{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-top: 20px;
}
.main_btn button{
    padding: 10px 70px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 24px;
    text-align: center;
    color: #FCF6F6;
    border: none;
    outline: none;
    background: #F77F00;
    box-shadow: 0px 2.32px 11.6px rgba(0, 0, 0, 0.25);
    border-radius: 5.8px;
}
.heart_img{
    padding-right: 25px;
}
@media (max-width:992px){
.boxx button{
    padding: 8px 30px;
    border: 1px solid #F77F00;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #F77F00;
}
}
@media (max-width:576px){

  .box_title{
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
   
    text-align: start;
} 
.boxx h2{
    font-size: 25px;
    line-height: 30px;
}
.boxx button{
    margin-top: 10px;
    padding: 5px 20px;
    border-radius: 5px;
} 
.input_box{
    padding: 20px;
}
.form_box input{
    font-size: 16px;
    line-height: 20px;
}
.button_heart{
    justify-content: center;
    padding-top: 20px;
}
.main_btn button{
    padding: 8px 20px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
}
.heart_img{
    padding-right: 15px;
}

}
</style>