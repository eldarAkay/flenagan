var text = 'testing:### 1#, 2#, 3';
var pattern = /\d+/g;
var a = pattern.test(text);
var b = text.search(pattern);

var newText = text.replace(pattern,'*')
console.log(newText);