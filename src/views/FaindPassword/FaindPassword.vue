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
                         <h2>Parolni tiklash</h2>
                     </div>
                    <div class="box_form">
                        <form class="forms">
                            <div class="box_paragrf">
                                <p>Yangi parolingizni kiriting</p>
                            </div>
                            <div class="password">
                                <div class="pass_input">
                                    <input :type="passwordFieldType" id="parol" class="inputt passwordicon w-100 m-0" placeholder="Parol" v-model="password">
                                    <span  @click="eyesShov" class="field-icon"><mdb-icon class="ikoncha" :icon="eyess" /></span>
                                    <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.password.$dirty && !$v.password.required">Enter Your Password</small>
                                    <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.password.$dirty && !$v.password.minLength ">Password must have at least {{ $v.password.$params.minLength.min }} semvoll.</small>

                                </div>
                            </div>
                            <div class="box_paragrf">
                                <p>Yangi parolingizni qayta kiriting</p>
                            </div>
                            <div class="password">
                                <div class="pass_input">
                                    <input :type="passwordFieldTypeKey" id="parol" class="inputt passwordicon w-100 m-0" placeholder="Parolni qayta tering" v-model="keys">
                                    <span  @click="eyesShovkey" class="field-icon"><mdb-icon class="ikoncha" :icon="eyes" /></span>
                                    <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.keys.$dirty && !$v.keys.sameAsPassword">Passwords must be identical.</small>
                                </div>
                            </div>
                            <div class="buttonss">
                                <button @click="FindPassword" class="btnn">Yuborish</button>
                            </div>
                        </form>
                    </div>
                 </div>
            </div>
       </div>
    </div>
    <notes ref="message"></notes>
</div>
</template>

<script>
import { required,sameAs,minLength } from 'vuelidate/lib/validators'
import { mdbBtn,mdbIcon } from 'mdbvue';
export default {
    components: {
      mdbBtn,
      mdbIcon,
    },
    validations: {
        password: {
        required,
        minLength: minLength(6),
        },
        keys: {
        sameAsPassword: sameAs('password')
        }
    },
    data() {
        return {
         passwordType:'password',
         eyes: 'eye',
         eyess:'eye',
         password:'',
         keys:'',
         passwordFieldType: "password",
         passwordFieldTypeKey: "password",
        }
    },
    mounted(){
        localStorage.Login = '';
    },
    methods: {
       eyesShov(){
             this.eyess = this.eyess ==='eye' ? 'eye-slash' : 'eye';
            this.passwordFieldType =this.passwordFieldType ==='password' ? 'text' : 'password';
        },
        eyesShovkey(){
             this.eyes = this.eyes ==='eye' ? 'eye-slash' : 'eye';
            this.passwordFieldTypeKey =this.passwordFieldTypeKey ==='password' ? 'text' : 'password';
        },
        FindPassword(){
          if (this.$v.$invalid){
               this.$v.$touch();
               this.$refs.message.warning('please_fill')
               return false;
            } 
            else{
                this.$router.push("/cheakmessage");
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
    height: 415px;
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
    margin-top: 30px;
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

.links{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
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