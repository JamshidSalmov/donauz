export default{
    state: {
        users: {
            columns: ["Name", 'Id',"Duration", "Course_name", "Created_at"],
            rows: [
              {
                Name: "Jamshid",
                Id:"1",
                Duration: "1-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.29",
              },
              {
                Name: "Shoxruh",
                Id:"2",
                Duration: "2-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.30",
              },
              {
                Name: "Oybek",
                Id:"3",
                Duration: "3-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.06.1",
              },
              {
                Name: "Urol",
                Id:"4",
                Duration: "1-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.29",
              },
              {
                Name: "Shermat",
                Id:"5",
                Duration: "2-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.30",
              },
              {
                Name: "Bobur",
                Id:"6",
                Duration: "3-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.06.1",
              },
              {
                Name: "Suhrob",
                Id:"7",
                Duration: "1-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.29",
              },
              {
                Name: "Shahzod",
                Id:"8",
                Duration: "2-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.30",
              },
              {
                Name: "Abdug'ani",
                Id:"9",
                Duration: "3-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.06.1",
              },
              {
                Name: "Maqsud",
                Id:"10",
                Duration: "1-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.29",
              },
              {
                Name: "Xisrav",
                Id:"11",
                Duration: "2-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.30",
              },
              {
                Name: "Hushnud",
                Id:"12",
                Duration: "3-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.06.1",
              },
              {
                Name: "Azamat",
                Id:"13",
                Duration: "1-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.29",
              },
              {
                Name: "Rasul",
                Id:"14",
                Duration: "2-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.05.30",
              },
              {
                Name: "Javlon",
                Id:"15",
                Duration: "3-Mavzu: Frontendga kirish",
                Course_name: "Frontend",
                Created_at: "2022.06.1",
              },
            ],
          },
    },
    actions: {

    },
    mutations: {
        DeleteRow(state, index){
            console.log(index)
            state.users.rows.splice(index, 1)
        },
        addUser(state, user){
            state.users.rows.push(user)
        }
    },
    getters: {
      users(state){
          return state.users
      }
    },
    module: {

    }
}