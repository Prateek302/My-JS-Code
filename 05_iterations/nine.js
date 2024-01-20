const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);


const ShoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },

    {
        itemName : "py Course",
        price : 299
     },


    {
        itemName : "android Course",
        price : 3999    
    },


    {
        itemName : "java Course",
        price : 29
    },
]

const totalPrice = ShoppingCart.reduce( (acc, item) => (acc + item.price),0)
console.log(totalPrice);