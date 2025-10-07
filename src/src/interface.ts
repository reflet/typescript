interface User {
    name: string;
    id: number;
}

const user1: User = {
    name: 'Hayes',
    id: 0
};

class UserAccount {
    name: string;
    id: number;

    constructor (name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
const user2: User = new UserAccount("Murphy", 1);

function ceateUser(): User {
    return new UserAccount("Murphy2", 2);
}

function deleteUser(user: User): boolean {
    console.log("user (id: " + user.id + ") is deleted.");
    return true;
}

// debug
console.log('user1', user1);
console.log('user2', user2);
console.log('createUser', ceateUser());
console.log('deleteUser', deleteUser(user2));
