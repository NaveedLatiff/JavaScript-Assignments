let images=document.querySelectorAll(".img")
let decider=document.querySelector(".decider")

images.forEach((images)=>{
      images.addEventListener("click",()=>{
        let userchoice=images.getAttribute("id")
        playgame(userchoice)
        // console.log(`image ${userchoice?} is clicked`)
      })
})


let compchoice=()=>{
    let comp_option=["one","two","three","four","five"]
    let comp_select=Math.floor(Math.random()*5)
 
    return comp_option[comp_select]
}

let playgame=(userchoice)=>{
    const comp_selected=compchoice()
    console.log(` Computer clicked ${comp_selected} and user clicked ${userchoice}`)
    if(comp_selected==userchoice){
       decider.innerText= `Computer choose ${comp_selected} and You choose ${userchoice} You Won`
       decider.style.color="green"
    }
    else{
        decider.innerText= `Computer choose ${comp_selected} and You choose ${userchoice} So You Loose`
        decider.style.color="red"
    }
}