<template>
  <div class="Main" style="overflow-y:scroll">
    <div
      class="header_top"
      style="text-align: start; background: rgb(226, 221, 221)"
    >
      <h3 style="font-weight: bold; font-family: sans-serif; margin: 15px 0" 
      >
        Lessons
      </h3>
    </div>
    <div class="content">
      <div class="table_top">
        <div class="search">
          <div class="lupa">
            <label for="lupaa"><i class="fas fa-search"></i></label>
          </div>
          <div class="inputt">
            <input id="lupaa" type="text" class="search_input" v-model="searchQuary" />
          </div>
        </div>
        <div class="button_control">
          <div>
            <button class="btn_one"><i class="fas fa-filter"></i></button>
          </div>
          <div>
            <select class="form-control" style="max-height:30px" v-model="selected">
                <option value="" disabled selected hidden>Выбирать...</option>
                <option v-for="(col, index) in users.columns"
                :key="index"
                :value="col">{{col}}</option>
            </select>
          </div>
          <div>
            <router-link :to="'/modalform/'+0"><button class="btn_three btn btn-success" style="outline: none"><span>+</span>Create</button></router-link>
          </div>
          <div class="settings">
            <div>
              <select class="form-control selictor" style="transition:none; box-shadow:none;" v-model="settings">
                  <option value="" disabled selected hidden>Выбирать...</option>
                  <option v-for="(col, index) in settings_item"
                  :key="index"
                  :value="col">{{col}}</option>
              </select>
            </div>
            <div>
                <button class="btn_four"><img src="@/assets/setting.png" width="18px" style="outline:none;"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="tbody_scroll">
        <table class="w-100" :class="{'Default': change_Comp =='Default','Dark': change_Comp == 'Dark', 'Small': change_Comp == 'Small',}">
          <thead>
                <tr>
                    <th>Id</th>
                    <th v-for="(col, index) in users.columns" :key="index">{{ col }}</th>
                    <th> </th>
                </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in dataPage"
              :key="index"
            >
              <td>{{ index + 1 }}</td>
              <td v-for="(col, index) in users.columns" :key="index">{{row[col]}}</td>
              <td>
                <button><router-link :to="'/modalform/'+ row.Id">
                <i class="fas fa-pencil-alt"
                  ></i></router-link>
                </button>
                <button @click="deletRow(index)">
                  <span>
                    <i
                    class="far fa-trash-alt"
                  ></i>
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pagenation">
        <div class="buttons">
          <button>{{ double_left }}</button>
          <button>{{ one_left }}</button>
          <button v-for="(i,index) in tollPagina()" :key="index" @click="getPage(i)">{{i}}</button>
          <button>{{ one_right }}</button>
          <button>{{ double_right }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex';
export default {
  data() {
    return {
      double_right: ">>",
      one_right: ">",
      double_left: "<<",
      one_left: "<",
      searchQuary: '',
      felter_by:'salom',
      selected: '',
      settings: '',
      settings_item: ["Dark","Small","Default"],
      change_Comp: 'Default',
      devayder: 3,
      dataPage: [],
    };
  },
  computed: {
      ...mapState(['users']),
      ...mapGetters(['users']),
      changeComp(){
        return this.changeFunk()
      },
      filterdUsers1(){
         this.change_Comp=this.changeComp
          return this.felterFunk()
      },

  },
  methods: {
      ...mapMutations(['DeleteRow']),

      deletRow(index){
          this.DeleteRow(index)
      },
      felterFunk(){
        if(this.selected ==""){
          return this.users.rows.filter(row => row.Name.toLowerCase().includes(this.searchQuary.toLowerCase()))
        }
        else if(this.selected == "Name"){
            return this.users.rows.filter(row => row.Name.toLowerCase().includes(this.searchQuary.toLowerCase()))
        }
        else if(this.selected =="Id"){
            return this.users.rows.filter(row => row.Id.toLowerCase().includes(this.searchQuary.toLowerCase()))
        }
        else if(this.selected =="Duration"){
            return this.users.rows.filter(row => row.Duration.toLowerCase().includes(this.searchQuary.toLowerCase()))
        }
        else if(this.selected =="Course_name"){
            return this.users.rows.filter(row => row.Course_name.toLowerCase().includes(this.searchQuary.toLowerCase()))
        }
        else if(this.selected =="Created_at"){
            return this.users.rows.filter(row => row.Created_at.toLowerCase().includes(this.searchQuary.toLowerCase()))
        }
         
      },
      changeFunk(){
        if(this.settings == "")
        {
          return "Default"
        }
        else if(this.settings =="Dark"){
          return "Dark"
        }
        else if(this.settings =="Small"){
          return "Small"
        }
        else if(this.settings =="Default"){
          return "Default"
        }
      },
      tollPagina(){
        return Math.ceil(this.users.rows.length/this.devayder)
      },
      getPage(i){
        this.dataPage=[]
        let a=i*this.devayder-i
        let b=i*this.devayder
        for(let j=a; j<b; j++){
          this.dataPage.push(this.users.rows[j])
        }
      }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.tbody_scroll{
  height: 140px;
  width: 100%;
  overflow-y: scroll;
}
.Main {
  height: 100vh;
  width: 100%;
  padding: 15px;
  background: rgb(226, 221, 221);
}
.content {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ced4da;
}
.table_top {
  width: 100%;
  min-height: 40px;
  background: #fff;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  border-radius: 30px;
  border: 1px solid #ced4da;
  max-width: 30%;
  max-height: 30px;
}
.button_control {
  margin-right: 10px;
  max-width: 65%;
  max-height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
}
.button_control button {
  margin: 0 5px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 0 5px;
  background: transparent;
  outline: none;
  font-size: 14px;
  min-height: 30px;
}
.lupa {
  width: 15%;
  max-height: 30px;
  border-radius: 30px 0 0 30px;
}
.lupa i {
  color: rgb(89, 89, 204);
  font-size: 14px;
}
.inputt {
  width: 85%;
}
.search_input {
  width: 100%;
  outline: none;
  border: none;
  color: black;
  max-height: 30px;
  font-size: 18px;
  border-radius: 0 30px 30px 0;
}
.btn_one i {
  color: blue;
  font-size: 14px;
}
.btn_two i {
  margin-left: 5px;
  color: blue;
  font-size: 14px;
}
.btn_three span {
  margin-right: 5px;
}


.pagenation {
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(190, 188, 188);
  border-radius: 0 0 5px 5px;
}
.buttons button {
  max-height: 30px;
  text-align: center;
  outline: none;
  border: none;
  background: #fff;
  margin: 0 1px;
  width: 25px;
  border-radius: 3px;
  font-size: 14px;
  min-height: 30px;
  font-weight: 600;
}
.buttons button:hover{
  background: blue;
  color: #fff;
}
.settings{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ced4da;
  border-radius: 5px;
  max-height: 30px;

}
.settings button{
  outline: none;
  border: none;
  max-height: 30px;
  font-size: 16px;
  z-index: -10;
}
.selictor{
  border: none;
  outline: none;
  max-height: 28px;
  min-width: 60px;
  font-size: 16px;
}
/* Default Version======= */
.Default thead{
  background: rgb(190, 188, 188); 
  width: 100%;
}
.Default tr{
  height: 35px;
}
.Default th,
.Default td {
  border-top: 1px solid #ced4da;
  font-size: 14px;
  color: black;
  text-align: start;
}
.Default th:nth-child(1) {
  width: 5%;
  text-align: center;
}
.Default th:nth-child(7) {
  width: 10%;
  text-align: center;
}
.Default td {
  font-weight: 600;
}
.Default td button {
  background: transparent;
  border: none;
  outline: none;
  padding: 0 5px;
  margin: 0 5px;
}
.Default td:nth-child(1) {
  width: 5%;
  text-align: center;
}
.Default td:nth-child(7) {
  width: 10%;
  text-align: center;
}
.Default td i {
  font-size: 16px; 
  color: green;
}
.Default td span i {
  font-size: 16px; 
  color: red;
}
/* Default Version======= */

/* Dark Version ======= */
.Dark thead{
  background: rgb(39, 39, 39); 
  width: 100%;
}
.Dark tbody{
  background: gray; 
  width: 100%;
}
.Dark tr{
  height: 35px;
}
.Dark th,
.Dark td {
  border-top: 1px solid #ced4da;
  font-size: 14px;
  color: #fff;
  text-align: start;
}
.Dark th:nth-child(1) {
  width: 5%;
  text-align: center;
}
.Dark th:nth-child(7) {
  width: 10%;
  text-align: center;
}
.Dark td {
  font-weight: 600;
}
.Dark td button {
  background: transparent;
  border: none;
  outline: none;
  padding: 0 5px;
  margin: 0 5px;
}
.Dark td:nth-child(1) {
  width: 5%;
  text-align: center;
}
.Dark td:nth-child(7) {
  width: 10%;
  text-align: center;
}
.Dark td i {
  font-size: 16px; 
  color: orange;
}
.Dark td span i {
  font-size: 16px; 
  color: red;
}
/* Dark Version ======= */

/* Small Version ======= */
.Small thead{
  background: rgb(190, 188, 188); 
  width: 100%;
}
.Small tr{
  height: 20px;
}
.Small th,
.Small td {
  border-top: 1px solid #ced4da;
  font-size: 10px;
  color: black;
  text-align: start;
}
.Small th:nth-child(1) {
  width: 5%;
  text-align: center;
}
.Small th:nth-child(7) {
  width: 10%;
  text-align: center;
}
.Small td {
  font-weight: 500;
}
.Small td button {
  background: transparent;
  border: none;
  outline: none;
  padding: 0 5px;
  margin: 0 5px;
}
.Small td:nth-child(1) {
  width: 5%;
  text-align: center;
}
.Small td:nth-child(7) {
  width: 10%;
  text-align: center;
}
.Small td i {
  font-size: 10px; 
  color: green;
}
.Small td span i {
  font-size: 10px; 
  color: red;
}
/* Small Version ======= */

</style>