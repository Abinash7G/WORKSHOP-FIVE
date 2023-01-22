/*let a;
let b;
a=8, b=9;
let sum= a + b;
const PI=3.14;
console.log("the sum of two number is: "+sum*PI);
alert(sum*PI);*/

/*let celsius = 100;
function printTemperature(){
    let temp = (celsius*9/5) + 32;
    console.log(temp);
    return temp;
    
}
printTemperature()*/

/*let username = window.prompt("what is your name")
console.log(username);*/
document.getElementById("myButton").onclick = function(){
    let username = document.getElementById("myText").value;
    console.log(username);
}