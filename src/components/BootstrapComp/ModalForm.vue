<template>
  <div class="fixedP">
      <div class="box">
          <div class="header d-flex justify-content-between align-items-center w-100 px-3">
                <h4 class="m-0 p-0">Rigestr New User</h4>
                <span><router-link :to="'/table'"><button  class="btn btn-danger px-3 m-0">X</button></router-link></span>
            </div>
            <div class="p-4">
             <input type="text" class="form-control my-2" placeholder="Your name" v-model="Name">
             <input type="number" class="form-control my-2" placeholder="Your Id" v-model="Id">
             <input type="text" class="form-control my-2" placeholder="Your subject" v-model="Duration">
             <input type="text" class="form-control my-2" placeholder="Your course" v-model="Course_name">
             <input type="date" class="form-control my-2" placeholder="When you allow?" v-model="Created_at">
            </div>
            <div class="p-4 buttons">
                <div>
                    <router-link :to="'/table'"><button @click="closefunk()" class="btn btn-danger">Close</button></router-link>
                </div>
                <div>
                    <router-link :to="'/table'"><button @click="AddUser()" class="btn btn-success">OK</button></router-link>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
data(){
    return{
        Name: "",
        Id:"",
        Duration: "",
        Course_name: "",
        Created_at:"",
        id:this.$route.params.id
    }
},
computed:{
    ...mapGetters(['users'])
},
methods: {
    ...mapMutations(["addUser"]),
 AddUser(){
     console.log('Jamshid qara',this.id)
     let user={
         Name:this.Name,
         Id:this.Id,
         Duration: this.Duration,
         Course_name: this.Course_name,
         Created_at: this.Created_at
     }
     this.addUser(user)
 },
 closefunk(){
     console.log('jamshid qara')
 }
},
 created(){
    if(this.id != 0){
        this.Name=this.users.rows[this.id-1].Name
        this.Id=this.users.rows[this.id-1].Id
        this.Duration=this.users.rows[this.id-1].Duration
        this.Course_name=this.users.rows[this.id-1].Course_name
        this.Created_at=this.users.rows[this.id-1].Created_at
    }
    else{
        console.log("bu yamgi user")
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
.header{
    height: 50px;
    background: #eee;
}
.fixedP{
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
}
.box{
    background: rgb(255, 255, 255);
    width: 500px;
    height: 420px;
    overflow: hidden;
}
.buttons{
    display: flex;
    align-items: center;
    justify-content: end;
}
.buttons button{
    margin-left: 30px;
    padding: 5px 20px;
}
</style>