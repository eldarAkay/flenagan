var book1 = {
    "title": "Javascript",
    "author": {
        "firstName": "David",
        "lastName": "Flenagan"
    }
};

var book2 = Object.create(book1);
book2.oneMoreProperty = "Hello!";


var a1 = {};
var a2 = Object.create(Object.prototype);