import Vue from 'vue'
import Vuex from 'vuex'
import RigstrPro from './market/RigstrProduct'
import Table from "@/store/Table/Table.js"
import MainStore from "@/store/MainStore/MainStore.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dropdown :[
      {
        title: "Profil",
        link: "/login"
      },
      {
        title: "Mening sevimlilarim",
        link: "/#"
      },
      {
        title: "Buyurtmalar tarixi",
        link: "/detail"
      },
      {
        title: "Sozlanmalar",
        link: "/savat"
      },
      {
        title: "Chiqish",
        link: "/main"
      }
    ],
    dropdownTwo :[
      {
        title: "Profil",
        link: "/login"
      },
      {
        title: "Mening sevimlilarim",
        link: "/login"
      },
      {
        title: "Buyurtmalar tarixi",
        link: "/login"
      },
      {
        title: "Sozlanmalar",
        link: "/login"
      },
      {
        title: "Chiqish",
        link: "/main"
      }
    ],
    searchItem :[
      {
        
        title: "Smart Watch (M16Plus)",
        id:"21",
        link: "/#",
        price: '150.000',
        stars: "",
        img:"/small.png"
      },
      {
        title: "Smart Watch (K16Plus)",
        id:"22",
        link: "/#",
        price: '200.000',
        stars: "",
        img:"/small.png"
      },
      {
        title: "Smart Watch (D16Plus)",
        id:"23",
        link: "/#",
        price: '300.000',
        stars: "",
        img:"/small.png"
      },
      {
        title: "Smart Watch (S16Plus)",
        id:"24",
        link: "/#",
        price: '500.000',
        stars: "",
        img:"/small.png"
      },
      {
        title: "Smart Watch (Y16Plus)",
        id:"25",
        link: "/#",
        price: '400.000',
        stars: "",
        img:"/small.png"
      }
    ]
  },
  actions: {
    //for example=========
    // async fetch_weather(ctx, place){
    //   const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=metric&APPID=b08763deb4ab9028285878cfdbb46ad0")
    //   const data = await response.json()
    //   ctx.commit('updateWeather', data)
    // },
  
  },
  
  mutations: {
  //for example========

  // updateWeather(state, data){
  //   state.weather = data;
  // },

  // HavolaQushish(state,newName){
  //   state.havolalar.push(newName); 
  // },

  // HavolaniUchirish(state,havolaId){
  //   state.havolalar.splice(havolaId,1)
  // },
  },
  getters: {
    // for example=====
    dropdown(state){
     return state.dropdown
   },
   dropdownTwo(state){
    return state.dropdownTwo
  },
   searchItem(state){
    return state.searchItem
  }
  },
  modules: {
    // for example ===
    RigstrPro,
    Table,
    MainStore,
  }
})
