<template>
  <div class="back">
      <div class="row Aloqa_title">
          <div>
              <h2>Aloqa uchun</h2>
          </div>
      </div>
      <div class="row aloqa_body">
          <div class="col-12 col-md-12 col-lg-6 display_show">
            <div class="bakground_color">
                <div class="locationx row">
                    <div class="col-md-2">
                        <div class="w-100 ">
                            <img src="@/assets/locationx.png">
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="w-100">
                            <h3>
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6">
              <div class="bakground_color">
                  <div class="row locationxx">
                      <div class="col-md-12">
                          <div class="w-100">
                              <h2> <span><img src="@/assets/ring.png" alt=""> </span> +998(90)457-12-57</h2>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="w-100">
                              <h2><span><img src="@/assets/m.png" alt=""> </span> info@100k.uz</h2>
                          </div>
                      </div>
                      <div class="col-md-12">
                        <div class="w-100">
                              <h2><span><img src="@/assets/t.png" alt=""> </span>  @dona</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row aloqa_body">
          <div class="col-md-12 col-lg-6">
            <div class="bakground_color">
                <di class="w-100">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47930.40507883113!2d69.28412391851772!3d41.33821665358393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1654520542599!5m2!1suz!2s" width="435" height="395" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </di>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
              <div class="bakground_color">
                  <div class="row message_box">
                      <div class="col-md-12">
                          <div class="w-100 padding_box">
                              <h3>Sms yuborish</h3>
                          </div>
                      </div>
                      <div class="col-md-12">
                         <div class="w-100 padding_box">
                              <div class="w-100 border_bottom">
                                  <input type="text" placeholder="Ismingiz...">
                              </div>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="w-100 padding_box">
                             <div class="border_bottom">
                                 <input type="text" placeholder="Telifon raqamingiz">
                              </div>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="w-100 send_btn">
                                 <button>Yuborish</button>  
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

}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.back{
    background: #E5E5E5;
    padding-bottom: 80px;
}
.display_show{
    display: block;
}
.Aloqa_title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Aloqa_title h2{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #141414;
    text-align: start;
    margin: 40px 0;
}
.aloqa_body{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
}
.bakground_color{
    width: 100%;
    padding: 10px 15px;
}
.locationx{
    width: 100%;
    min-height: 250px;
    display: flex;
    align-items: start;
    justify-content: start;
    box-shadow: 0px 1px 5px rgba(208, 208, 208, 0.15);
    border-radius: 10px;
    background: #fff;
    padding: 10px 10px;
    padding-top: 20px;
}
.locationxx{
    width: 100%;
    min-height: 250px;
    display: flex;
    align-items: start;
    justify-content: start;
    box-shadow: 0px 1px 5px rgba(208, 208, 208, 0.15);
    border-radius: 10px;
    padding: 10px 10px;
}
.locationx h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #141414; 
    text-align: start;
}
.locationxx h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #141414; 
    text-align: start;
    padding: 10px 20px;
    background: #FFFFFF;
    box-shadow: 0px 1px 5px rgba(208, 208, 208, 0.15);
    border-radius: 10px;
}
.locationxx h2 span{
    padding-right: 10px;
}
.message_box{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    box-shadow: 0px 1px 5px rgba(208, 208, 208, 0.15);
    border-radius: 10px;
    padding: 10px 10px;
    background: #fff;
    text-align: start;
    min-height: 400px;
}
.padding_box{
    padding: 20px 25px;
}
.border_bottom{
    border-bottom: 1px solid #A6A6A6; 
    padding-top: 40px; 
}
.border_bottom input{
    border: none;
    outline: none;
    padding-left: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #6C6C6C;
    width: 100%;
}
.send_btn{
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 20px 25px;
}
.send_btn button{
    background: #F77F00;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
    padding: 8px 30px;
    outline: none;
    border: none;

}
iframe{
    width: 100%;
    height: 400px;

}
@media (max-width: 576px){
.Aloqa_title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Aloqa_title h2{
    font-size: 25px;
    line-height: 30px;
    margin: 20px 0;
}
.display_show{
    display: none;
}
.message_box{
    min-height: 200px;
}
.padding_box{
    padding: 10px 15px;
}
.locationxx{
    min-height: 200px;
}
.border_bottom{
    border-bottom: 1px solid #A6A6A6; 
    padding-top: 10px; 
}
.border_bottom input{
    border: none;
    outline: none;
    padding-left: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #6C6C6C;
    width: 100%;
}
.send_btn{
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 10px 15px;
}
.send_btn button{
    background: #F77F00;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    padding: 6px 30px;
    outline: none;
    border: none;

}
iframe{
    width: 100%;
    height: 200px;

}
}
</style>