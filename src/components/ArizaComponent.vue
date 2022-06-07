<template>
  <div class="w_box">
      <div class="row main_box">
          <div class="col-12">
              <div class="coll_box">
                  <img src="@/assets/cheaked.png" alt="png">
              </div>
          </div>
          <div class="col-12">
              
              <div class="coll_box">
                  <h2>
                      Arizangiz qabul qilindi!
                  </h2>
              </div>
          </div>
          <div class="col-12">
              <div class="coll_box">
                  <h4>
                      Batafsil ma'lumot uchun operator yaqin vaqt ichida  siz bilan aloqaga chiqadi
                      Iltimos, telefoningiz yoqilgan holda bo'lsin
                  </h4>
              </div>
          </div>
          <div class="col-12">
              <div class="w-100 form_head">
                  <div class="w-50">
                      <h3>Maxsulot</h3>
                  </div>
                  <div class="w-50">
                      <h3>Summa</h3>
                  </div>
              </div>
          </div>
          <div class="col-12">
              <div class="w-100 form_bottom">
                  <div class="w-50">
                      <h3></h3>
                  </div>
                  <div class="w-50">
                      <h3>123.000 so'm</h3>
                  </div>
              </div>
          </div>
          <div class="col-12">
              <div class="w-100 All_summ row">
                  <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="w-100">

                      </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                      <div class="w-100">
                          <h3>Jami summa : <span>123.000 so'm</span></h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.w_box{
    width: 100%;
    padding-top: 40px;
    padding-bottom: 100px;
}
.main_box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 1px 5px rgba(208, 208, 208, 0.15);
    border-radius: 25px;
    padding: 25px 60px;
}
.coll_box{
    padding: 5px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  
}
.coll_box h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 42px;
    color: #141414;
}
.coll_box h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #141414;
}
.form_head{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: start;
    padding: 10px;
    border-bottom: 1px solid #000000;
    border-top: 1px solid #000000;
    margin-top: 40px;
}
.form_bottom{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: start;
    padding: 10px;
    border-bottom: 1px solid #000000;
}

.form_head h3, .form_bottom h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 33px;
    color: #000000;
}
.form_bottom h3{
    font-weight: 400;
}
.All_summ{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: start;
    padding: 15px;
    padding-bottom: 50px;
}
.All_summ h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 33px;
    color: #000000;
}
@media (max-width:992px){

.w_box{
    width: 100%;
    padding-top: 20px;
    padding-bottom: 80px;
}
.main_box{
    padding: 20px 25px 20px 25px;
}
.coll_box h2{
    font-size: px;
    line-height: 40px;
    font-weight: 600;
}
.coll_box h4{
    font-weight: 400;
    font-size: 23px;
    line-height: 28px;
}
.form_head h3, .form_bottom h3{
    font-size: 22px;
    line-height: 26px;
}
.All_summ{
    padding: 15px 15px 15px 15px;
}
.All_summ h3{
    font-size: 22px;
    line-height: 26px;
    text-align: start;
}
}
@media (max-width:768px){
.w_box{
    width: 100%;
    padding-top: 20px;
    padding-bottom: 40px;
}
.coll_box img{
    width: 50px;

}  
.coll_box h2{
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
}
.coll_box h4{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
}
.main_box{
    padding: 20px 25px 20px 25px;
}
.form_head{
    margin-top: 20px;
}
.form_head h3, .form_bottom h3{
    font-size: 20px;
    line-height: 24px;
}
.All_summ{
    padding: 15px;
}
.All_summ h3{
    font-size: 18px;
    line-height: 24px;
    text-align: start;
}
}
@media (max-width:576px){
  .w_box{
    width: 100%;
    padding-top: 20px;
    padding-bottom: 40px;
}
.coll_box img{
    width: 45px;

}  
.coll_box h2{
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
}
.coll_box h4{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
}
.main_box{
    padding: 20px 25px 0px 25px;
}
.form_head{
    margin-top: 20px;
}
.form_head h3, .form_bottom h3{
    font-size: 20px;
    line-height: 24px;
}
.All_summ{
    padding: 15px;
}
.All_summ h3{
    font-size: 18px;
    line-height: 24px;
    text-align: end;
}
}
</style>