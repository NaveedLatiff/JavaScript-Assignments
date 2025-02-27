var btn=document.querySelector("button")
var sname=document.querySelector("#sname")
var semail=document.querySelector("#semail")
var spass=document.querySelector("#spass")
btn.addEventListener("click",()=>{
    if(sname.value=="" || semail.value=="" || spass.value==""){
        alert("Please Fill The Empty Input")
    }
    else if(semail.value.includes("@gmail.com")){
    localStorage.setItem(`name`,sname.value)
    localStorage.setItem(`email`,semail.value)
    localStorage.setItem(`pass`,spass.value)
    location.href="Login Page/login.html"
    }
    else{
            alert("Write Email in Correct Format")
        }
    
})