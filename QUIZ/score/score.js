var score=document.querySelector("#score")
var restart=document.querySelector("#restart")
score.innerHTML=`<span>You Score </span>` + localStorage.getItem("Score") + " out of " + "3"
restart.addEventListener("click",()=>{
    location.href="../index.html"
})
var Answers=JSON.parse(localStorage.getItem("Answers"))