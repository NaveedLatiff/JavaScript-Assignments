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
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        option1: "background-color",
        option2: "color",
        option3: "font-color",
        correctAnswer: "color"
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        option1: "<ol>",
        option2: "<ul>",
        option3: "<li>",
        correctAnswer: "<ul>"
    },
    {
        question: "Which JavaScript function is used to display a message in an alert box?",
        option1: "alert()",
        option2: "message()",
        option3: "notify()",
        correctAnswer: "alert()"
    }
    // {
    //     question: "What is the default position of elements in CSS?",
    //     option1: "relative",
    //     option2: "static",
    //     option3: "absolute",
    //     correctAnswer: "static"
    // }
    // {
    //     question: "Which HTML element is used to define a table row?",
    //     option1: "<td>",
    //     option2: "<th>",
    //     option3: "<tr>",
    //     correctAnswer: "<tr>"
    // }    
]
var quesPara = document.querySelector("#ques")
var inputs = document.querySelectorAll("input")
var opt1 = document.querySelector("#opt1")
var opt2 = document.querySelector("#opt2")
var opt3 = document.querySelector("#opt3")
var nextBtn = document.querySelector("#next")
var main=document.querySelector(".main")
var showScore=document.querySelector(".showScore")
var timer=document.querySelector(".timer")
var restart=document.querySelector("#restart")
var resultsPage=document.querySelector(".resultsPage")
var results=document.querySelector("#results")
var logout=document.querySelector("#logout")
var Q1=document.querySelector("#Q1")
var Q2=document.querySelector("#Q2")
var Q3=document.querySelector("#Q3")
var Q4=document.querySelector("#Q4")
var Q5=document.querySelector("#Q5")
var Q6=document.querySelector("#Q6")
var Ans1=document.querySelector("#Ans1")
var Ans2=document.querySelector("#Ans2")
var Ans3=document.querySelector("#Ans3")
var Ans4=document.querySelector("#Ans4")
var Ans5=document.querySelector("#Ans5")
var Ans6=document.querySelector("#Ans6")

var indx = 0
var score=0
var min=1;
var sec=59;
var count=0;


function changingQuestions() {
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].checked){
        var selectedVal=inputs[i].value
        var selectedQues=Questions[indx-1].question
        var selectedAns=Questions[indx-1][`option${selectedVal}`]
        var correctAns=Questions[indx-1].correctAnswer
        if(correctAns==selectedAns){
            score++
        }
    }            
        inputs[i].checked=false
    }
    if (indx < Questions.length) {
        nextBtn.disabled=true
        quesPara.innerText = Questions[indx].question
        opt1.innerText = Questions[indx].option1
        opt2.innerText = Questions[indx].option2
        opt3.innerText = Questions[indx].option3
        
    }
    else{
        showScore.style.display="block"
        main.style.display="none"
        showScore.innerHTML="You Score " + score + " out of " + + Questions.length
        restart.style.display="block"
        results.style.display="block"
    }
    indx++
}
// Next Button
nextBtn.addEventListener("click", changingQuestions)
changingQuestions()


// Inputs 
for(var i=0;i<inputs.length;i++){
    inputs[i].addEventListener("click",()=>{
      nextBtn.disabled=false
    })
}

// Timer
var updateTimer=()=>{
    timer.innerHTML="0" + min + ":" + sec
    sec--
    if(count==Questions.length){
        clearInterval(a)
        timer.style.display="none"
    }
    else if(sec<0){
        min=0
        sec=59
    }
    else if(min==0 && sec==0){
        count++   
        min=1
        sec=59
        changingQuestions()
        if(count==Questions.length){
            clearInterval(a)
            timer.style.display="none"
            
        }
    }
}
var a=setInterval(updateTimer,1000)
var timerChange=()=>{   
    sec=59
    min=1
    count++
}
nextBtn.addEventListener("click",timerChange)


// Restart
var b;
function newTimer(){
    clearInterval(b)
    b=setInterval(updateTimer,1000)
}
restart.addEventListener("click",()=>{
    main.style.display="block"
    showScore.style.display="none"
    restart.style.display="none"
    timer.style.display="block"
    results.style.display="none"
    resultsPage.style.display="none"
    main.style.display="flex"
    indx=0
    score=0
    min=1
    sec=59
    count=0
    nextBtn.disabled=true 
    changingQuestions()
    newTimer()    
})



// Correct Answers
results.addEventListener("click",()=>{
    resultsPage.style.display="block"
    showScore.style.display="none"
    results.style.display="none"
    Q1.innerText=Questions[0].question
    Q2.innerText=Questions[1].question
    Q3.innerText=Questions[2].question
    Q4.innerText=Questions[3].question
    Q5.innerText=Questions[4].question
    Q6.innerText=Questions[5].question
    Ans1.innerText=Questions[0].correctAnswer
    Ans2.innerText=Questions[1].correctAnswer
    Ans3.innerText=Questions[2].correctAnswer
    Ans4.innerText=Questions[3].correctAnswer
    Ans5.innerText=Questions[4].correctAnswer
    Ans6.innerText=Questions[5].correctAnswer
    
})
