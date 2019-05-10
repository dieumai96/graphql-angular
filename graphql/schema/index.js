const { buildSchema } = require('graphql');

module.exports = buildSchema(`


type Employee {
  _id: ID!
  password: String
  email : String
  roles : [String]
  birthDate : Int
  fullName : String
  avatar : String
  note : String
  status : Int,
  fullNameKhongDau : String
}
type Building {
  _id : ID!
  address : String
  blocks : [String]
  diaChinh : DiaChinh
  code : String
  hotLine : String
  name : String
  status : Int
  totalFlat : Int
  createdID : String
  image : String
}

input EmployeeInput {
  phone: String!
  password: String!
  email : String
  roles : [String!]!
  birthDate : Int
  fullName : String!
  avatar : String
  note : String
  status : Int
  fullNameKhongDau : String

}

input UpdateEmployee {
  email : String
  roles : [String]
  birthDate : Int
  fullName : String
  avatar : String
  note : String
  employeeID : String!
}

type Status {
  status : Int!
  msg : String!
}

type DiaChinh {
  codeHuyen : String
  huyen : String
  tinh : String
  codeTinh : String
}

input BuildingInput {
  address : String!
  blocks : [String!]!
  code : String!
  diaChinh : String!
  hotLine : String!
  name : String!
  status : Int!
  totalFlat : Int!
  createdID : String!
  image : String!

}

type RootQuery {
    employees: [Employee!]!
    deleteEmployee(id: String!): Status!
    getEmployee( id : String!) : Employee!
  }
type RootMutation {
    createEmployee(employeeInput: EmployeeInput): Employee
    updateEmployee(employeeInput : UpdateEmployee) : Employee
    createBuilding(buildingInput : BuildingInput) : Building 

}


schema {
    query: RootQuery
    mutation: RootMutation
}
`);
