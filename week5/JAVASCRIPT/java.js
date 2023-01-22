//declera varibles
document.getElementById("myBtn").onclick = function(){
   let username = document.getElementById("uname").value;
   let age = document.getElementById("age").value
    if(age>=18){
       document.getElementById("page").innerHTML = age+ "you can vote";
    }else {
       document.getElementById("page").innerHTML = age + "you cannot vote"
}
}
/*
function changeParagraph(){
    var p = document.getElementsByTagName("p");
    for(var i=0; i<p.length; i++){
        p [i].style.color = "red";
        p [1].style.fontFamily= "italic";
        p [2].style.fontWeight="bold";
       
    
    }
   
}*/
/*
function selectClass(){
    var para = document.getElementsByClassName("para");
    var i;
    for (i=0; i<para.length; i++){
        para[i].getElementsByClassName.color ="red";
    }


}*/
/*
function query(){
    var p = document.querySelector(".para");
    console.log(p);
}*/
function query(){
    var p = document.querySelectorAll(".para");
    console.log(p);
}