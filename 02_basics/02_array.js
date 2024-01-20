const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);



const All_heroes = marvel_heroes.concat(dc_heroes)
// console.log(All_heroes);

const All_heroes_new = [...marvel_heroes, ...dc_heroes]
// console.log(All_heroes_new);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Prateek"))
console.log(Array.from("Prateek"));
console.log(Array.from({name : "Prateek"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));