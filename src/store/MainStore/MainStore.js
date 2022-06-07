export default{
    state: {
        rowKatigoriess:[
            {
                katigory:"Uy va hovli uchun",
                img:"uyhovli.png",
                id:'1'

            },
            {
                katigory:"Bolalar uchun",
                img:"bear.png",
                id:'2'

            },
            {
                katigory:"Sovg'alar",
                img:"sovga.png",
                id:'3'
            },
            {
                katigory:"Automabillar uchun",
                img:"cars.png",
                id:'4'
            },
            {
                katigory:"Smartfonlar",
                img:"phone.png",
                id:'5'

            },
            {
                katigory:"Guzallik va salomatlik",
                img:"beauty.png",
                id:'6'

            },
            {
                katigory:"Quloqchin",
                img:"quloqchin.png",
                id:'7'

            },
            {
                katigory:"Smart soatlar",
                img:"smart.png",
                id:'8'

            },
            {
                katigory:"Kalonkalar",
                img:"kalonka.png",
                id:'9'
            },
            {
                katigory:"Kitoblar",
                img:"kitob.png",
                id:'10'
            },
            {
                katigory:"Voyaga yetganlar uchu",
                img:"foradolt.png",
                id:'11'

            },
            {
                katigory:"Bolalar uchun",
                img:"toys.png",
                id:'12'

            }
        ],
        rows:[
                {
                    img:"choyshab.png",
                    title:'Choyshab Lilet',
                    stars: "NewProducts/star.png",
                    star_value:"4.3",
                    id:"13",
                    price:"149.000",
                },
                {
                    img:"NewProducts/phone.png",
                    title:'Samsung',
                    stars: "NewProducts/star.png",
                    star_value:"4.5",
                    id:"14",
                    price:"4.000.000",
                },
                {
                    img:"NewProducts/book.png",
                    title:'Drama',
                    stars: "NewProducts/star.png",
                    star_value:"4.6",
                    id:"15",
                    price:"50.000",
                },
                {
                    img:"NewProducts/book.png",
                    title:'Peysa',
                    stars: "NewProducts/star.png",
                    star_value:"4.2",
                    id:"15",
                    price:"40.000",
                },
                {
                    img:"NewProducts/car1.png",
                    title:'Technical part',
                    stars: "NewProducts/star.png",
                    star_value:"4.1",
                    id:"14",
                    price:"200.000",
                },
                {
                    img:"NewProducts/toys1.png",
                    title:'Toys',
                    stars: "NewProducts/star.png",
                    star_value:"4.5",
                    id:"18",
                    price:"140.000",
                },
                {
                    img:"NewProducts/phone1.png",
                    title:'Mi Mobile',
                    stars: "NewProducts/star.png",
                    star_value:"4.6",
                    id:"19",
                    price:"3.000.000",
                },
                {
                    img:"choyshab.png",
                    title:'Choyshab Lilet',
                    stars: "NewProducts/star.png",
                    star_value:"4.3",
                    id:"20",
                    price:"149.000",
                }
            ],
        
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        rowss(state){
            return state.rows
          },
        rowKatigories(state){
            return state.rowKatigoriess
        },
    },
    module: {

    }
}