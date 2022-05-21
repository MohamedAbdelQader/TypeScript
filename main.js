import { Cars,Color } from "./Classes/car.class";

// import { Cars, Color } from "./Classes/car.class";
function greeter(person) {
    return "hello " + person;
}
let user = "mohamed";
document.body.textContent = greeter(user);
let age = 23;
let Name = "mohamed";
console.log(Name);
class testclass {
}
let testclass1 = new testclass();
var testenum;
(function (testenum) {
    testenum["car"] = "Car";
    testenum["becycle"] = "\u0639\u062C\u0644\u0629";
    testenum["plane"] = "Plane";
})(testenum || (testenum = {}));
let testenum1 = testenum.becycle;
console.log(testenum1);
let interfaces1;
let hello;
function sayHello(name) {
    return "Hello " + name;
}
let hi = sayHello("Mohamed");
console.log(hi);
function hii(gg) {
    var ggg = gg;
    return gg;
}
let hii1 = hii("hii");
let person1 = {
    firstName: "Mohamed",
    lastName: "Abdelkader",
    thirdName: "Mohamed",
};
console.log(person1);
let person2 = {
    firstName: "Mostafa",
    lastName: "Hapater",
    age: 23
};
let E1 = {
    firstName: "Mostafa",
    lastName: "Khaled",
    age: 25,
    Salary: 8000,
};
console.log(person2);
console.log(E1);
let P1 = new Cars(10, 20);
P1.setcolor(Color.blue);
P1.display();
console.log(P1.add(20, 10));
