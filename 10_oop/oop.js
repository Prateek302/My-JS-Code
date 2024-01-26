const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log(
        //     "got usee details from DB"
        // );

        // console.log(`Username : ${this.username}`);
        
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

 function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }


    // return this
 }

 const userOne = new User("Hitesh", 12, true)
 const userTwo = new User("ChaiAurCode", 11, false)

//  console.log(userOne.constructor);
//  console.log(userTwo);



