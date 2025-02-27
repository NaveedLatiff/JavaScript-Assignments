var  [seconds,minutes,hours]=[0,0,0]
var timer=document.querySelector(".timer")
var time=null
function stopWatch(){
    seconds++
    if(seconds==60){
        seconds=0
        minutes++
        if(minutes==60){
            minutes=0
            hours++
        }
    }
    let h=hours<10 ?"0"+hours:hours
    let m=minutes<10 ?"0"+minutes:minutes
    let s=seconds<10 ?"0"+seconds:seconds


    timer.innerHTML=h+ ":"+ m + ":" + s
}
function start(){
    if(time!=null){
        clearInterval(time)
    }
    time=setInterval(stopWatch,1000);

}

function pause(){
    clearInterval(time)
}
function reset(){
    clearInterval(time)
    timer.innerHTML="00:00:00"
    seconds=0
    minutes=0
    hours=0

}