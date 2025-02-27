var input=document.querySelector('input')
var upd=document.querySelector('.update')
function show(){
    if(input.value==0){
       alert("Please Select Something From the Calendar")
    }
    else{
    var userdate=new Date(input.value)
    var todaydate=new Date()
    var userAge=Math.floor((todaydate-userdate)/31557600000)
    if(userAge>0){

        upd.innerHTML=`Your Age is ${userAge}`
    }
    else{
        upd.innerHTML="Invalid"
    }

    }
}