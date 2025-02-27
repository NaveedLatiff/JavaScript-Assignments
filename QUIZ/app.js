var Questions = [
    {
        question: "Which HTML element is used to define the title of a document?",
        option1: "<meta>",
        option2: "<title>",
        option3: "<header>",
        correctAnswer: "<title>"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<br>",
        option2: "<lb>",
        option3: "<break>",
        correctAnswer: "<br>"
    },
    {
        question: "Which attribute is used to provide alternative text for an image?",
        option1: "alt",
        option2: "src",
        option3: "title",
        correctAnswer: "alt"
    }
]
var Ques=document.querySelector("#Ques")
var opt1=document.querySelector("#opt1")
var opt2=document.querySelector("#opt2")
var opt3=document.querySelector("#opt3")
var nextBtn=document.querySelector("#next")
var options=document.querySelectorAll(".option")
var timer=document.querySelector("#timer")
var indx=0
var score=0
var min=9
var sec=59
var MultipleAns=[]
var Fulltime=setInterval(()=>{
    timer.innerHTML="0" + min + ":" + sec
    sec--
    if(sec==0 && min==0){
        localStorage.Score=score
        clearInterval(Fulltime)
        localStorage.setItem("Answers",JSON.stringify(MultipleAns))
        location.href="score/score.html"

     }
     if(sec<10){
     sec="0" + sec
        if(sec<1){
            min--
            sec=59
     }
}              
},1000)
var nextFunction=()=>{
if(indx<Questions.length){

    for(var i=0;i<options.length;i++){
        options[i].disabled=false
    }
    nextBtn.disabled=true
    nextBtn.style.backgroundColor="white"
    nextBtn.style.color="black"
    nextBtn.style.cursor="default"
    Ques.innerText=Questions[indx].question
    opt1.innerText=Questions[indx].option1
    opt2.innerText=Questions[indx].option2
    opt3.innerText=Questions[indx].option3
    opt1.style.backgroundColor="rgb(0,0,33)"
    opt1.style.color="white"
    opt2.style.backgroundColor="rgb(0,0,33)"
    opt2.style.color="white" 
    opt3.style.backgroundColor="rgb(0,0,33)"
    opt3.style.color="white"
    opt1.style.cursor="pointer"
    opt2.style.cursor="pointer"
    opt3.style.cursor="pointer"
}
    else{
        clearInterval(Fulltime)
        localStorage.setItem("Answers",JSON.stringify(MultipleAns))
        location.href="score/score.html"
    }
    indx++
}
nextBtn.addEventListener("click",nextFunction)
nextFunction()

for(var i=0;i<options.length;i++){
    options[i].addEventListener("click",(e)=>{
        nextBtn.disabled=false
        nextBtn.style.backgroundColor="green"
        nextBtn.style.color="white"
        nextBtn.style.cursor="pointer"
        // e.target.style.color="black"
        var SelectedValue=e.target.textContent
        MultipleAns.push(SelectedValue)
        var CorrectedAns=Questions[indx-1].correctAnswer
        for(var i=0;i<options.length;i++){
            options[i].disabled=true
            options[i].style.cursor="default"
        }
        if(SelectedValue==CorrectedAns){
            e.target.style.backgroundColor="green"
            score++
        }
        else{
            e.target.style.backgroundColor="red"

        }
 })

}