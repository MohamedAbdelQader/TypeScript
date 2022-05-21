import { IEmployee } from './employee.interface';
import {IPersonal}from "./person.interface";
import { Parent } from "./Parent.class";
import { Cars, Color } from "./Classes/car.class";


function greeter(person:string){
    return "hello "+person;
}

let user ="mohamed";
document.body.textContent=greeter(user);

let age :number=23;

let Name:string="mohamed";
console.log(Name);

class testclass{}
let testclass1=new testclass();

enum testenum{
    car="Car",
    becycle="عجلة",
    plane="Plane",
}
let testenum1=testenum.becycle;
console.log(testenum1);

interface interfaces{}
let interfaces1:interfaces;
let hello :number | string | boolean;

function sayHello(name:string):string{
    return "Hello "+name;
}

let hi = sayHello("Mohamed");

console.log(hi);

function hii<g>(gg:g):g{
    var ggg:g=gg;
    return gg;
}
let hii1=hii<string>("hii");

interface IPerson{
    firstName:string;
    lastName:string;
    thirdName:string;
}

let person1:IPerson={
    firstName:"Mohamed",
    lastName:"Abdelkader",
    thirdName:"Mohamed",
}

console.log(person1);
let person2:IPersonal={
    firstName:"Mostafa",
    lastName:"Hapater",
    age: 23
}
let E1:IEmployee={
    firstName:"Mostafa",
    lastName:"Khaled",
    age:25,
    Salary:8000,
}
console.log(person2)

console.log(E1);


let P1:Cars=new Cars(10,20);
P1.setcolor(Color.blue);
P1.display();
console.log(P1.add(20, 10));