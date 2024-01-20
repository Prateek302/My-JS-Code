//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2023, 0, 23, 5 , 3)
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-24-2023")
console.log(myCreatedDate2.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(`Month is ${newDate.getMonth() +1}` );
console.log(newDate.getDay());


newDate.toLocaleString( 'default',{
    weekday: "long",
    
})

console.log(newDate)