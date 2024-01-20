// singleton

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Prateek",
    "full name": "Prateek Srivastav",
    [mysym]: "mykey1",  
    mysym: "mykey1",                    //symbol as key
    age: 18,
    location: "Jaipur",
    email: "prateek@kiet.edu",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]


}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mysym]);

JsUser.email = "prateek@gooogle.com"
// Object.freeze(JsUser)
JsUser.email="prateek@dell.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




//values of mostly dot se access krte h but kuchh cases me ya interview me square bracket se hi kr sakte h koi option ni hota
