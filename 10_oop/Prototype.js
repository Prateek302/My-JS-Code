// let myName = "hitesh          "
// let myChannel = "chai    "

// console.log(myName.truelength);

 
let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidey powe is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}


// heroPower.hitesh()
// myHeroes.hitesh()

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// myHeroes.heyHitesh()
// heroPower.heyHitesh()


//inheritance

const User = {
    name: "chai",
    email: "google.com"
}

const Teacher = {
    makeVideo: true
}

const TecchingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TecchingSupport
}

Teacher.__proto__ = User

//modern

Object.setPrototypeOf(TecchingSupport, Teacher)


let anotherUsername = "chaiAurCode          "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"prateek".trueLength()
"icetea".trueLength()