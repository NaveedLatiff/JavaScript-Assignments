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
var Answers=JSON.parse(localStorage.getItem("Answers")) 
// function abc(j){
for(var j=0;j<Questions.length;j++){
var Ques=document.getElementById(`Ques${j+1}`)
var Ans1=document.getElementById(`${j+1}Ans1`)
var Ans2=document.getElementById(`${j+1}Ans2`)
var Ans3=document.getElementById(`${j+1}Ans3`)
var Ans=document.querySelectorAll(`.Ans${j+1}`)
Ques.innerText=Questions[j].question
Ans1.innerText=Questions[j].option1
Ans2.innerText=Questions[j].option2
Ans3.innerText=Questions[j].option3
    if(Answers[j]==Questions[j].correctAnswer){
        for(var i=0;i<Ans.length;i++){
        if(Ans[i].innerText==Answers[j]){
            Ans[i].style.backgroundColor="green"           
        }
    }
}
else if(Answers[j]==undefined){
    for(var i=0;i<Ans.length;i++){
        if(Ans[i].innerText==Questions[j].correctAnswer){
            Ans[i].style.backgroundColor="green"
        }
    }
}
else if(Answers[j]!=Questions[j].correctAnswer){
    for(var i=0;i<Ans.length;i++){
        if(Ans[i].innerText==Questions[j].correctAnswer){
            Ans[i].style.backgroundColor="green"
 
        }
        if(Ans[i].innerText==Answers[j]){
            Ans[i].style.backgroundColor="red"
        }
    }
    
} 
}
