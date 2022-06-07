<template>
 <div>
    <div class="selected_item">
      <span>Select User</span>
    </div>
    <div class="dropdown_popover">
        <input @blur="salom" @focus="spector" type="text" v-model="searchQuary" placeholder="Izlash...">
        <div v-if="showTitle" class="options">
            <div v-for="(item, index) in filtredList" :key="index">
                <h4>{{item.title}}</h4>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
    data(){
        return{
            searchQuary: '',
            showTitle:false,
        }
    },
    computed:{
        ...mapGetters(['dropdown']),
        filtredList(){
            return this.felterFunk()
        },
        spektor(){
            if(this.filtredList.lenght>0){
                return this.showTitle=!this.showTitle
            }
        }
    },
    methods:{
       felterFunk(){
          return this.dropdown.filter(row => row.title.toLowerCase().includes(this.searchQuary.toLowerCase())) 
       },
       spector(){
           this.showTitle=!this.showTitle
       },
       salom(){
           this.showTitle=!this.showTitle
            console.log('blur is working')
       }
    }

}
</script>

<style scoped>
.options{
    width: 300px;
    margin: 0 auto;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-height: 150px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.options div{
    border: 1px solid gray;
    width: 100%;
}
input{
    margin-bottom: 10px;
    width: 300px;
    min-height: 30px;
}

</style>