function show(n){
    var inp=document.querySelector("#inp")
    inp.value+=n
}
function operation(){
    var inp=document.querySelector("#inp")
    inp.value=eval(inp.value)
}
function CE(){
    var inp=document.querySelector("#inp")
    inp.value=''
}
function AC(){
    var inp=document.querySelector("#inp")
    inp_changes=inp.value.slice(0,-1)
    inp.value=inp_changes
}