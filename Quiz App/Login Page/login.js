var btn=document.querySelector("button")
var lemail=document.querySelector("#lemail")
var lpass=document.querySelector("#lpass")
var semail=localStorage.getItem("email")
var spass=localStorage.getItem("pass")
btn.addEventListener("click",()=>{
    if(lemail.value=="" || lpass.value=="" ){
        alert("Please Fill Out The Empty Input ")
    }
    else if(lemail.value!=semail){
        alert("Incorrect Email")
    }
    else if(lpass.value!=spass){
        alert("Incorrect Password")
    }
    else if(lemail.value==semail && lpass.value==spass){
        location.href="../Main Page/main.html"
    }
    else{
        alert("Both Email And Password is Wrong")
    }
})
