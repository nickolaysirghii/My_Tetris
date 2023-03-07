let onOffButton = document.querySelector(".oneName");
let sPButton = document.querySelector(".twoName");
let sound = document.querySelector(".threeName");
let reset = document.querySelector(".fourName");
let rotate = document.querySelector(".bigButton");
let buttonDown = document.querySelector(".buttonUp");
let buttonUp = document.querySelector(".buttonDown");
let buttonLeft = document.querySelector(".buttonLeft");
let buttonRight = document.querySelector(".buttonRight");
onOffButton.addEventListener("mouseover",()=>onOffButton.setAttribute("class","shadow"));
onOffButton.addEventListener('mouseout',()=>onOffButton.setAttribute("class","oneName"));
sPButton.addEventListener("mouseover",()=>sPButton.setAttribute("class","shadow"));
sPButton.addEventListener('mouseout',()=>sPButton.setAttribute("class","twoName"));
sound.addEventListener("mouseover",()=>sound.setAttribute("class","shadow"));
sound.addEventListener('mouseout',()=>sound.setAttribute("class","shadow"));
sound.addEventListener('mouseout',()=>sound.setAttribute("class","threeName"));
reset.addEventListener("mouseover",()=>reset.setAttribute("class","shadow"));
reset.addEventListener('mouseout',()=>reset.setAttribute("class","fourName"));
rotate.addEventListener("mouseover",()=>rotate.setAttribute("class","bigButton2"));
rotate.addEventListener('mouseout',()=>rotate.setAttribute("class","bigButton"));
buttonDown.addEventListener("mouseover",()=>buttonDown.setAttribute("class","fourButtons"));
buttonDown.addEventListener('mouseout',()=>buttonDown.setAttribute("class","buttonUp"));
buttonUp.addEventListener("mouseover",()=>buttonUp.setAttribute("class","fourButtons"));
buttonUp.addEventListener('mouseout',()=>buttonUp.setAttribute("class","buttonDown"));
buttonLeft.addEventListener("mouseover",()=>buttonLeft.setAttribute("class","fourButtons"));
buttonLeft.addEventListener('mouseout',()=>buttonLeft.setAttribute("class","buttonLeft"));
buttonRight.addEventListener("mouseover",()=>buttonRight.setAttribute("class","fourButtons"));
buttonRight.addEventListener('mouseout',()=>buttonRight.setAttribute("class","buttonRight"));
/////////////////////////////////////////////////////////////
let fun1 = function(ro,co){
    let a = ".r"+ro+"c"+co;
    let b = ".r"+ro+"c"+(co+1);
    let c = ".r"+ro+"c"+(co+2);
    let d = ".r"+ro+"c"+(co+3);
    let one = document.querySelector(a);
   let two = document.querySelector(b);
   let three = document.querySelector(c);
   let four = document.querySelector(d);
   one.style.backgroundColor = "black";
   two.style.backgroundColor = "black";
   three.style.backgroundColor = "black";
   four.style.backgroundColor = "black";
   one.innerText = ".";
   two.innerText = ".";
   three.innerText = ".";
   four.innerText = ".";
   
};
let fun2 = function(ro,co){
    let a = ".r"+ro+"c"+co;
    let b = ".r"+ro+"c"+(co+1);
    let c = ".r"+ro+"c"+(co+2);
    let d = ".r"+ro+"c"+(co+3);
    let one = document.querySelector(a);
   let two = document.querySelector(b);
   let three = document.querySelector(c);
   let four = document.querySelector(d);
   one.style.backgroundColor = "rgb(140, 130, 130)";
   two.style.backgroundColor = "rgb(140, 130, 130)";
   three.style.backgroundColor = "rgb(140, 130, 130)";
   four.style.backgroundColor = "rgb(140, 130, 130)";
   one.innerText = "";
   two.innerText = "";
   three.innerText = "";
   four.innerText = "";
 };
let fun3 = function(ro,co){
    let d = ".r"+ro+"c"+co;
    let c = ".r"+(ro+1)+"c"+co;
    let b = ".r"+(ro+2)+"c"+co;
    let a = ".r"+(ro+3)+"c"+co;
    let one = document.querySelector(a);
   let two = document.querySelector(b);
   let three = document.querySelector(c);
   let four = document.querySelector(d);
   one.style.backgroundColor = "black";
   two.style.backgroundColor = "black";
   three.style.backgroundColor = "black";
   four.style.backgroundColor = "black";
   one.innerText = ".";
   two.innerText = ".";
   three.innerText = ".";
   four.innerText = ".";
};
let fun4 = function(ro,co){
    let d = ".r"+ro+"c"+co;
    let c = ".r"+(ro+1)+"c"+co;
    let b = ".r"+(ro+2)+"c"+co;
    let a = ".r"+(ro+3)+"c"+co;
    let one = document.querySelector(a);
   let two = document.querySelector(b);
   let three = document.querySelector(c);
   let four = document.querySelector(d);
   one.style.backgroundColor = "rgb(140, 130, 130)";
   two.style.backgroundColor = "rgb(140, 130, 130)";
   three.style.backgroundColor = "rgb(140, 130, 130)";
   four.style.backgroundColor = "rgb(140, 130, 130)";
   one.innerText = "";
   two.innerText = "";
   three.innerText = "";
   four.innerText = "";
 };
let fun5 = function(ro,co){
    let a = ".r"+ro+"c"+co;
    let b = ".r"+ ro+"c"+(co+1);
    let c = ".r"+(ro+1)+"c"+co;
    let d = ".r"+(ro+1)+"c"+(co+1);
    let one = document.querySelector(a);
   let two = document.querySelector(b);
   let three = document.querySelector(c);
   let four = document.querySelector(d);
   one.style.backgroundColor = "black";
   two.style.backgroundColor = "black";
   three.style.backgroundColor = "black";
   four.style.backgroundColor = "black";
   one.innerText = ".";
   two.innerText = ".";
   three.innerText = ".";
   four.innerText = ".";
};
let fun6 = function(ro,co){
    let a = ".r"+ro+"c"+co;
    let b = ".r"+ ro+"c"+(co+1);
    let c = ".r"+(ro+1)+"c"+co;
    let d = ".r"+(ro+1)+"c"+(co+1);
    let one = document.querySelector(a);
   let two = document.querySelector(b);
   let three = document.querySelector(c);
   let four = document.querySelector(d);
   one.style.backgroundColor = "rgb(140, 130, 130)";
   two.style.backgroundColor = "rgb(140, 130, 130)";
   three.style.backgroundColor = "rgb(140, 130, 130)";
   four.style.backgroundColor = "rgb(140, 130, 130)";
   one.innerText = "";
   two.innerText = "";
   three.innerText = "";
   four.innerText = "";
 };
 let fun7 = function(ro,co){
    let a = ".r"+ro+"c"+co;
    let b = ".r"+ro+"c"+(co+1);
    let c = ".r"+ro+"c"+(co+2);
    let d = ".r"+(ro+1)+"c"+(co+2);
    let e = ".r"+(ro-1)+"c"+(co+1);
    let f = ".r"+(ro-1)+"c"+co;
    let one = document.querySelector(a);
   let two = document.querySelector(b);
   let three = document.querySelector(c);
   let four = document.querySelector(d);
   let five = document.querySelector(e);
   let six = document.querySelector(f);
   one.style.backgroundColor = "black";
   two.style.backgroundColor = "black";
   three.style.backgroundColor = "black";
   four.style.backgroundColor = "black";
   five.style.backgroundColor = "rgb(140, 130, 130)";
   six.style.backgroundColor = "rgb(140, 130, 130)";
   one.innerText = ".";
   two.innerText = ".";
   three.innerText = ".";
   four.innerText = ".";
   three.innerText = ".";
   four.innerText = ".";

};
let fun8 = function(ro,co){
    let a = ".r"+ro+"c"+co;
    let b = ".r"+ro+"c"+(co+1);
    let c = ".r"+ro+"c"+(co+2);
    let d = ".r"+(ro+1)+"c"+(co+2);
    let one = document.querySelector(a);
   let two = document.querySelector(b);
   let three = document.querySelector(c);
   let four = document.querySelector(d);
   one.style.backgroundColor = "rgb(140, 130, 130)";
   two.style.backgroundColor = "rgb(140, 130, 130)";
   three.style.backgroundColor = "rgb(140, 130, 130)";
   four.style.backgroundColor = "rgb(140, 130, 130)";
   one.innerText = "";
   two.innerText = "";
   three.innerText = "";
   four.innerText = "";
   
  
 };
/////////////////////////////////////////////////////////////////
 let goesDownn = function(begin,end,speed){
    let score = begin - 1;let coll = 1;
setInterval(function(){if(score < end){ score += 1;
fun1(score,coll);fun2((score-1),coll);}},speed );};

let goesDownn2 = function(begin,end,speed){
    let score = begin - 1;let coll = 10;
setInterval(function(){if(score < end){ score += 1;
fun3(score,coll);fun4((score-4),coll);}},speed );};

let goesDownn3 = function(begin,end,speed){
    let score = begin - 1;let coll = 6;
setInterval(function(){if(score < end){ score += 1;
fun5(score,coll);fun6((score-2),coll);}},speed );};

let goesDownn4 = function(begin,end,speed){
    let score = begin - 1;let coll = 3;
setInterval(function(){if(score < end){ score += 1;
fun7(score,coll);fun8((score-2),coll);}},speed );};

let goesDownn5 = function(begin,end,speed){
    let score = begin - 1;let coll = 8;
setInterval(function(){if(score < end){ score += 1;
fun5(score,coll);fun6((score-2),coll);}},speed );};

///////////////////////////////////////////////////////////////
onOffButton.addEventListener("click",function(){
    goesDownn(2,27,400,);
goesDownn2(5,24,300,);
goesDownn3(3,26,500,);
setTimeout(()=>goesDownn4(3,26,600,),2000);
setTimeout(()=>goesDownn5(3,26,600,),4000);
});
let line = document.querySelectorAll(".r27");
let line8 = document.querySelector(".r27c8");
let line9 = document.querySelector(".r27c9");
let line1 = document.querySelector(".r27c1");
let line2 = document.querySelector(".r27c2");
let line3 = document.querySelector(".r27c3");
let line4 = document.querySelector(".r27c4");
let line5 = document.querySelector(".r27c5");
let line6 = document.querySelector(".r27c6");
let line7 = document.querySelector(".r27c7");
let line10 = document.querySelector(".r27c10");
setInterval(function(){ if(
    line1.innerText &&
    line2.innerText &&
    line3.innerText &&
    line4.innerText &&
    line5.innerText &&
    line6.innerText &&
    line7.innerText &&
    line8.innerText &&
    line9.innerText &&
    line10.innerText 
){
    for(let i = 0;i<10;i++){
        line[i].style.backgroundColor = "red";
    }
    };},1000)
