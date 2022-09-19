let shapes=document.querySelectorAll(".game .shape");
let result= document.getElementsByClassName("result")[0];
let game= document.getElementsByClassName("game")[0];
let user=document.querySelector(".result .user");
let house=document.querySelector(".result .house");
let play=document.querySelector(".play");
let score=document.querySelector("header .container div span");
let sum=0;
shapes.forEach((shape) => {
    shape.onclick=()=>{
        game.style.display="none";
        result.style.display="block";
        user.classList.remove("winner");
        house.classList.remove("winner");
        user.innerHTML+=shape.outerHTML;
        let random;
        do{random=Math.floor(Math.random()*shapes.length)}while(shapes[random].outerHTML==shape.outerHTML);
        setTimeout(e=>{
            house.querySelector(".pick").style.display="none";
            house.innerHTML+=shapes[random].outerHTML;
            if(user.querySelector(".shape").classList[1]=="sciss" && house.querySelector(".shape").classList[1]=="back" || 
            user.querySelector(".shape").classList[1]=="hand" && house.querySelector(".shape").classList[1]=="sciss" ||
            user.querySelector(".shape").classList[1]=="back" && house.querySelector(".shape").classList[1]=="hand"){
                house.classList.add("winner");
            }else{
                user.classList.add("winner");
            }
            if(user.classList.contains("winner")){
                play.querySelector("p").innerHTML="you win";
                ++sum;
                score.innerHTML=sum;
            }else{
                play.querySelector("p").innerHTML="you lose";
                --sum;
                sum<0?sum=0:sum=sum;
                score.innerHTML=sum;
            }
        },1000);
        setTimeout(e=>{
            play.style.display="block";
        },2000);
        setTimeout(e=>{
            play.style.opacity=1;
        },2500);
    }
});
play.querySelector("button").addEventListener("click",()=>{
    result.style.display="none";
    play.style.display="none";
    play.style.opacity=0;
    user.querySelector(".shape").remove();
    house.querySelector(".pick").style.display="block";
    house.querySelector(".shape").remove();
    shapes[0].style.cssText="top: 100%; left: 0;"
    shapes[1].style.cssText="bottom: 0; left: 0"
    shapes[2].style.cssText="top: 100%; right: 100%;"
    game.style.display="block";
    setTimeout(e=>{
        shapes[0].style.cssText="top: -60px; left: -40px;"
        shapes[1].style.cssText="bottom: -53px; left: 32%;"
        shapes[2].style.cssText="top: -60px; right: -60px;"
    },0)
})