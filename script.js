// создать класс юзера с полями name, age, city, status
// и методами:
//     getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
// status boolean
//
var User = /** @class */ (function () {
    function User(name, age, city, status) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.status = status;
    }
    User.prototype.getName = function () {
        console.log('name - ', this.name);
        return this.name;
    };
    User.prototype.getAge = function () {
        console.log('age - ', this.age);
        return this.age;
    };
    User.prototype.getCity = function () {
        console.log('city - ', this.city);
        return this.city;
    };
    User.prototype.getStatus = function () {
        console.log('status - ', this.status);
        return this.status;
    };
    User.prototype.setName = function (name) {
        if (name.length < 3 || name.length > 25) {
            console.warn("u want set name \"" + name + "\", but your name too small, or too big | (max length = 25, min length = 3, your length = " + name.length + ")");
            return;
        }
        this.name = name;
    };
    User.prototype.setAge = function (age) {
        if (age < 14 || age > 99) {
            console.warn("u want set age \"" + age + "\",but your age too small, or too big | (min age = 14, max age = 99, your age = " + age + ")");
            return;
        }
        this.age = age;
    };
    User.prototype.setCity = function (city) {
        if (city.length < 3 || city.length > 25) {
            console.warn("u want set city \"" + city + "\",but your city haw too small, or too big length | (max length = 25, min length = 3, your length = " + city.length + ")");
            return;
        }
        this.city = city;
    };
    User.prototype.setStatus = function (status) {
        if (this.status === status) {
            console.warn("u want set status  \"" + status + "\", but status now = " + this.status);
            return;
        }
        this.status = status;
    };
    return User;
}());
var anton = new User("Anton", 15, 'Lviv', true);
console.group('test class User');
console.group('Anton');
anton.getAge();
anton.getCity();
anton.getName();
anton.getStatus();
console.groupEnd();
console.group('warn');
anton.setAge(13);
anton.setName("A");
anton.setCity("L");
anton.setStatus(true);
console.groupEnd();
anton.setAge(16);
anton.setName("Antonio");
anton.setCity("NewLviv");
anton.setStatus(false);
console.group('new Anton');
anton.getAge();
anton.getCity();
anton.getName();
anton.getStatus();
console.groupEnd();
console.groupEnd();
var Cat = {
    name: 'cat', type: 'go', whatSay: 'miu-miu-miu',
    "function": function () {
        console.log("I am " + this.name + " i can " + this.type + " and can say '" + this.whatSay + "'");
        return "I am " + this.name + " i can " + this.type + " and can say '" + this.whatSay + "'";
    }
};
var Bird = {
    name: 'bird', type: 'fly', whatSay: 'pi-pi-pi or ultrasound',
    "function": function () {
        console.log("I am " + this.name + " i can " + this.type + " and can say '" + this.whatSay + "'");
        return "I am " + this.name + " i can " + this.type + " and can say '" + this.whatSay + "'";
    }
};
var Fish = {
    name: 'fish', type: 'swim', whatSay: 'nothing',
    "function": function () {
        console.log("I am " + this.name + " i can " + this.type + " and can say '" + this.whatSay + "'");
        return "I am " + this.name + " i can " + this.type + " and can say '" + this.whatSay + "'";
    }
};
var Animals = [Cat, Bird, Fish];
Cat["function"]();
Bird["function"]();
Fish["function"]();
console.log(Animals);
Animals[0]["function"]();
