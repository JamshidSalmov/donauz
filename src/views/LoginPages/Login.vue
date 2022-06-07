<template>
<div class="main-page">
    <div class="main-back">
       <div class="grid-wrapper">
            <div class="header-top">
                <div class="buttons">
                    <div>
                        <router-link class="w-100" :to="'/main'"><img src="@/assets/logohead.png"></router-link>
                    </div>
                </div>
            </div>
            <div class="box">
                 <div class="boxx">
                     <div class="box_title">
                         <h2>Tizimga kirish</h2>
                     </div>
                     <div class="box_paragrf">
                         <p>Parol va Telefon raqamingizni kiriting</p>
                    </div>
                    <div class="box_form">
                        <form class="forms">
                            <div class="loginn">
                                <input type="text" id="login" class="inputt" placeholder="+998 9* *** ** **" v-model="login">
                            </div>
                            <div class="password">
                                <div class="pass_input">
                                    <input :type="passwordType" id="parol" class="inputt passwordicon w-100 m-0" placeholder="Parol" v-model="Password">
                                    <span  @click="eyesShov" class="field-icon"><mdb-icon class="ikoncha" :icon="eyes" /></span>
                                </div>
                            </div>
                            <div class="buttonss">
                                <button @click="enterPage" class="btnn">Kirish</button>
                            </div>
                        </form>
                    </div>
                    <div class="question_btn">
                        <div class="d-flex align-items-center">
                            <router-link class="ml-2 router" to="/rigestruser"><p>Ro'yhatdan o'tmaganmisiz?</p></router-link>
                        </div>
                        <div class="d-flex align-items-center">
                            <router-link class="ml-2 router" to="/findpassword"><p>Parolingizni unutdingizmi?</p></router-link>
                        </div>
                    </div>
                 </div>
            </div>
       </div>
    </div>
    <notes ref="message"></notes>
</div>
</template>

<script>
import { mdbBtn,mdbIcon } from 'mdbvue';
export default {
    components: {
      mdbBtn,
      mdbIcon,
    },
    data() {
        return {
         passwordType:'password',
         eyes: 'eye',
         Password:'',
         login:'',
         Login: "Jamshid",
         parol: "123456",
         userId: "1",
        }
    },
    mounted(){
        localStorage.Login = '';
        localStorage.UserId= '';
    },
    methods: {
        eyesShov(){
             this.eyes = this.eyes ==='eye' ? 'eye-slash' : 'eye';
            this.passwordType =this.passwordType ==='password' ? 'text' : 'password';
        },

        // Vaqtinchalik funksiya=====
        enterPage(){
                try{
                        localStorage.UserId =this.userId
                        localStorage.Login =this.Login
                        console.log(localStorage)  
                        if(this.parol==this.Password && this.Login==this.login){
                        this.$refs.message.success('You Pass the Authorization Succesfuly')
                        setTimeout(() => {
                            this.$router.push("/cheakmessage");
                        },1000)
                        this.$router.push("/forusers");
                        }
                        else if( this.login=='' || this.Password==''){
                            this.$refs.message.warning('You have to Enter Login and Password')
                        }  
                }
                catch{
                    this.$refs.message.error('Login or Password is incorrict')
                }
            }
       
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
.passwordicon{
    padding-right: 15px;
}
 .field-icon {
  float: right;
  margin-top: -35px;
  position: relative;
  padding-right: 10px;
  margin-right: 10px;
  z-index: 2;
}
.ikoncha{
    font-size: 18px;
}
.main-page{
    /* background: url('@/assets/medical1.jpg') no-repeat center center / cover; */
    width: 100%;
    height: 100vh;
    position: relative;
    opacity: 0.9;
}
.main-back{
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #FFFFFF;
}
.grid-wrapper{
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 9fr;
    height: 100vh;
}
.header-top{
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.box{
    display: flex;
    justify-self: center;
    align-self: center;
    width: 550px;
    height: 380px;
    padding: 30px;
    background: #FAFAFA;
    box-shadow: 0px 1px 5px rgba(62, 62, 62, 0.25);
    border-radius: 8px;
}
.boxx{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    text-align: center;
    border-radius: 8px;
}
.box_title {
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
}
.boxx .box_title h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 100%;
    color: #141414;
}
.box_paragrf{
    text-align: start;
    width: 100%;
    margin: 10px 0;
}
.box_paragrf p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #141414;
}
.box_form{
    text-align: start;
    width: 100%;
}
.forms{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.loginn{
    width: 100%;
    background: #E1E1E1;
    border-radius: 8px;
    height: 50px;
    margin: 10px 0;
}
.inputt{
    padding: 17px;
    width: 100%;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    color: #141414;
    border: none;
    outline: none;
    background: transparent;
}

.password{
    width: 100%;
    background: #E1E1E1;
    border-radius: 8px;
    height: 50px;
    margin: 10px 0;
    margin: 10px 0;
}
.buttons{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
}
.buttonss{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.buttonss .btnn{
    border: none;
    outline: none;
    padding: 12px 48px;
    background: #F77F00;
    border-radius: 8px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
}
.question_btn{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}
.links{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
}
.question_btn p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    color: #141414;
}
.form-controls{
    padding: 17px;
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    color: #141414;
}
.icons{
    color: rgb(158,158,158);
    font-size: 24px;
}
</style>