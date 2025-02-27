let imgcont=document.querySelector(".img-cont")
let img=document.querySelector("img")
let p=document.querySelector("p")
let i=1
let next=()=>{
    if(i==4){
        i=1
    }
    img.src=`img-${i}.jpg`
    p.innerHTML=i
    i++
}
next()
let a=setInterval(next,3000)

let prev=()=>{
    let j=i-1
    if(j==1){
        img.src=`img-${3}.jpg` 
    }
    else{
        img.src=`img-${j-1}.jpg`
    }
    next()
    next()

    
} 