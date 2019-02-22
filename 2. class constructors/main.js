class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}

let userOne  = new User('hasan@mail.com', 'Hasan');

let userTwo  = new User('tushar@gmail.com', 'Tushar');


console.log("userOne", userOne);
console.log("userTwo", userTwo);