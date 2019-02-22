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
};

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email;
        })
    }
};

let userOne  = new User('hasan@mail.com', 'Hasan');

let userTwo  = new User('tushar@gmail.com', 'Tushar');

let admin = new Admin('admin@gmail.com', 'Admin');

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log("users", users);