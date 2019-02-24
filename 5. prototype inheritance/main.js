function User (email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;

    console.log(this.name, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.name, 'has logged out');
}

function Admin(...args) {

    // args = ['admin@gmail.com', 'Admin']

    User.apply(this, args)
    this.role = 'Admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
    users = users.filter(user =>  {
        return user.email != u.email;
    })
}

var userOne = new User('hasan@gmail.com', 'Hasan');

var userTwo = new User('Tushar@gmail.com', 'Tushar');

var admin = new Admin('admin@gmail.com', 'Admin');

var users = [userOne, userTwo, admin];

// console.log("UserOne", userOne);
// userTwo.login();

console.log(admin);