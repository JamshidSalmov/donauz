<template v-slot:main>
  <div>
      <div>
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
import {mapMutations} from "vuex"
export default {
    data(){
        return{
            Name: "",
            Id:"",
            Duration: "",
            Course_name: "",
            Created_at:"",
        }
    },
    methods:{
         ...mapMutations(["addUser"]),
        AddUser(){
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
    }
}
</script>

<style scoped>
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