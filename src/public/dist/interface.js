"use strict";
const user1 = {
    name: 'Hayes',
    id: 0
};
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user2 = new UserAccount("Murphy", 1);
function ceateUser() {
    return new UserAccount("Murphy2", 2);
}
function deleteUser(user) {
    console.log("user (id: " + user.id + ") is deleted.");
    return true;
}
console.log('user1', user1);
console.log('user2', user2);
console.log('createUser', ceateUser());
console.log('deleteUser', deleteUser(user2));
//# sourceMappingURL=interface.js.map