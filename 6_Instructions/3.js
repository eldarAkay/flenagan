var p = {x:1};
var o = Object.create(p);
p.isPrototypeOf(o);
Object.prototype.isPrototypeOf(p);
