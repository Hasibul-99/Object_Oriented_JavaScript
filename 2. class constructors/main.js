class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    logIn(){
        console.log(this.email, "Log in");
        return this;
    }
    logOut(){
        console.log(this.email, 'Log out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.name, "score is now", this.score);
        return this;
    }
}

let userOne  = new User('hasan@mail.com', 'Hasan');

let userTwo  = new User('tushar@gmail.com', 'Tushar');


// console.log("userOne", userOne);
// console.log("userTwo", userTwo);

// userOne.logIn();
// userTwo.logOut();

userOne.logIn().updateScore().updateScore().logOut();