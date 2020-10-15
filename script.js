const char =document.querySelector(".character");
const btn =document.querySelector(".btn");
const block = document.getElementById("block");
const count =document.querySelector(".count");
const game = document.getElementById("game");

let score = 1 

// count incrScore = () => {
//     count.innerHTML = score++
// }


const jump = (e) => {
    if(e.keyCode == 32){
        count.innerHTML = score++      
        char.classList.add("animate");
        setTimeout(function(){
            char.classList.remove("animate");
        },500)
    }
}

const checkDead = setInterval(() => {
    let charTop = parseInt( window.getComputedStyle(char)
    .getPropertyValue("top"));
    let blockLeft = parseInt( window.getComputedStyle(block)
    .getPropertyValue("left"));

    if( blockLeft<38 && blockLeft > 3 && charTop >=130 ){
        block.style.animation = "none";
        block.style.display = "none";
        btn.style.display ="block";  
    }
}, 10);




document.addEventListener("keyup",jump)
btn.addEventListener("click", () =>location.reload());
   