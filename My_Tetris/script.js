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

let goesDownn = function(begin,end,speed,){
    let score = begin - 1;
setInterval(function(){if(score < end){ score += 1;
console.log(".r"+score+"c3")
fist(score,6);
second((score-1),6);
}},speed );
};
let goesDownn2 = function(begin,end,speed,){
    let score = begin - 1;
setInterval(function(){if(score < end){ score += 1;
console.log(".r"+score+"c3")};
fist(score,5);
second(score-1,5)
},speed );
};
let fist = function(r,c){

    let one = ".r"+r+"c"+(c-1);
     let two = ".r"+r+"c"+c;
     let three = ".r"+(r+1)+"c"+c;
     let four = ".r"+(1+r)+"c"+(1+c);
   let g = document.querySelector(one);
   let b = document.querySelector(two);
   let a = document.querySelector(three);
   let d = document.querySelector(four);
   g.style.backgroundColor = "black";
   b.style.backgroundColor = "black";
   a.style.backgroundColor = "black";
   d.style.backgroundColor = "black";
};
let second = function(r,c){

        let one = ".r"+r+"c"+(c-1);
         let two = ".r"+r+"c"+c;
         let three = ".r"+r+"c"+c;
         let four = ".r"+(1+r)+"c"+(1+c);
       let g = document.querySelector(one);
       let b = document.querySelector(two);
       let a = document.querySelector(three);
       let d = document.querySelector(four);
       g.style.backgroundColor = "rgb(140, 130, 130)";
       b.style.backgroundColor = "rgb(140, 130, 130)";
       a.style.backgroundColor = "rgb(140, 130, 130)";
       d.style.backgroundColor = "rgb(140, 130, 130)";
    };
reset.addEventListener('click',function(){goesDownn(1,19,500);setTimeout(()=>goesDownn2(1,17,500),3000);
});

  












    
