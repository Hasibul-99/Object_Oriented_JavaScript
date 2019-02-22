class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    logIn(){
        console.log(this.email, "Log in");
    }
    logOut(){
        console.log(this.email, 'Log out');
    }
}

let userOne  = new User('hasan@mail.com', 'Hasan');

let userTwo  = new User('tushar@gmail.com', 'Tushar');


// console.log("userOne", userOne);
// console.log("userTwo", userTwo);

userOne.logIn();
userTwo.logOut();