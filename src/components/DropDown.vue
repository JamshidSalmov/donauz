<template>
  <div>
    <div class="sub_miny">
        <div class="w-100" v-for="(item,i) in dropdown" :key="i">
            <router-link class="link" :to="item.link"><h4>{{item.title}}</h4></router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { mdbBtn,mdbIcon } from 'mdbvue';
import {mapGetters} from 'vuex'
export default {
components:{
    mdbBtn,
    mdbIcon,
},
data(){
    return{
        // shw_drop: false,
    }
},
computed:{
    ...mapGetters(['dropdown'])
},
methods:{
    // ...mapMutations([''])
show(){
    console.log(this.dropdown)
}
}
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
.link{
    text-decoration: none;
}
.sub_miny{
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
 }
 .sub_miny h4{
    padding: 10px 20px;
    margin: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #141414;
    text-align: start;
    border-bottom: 1px solid rgba(124, 121, 124, 0.5);
 }

 .sub_miny div{
     background: #FFFFFF;
 }
 .sub_miny div:first-child{
     background: #F77F00;
 }
 .sub_miny div:first-child h4{
     color: #FFFFFF;
 }
.sub_miny div:last-child h4{
   border-radius: 0px 0px 10px 10px;
   border-bottom: none;
 }
.sub_miny h4:active, .sub_miny h4:hover{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #FFFFFF;
    background: #F77F00;
 }
</style>