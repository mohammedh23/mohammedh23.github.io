
function my () {
alert("amr");
}
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;
document.getElementById("demo").innerHTML = typeof person;
var x = "John";        // x is a string
var y = new String("John");  // y is an object

document.getElementById("demo").innerHTML =
typeof x + "<br>" + typeof y;
var x=10;