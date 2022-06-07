<template>
  <div class="w-100 back">
      <div class="row savat_title">
          <div>
              <h2>Savatcha</h2>
          </div>
      </div>
      <div class="row savat_body">
          <div class="row_start col-12 col-sm-12 col-md-12 col-lg-8">
              <div class="boxx">
                    <div class="row contents">
                        <div class="col-12 col-sm-12 col-md-8">
                            <div class="row box_row">
                                <div class="col-6 col-sm-5 col-md-5">
                                    <div class="w-100">
                                        <img src="@/assets/products/savat.png">
                                    </div>
                                </div>
                                <div class="col-6 col-sm-7 col-md-7 box_content">
                                    <div class="sht_product">
                                        <div class="title1 w-100">
                                            <h4>Smart Watch (M16Plus)</h4>
                                        </div>
                                        <div class="sht_btn">
                                            <div class="left">
                                                <button>-</button>
                                            </div>
                                            <div class="white">
                                                <button >1 шт</button>
                                            </div>
                                            <div class="right">
                                                <button>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-7 col-sm-6 col-md-4">
                            <div class="w-100 price">
                                <div class="w-100">
                                    <h3>509.000 so'm</h3>
                                </div>
                                <div class="w-100">
                                    <h4>Sotuvchi: <span>Worldwide</span></h4>
                                    <h5>Mahsulotlar: <span>1200</span></h5>
                                </div>
                            </div>
                        </div>
                        <div class="cansel_box">
                            <button>X</button>
                        </div>
                    </div>
                    <div class="row contents">
                        <div class="col-12 col-sm-12 col-md-8">
                            <div class="row box_row">
                                <div class="col-6 col-sm-5 col-md-5">
                                    <div class="w-100">
                                        <img src="@/assets/products/savat.png">
                                    </div>
                                </div>
                                <div class="col-6 col-sm-7 col-md-7 box_content">
                                    <div class="sht_product">
                                        <div class="title1 w-100">
                                            <h4>Smart Watch (M16Plus)</h4>
                                        </div>
                                        <div class="sht_btn">
                                            <div class="left">
                                                <button>-</button>
                                            </div>
                                            <div class="white">
                                                <button >1 шт</button>
                                            </div>
                                            <div class="right">
                                                <button>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-7 col-sm-6 col-md-4">
                            <div class="w-100 price">
                                <div class="w-100">
                                    <h3>509.000 so'm</h3>
                                </div>
                                <div class="w-100">
                                    <h4>Sotuvchi: <span>Worldwide</span></h4>
                                    <h5>Mahsulotlar: <span>1200</span></h5>
                                </div>
                            </div>
                        </div>
                        <div class="cansel_box">
                            <button>X</button>
                        </div>
                    </div>
              </div>
          </div>
          <div class="row_start col-12 col-sm-12 col-md-12 col-lg-4">
              <div class="AllSumm_box">
                  <div class="row allPrice">
                      <div class="col-lg-12">
                          <div class="boxch">
                              <div>
                                  <h2>Umumiy</h2>
                              </div>
                              <div>
                                  <h3>559.000</h3>
                              </div>
                          </div>
                      </div>
                      <div class="col-5 col-sm-5 col-lg-5">
                          <h4>Tavarlar(<span>2</span>)</h4>
                      </div>
                      <div class="col-7 col-sm-7 col-lg-7">
                          <h5>559.000 so'm</h5>
                      </div>
                  </div>
                  <div class="row Main_btn">
                      <div class="col-9 co-sm-9">
                          <div class="w-100">
                              <button @click="buyPage">Buyurtma berish</button>
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
        buyPage(){
            this.$router.push('/buypage')
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
.back{
    background: #E5E5E5;
    padding-bottom: 80px;
}
img{
    border: none;
    padding: 0;
}
.savat_title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
}
.savat_body{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
}
.row_start{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2px;

}
.boxx{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
}
.savat_title h2{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #141414;
    text-align: start;
    margin: 40px 0;
}
.contents{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    min-height: 140px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(186, 186, 186, 0.25);
    border-radius: 8px;
    margin-bottom: 20px;

}
.AllSumm_box{
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    border-radius: 8px;

}
.price{
    padding: 5px;
}
.allPrice{

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.boxch{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.Main_btn{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Main_btn button{
    padding: 10px 35px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FCF6F6;
    background: #F77F00;
    border-radius: 6px;
    border: none;
    outline: none;

}
.allPrice h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    color: #001E22;
    text-align: start;
}
.allPrice h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    color: #F77F00;
    text-align: end;
}
.allPrice h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #666666;
    text-align: start;
}
.allPrice h5{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    text-align: right;
    color: #999999;
}
.cansel_box {
    width: 15px;
    position: absolute;
    top: 2px ;
    right: 5px;
    z-index: 100;
}
.cansel_box button{
    outline: none;
    border: none;
    background: transparent;
    font-size: 18px;
    color: black;
}
.box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.box_row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 130px;
}
.box_content{
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    text-align: start;
    min-height: 130px;
}
.col_box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.price{
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    text-align: start;
    min-height: 130px;
}
.price h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    color: #F77F00;
}
.price h3 span{
    color: #F77F00;
}
.price h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #141414;
}
.price h5{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #6C6C6C;
}
.price h5 span{
    font-size: 16px;
    line-height: 19px;
    color: #F77F00;
}
.cansel{
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid black;
    width: 20px;
    height: 20px;
}
.sht_product{
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    text-align: start;
    min-height: 130px;
    padding: 5px 0;
}
.title1 h4{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    text-transform: uppercase;
    color: #000000;
    text-align: start;
    width: 100%;
}
.sht_btn{
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sht_btn button{
    border: none;
    outline: none;
    padding: 10px 10px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #fff;
    background: #F77F00;

}
.white button{
    padding: 9px 20px;
    background: #fff;
    border-top: 1px solid #C4C4C4;
    border-bottom: 1px solid #C4C4C4;
    color: #141414;
}
.left button{
    border-radius: 4px 0 0 4px;
}
.right button{
    border-radius: 0 4px 4px 0;
}
@media (max-width: 992px){
.AllSumm_box{
    height: 195px;
}
/* .boxx{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 310px;
} */
}
@media (max-width: 768px){

}
@media (max-width: 576px){
.savat_title h2{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #141414;
    text-align: start;
    margin: 20px 0;
}
.price h4{
    font-size: 18px;
}
.back {
    padding-bottom: 20px;
}
.Main_btn button {
    padding: 8px 30px;

}
.boxx{
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
}
}
</style>