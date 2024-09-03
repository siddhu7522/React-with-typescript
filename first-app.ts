let userName = "max";
//will not work if we assign number to string
//userName=2

let Name: string;

Name = "pavan";

///union types

let userID: string | number = "abc1";
userID = 123;


//Objects

let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}
user = {
    name: "pavan",
    age: 21,
    isAdmin: false,
    id: 1
}

///Arrays

let hobbies: string[]
hobbies = ["a", "b", "c"]

///functions


function add(a: number, b: number): number {
    const result = a + b;
    return result
}

//function types

function calculate(a: number, b: number, calcFn: (a: number, b: number) => number) {
    calcFn(a, b)
}

calculate(2, 3, add)

//creating custom types for re-use

type Employee = {
    id: number
    name: string;
    email: string;
}
let employee: Employee;

employee = {
    id: 1,
    name: "pavan",
    email: "123@gmail.com"
}

//interface is preferred instead of types for creating object type definition

interface Credentials {
    email: string;
    password: string
}

let credentials: Credentials = {
    email: "sidhu@gmail.com",
    password: "123"
}

//implementing inteface with classes

class Authentication implements Credentials{
    email: string;
    password: string;
    username: string;
}
function login(credentials: Credentials){

}
login(credentials)

//Merging types. We use " & " operator

// type Admin={
//     permissions: string[],
// }
// type AppUser={
//     username: string
// }

// type AppAdmin= Admin & AppUser

// let admin: AppAdmin={
//     permissions:["abc","efg"],
//     username:"pavan"
// };


//using interfaces for merging 

interface Admin{
    permissions: string[]
} 
interface AppUser{
    username: string
}

interface AppAdmin extends Admin, AppUser{}

let admin: AppAdmin={
    permissions: ["abc","bca"],
    username:"abc"
}

//Being specific with literal types

// A role variable should only store particular values.It should not store other than these

type Role= "admin" | "user" | "editor"; 
let role:Role

role="admin";
role="user";
role="editor";

//Adding type guards

function performAction(action: string|number, role:Role){
    if(role=== "admin" && typeof action==="string"){
        //do some action
    }
}