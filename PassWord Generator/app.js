var length=12
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase="abcdefghijklmnopqrstuvwxyz"
var num="0123456789"
var symbol="#$@"
var password=""
var input=document.querySelector(".inp")
var btn=document.querySelector(".generator")
var copy=document.querySelector(".copy")
btn.addEventListener("click",()=>{
    password=""
    var allChar=upperCase + lowerCase + num + symbol
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=num[Math.floor(Math.random()*num.length)]
    password+=symbol[Math.floor(Math.random()*symbol.length)]
    
    for (var i=0;i<(length-4);i++){
        password+=allChar[Math.floor(Math.random()*allChar.length)]
    }
    input.value=password
})
copy.addEventListener("click", () => {
    if (input.value === "") {
        alert("No password to copy! Generate one first.");
        return;
    }
    input.select()
    navigator.clipboard.writeText(input.value)
    
})
