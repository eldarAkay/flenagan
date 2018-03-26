// var o = {x : 1};
// o.x = 2;
// o.y = 3;
// o;
// console.log(o);
//
// var a = [];
// a[10] = 12;
// console.log(o);
//

// var a = {x: 1};
// var b = {x: 1};
// var c = (a == b);
// var d = (a === b);

// var a = [];
// var b = a;
// b[1] = 4;
// a;

var a = ['1', 'b', 'c'];
var b = [];

for (var i = 0; i < a.length; i++) {
    b[i] = a[i];
}
b[0] = 1;
a;

function equalArrays(a, b) {
    if (a.length != b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (b[i] !== a[i]) {
            return false
        }
        return true;
    }
}

var answer = equalArrays(a , b);
answer;





