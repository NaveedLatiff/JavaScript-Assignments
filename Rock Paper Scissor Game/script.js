let user_score = 0
let comp_score = 0

const userscore_increasing = document.querySelector(".userscore_increasing")
const compscore_increasing = document.querySelector(".compscore_increasing")
const images = document.querySelectorAll(".img")
const showwinner = document.querySelector(".showwinner")
const getcompchoice = () => {
    let choices = ["rock", "paper", "scissor"]
    let compchoice = Math.floor(Math.random() * 3)
    return choices[compchoice]
}

const drawgame = () => {
    showwinner.innerText = "Match Draw"
    showwinner.style.backgroundColor="Chocolate"

}

const userwin = () => {
    user_score++
    userscore_increasing.innerText=user_score
    showwinner.innerText = "User Win"
    showwinner.style.backgroundColor = "green"
}

const compwin = () => {
    comp_score++
    compscore_increasing.innerText=comp_score
    showwinner.innerText = "Computer Win"
    showwinner.style.backgroundColor = "red"
}


const playgame = (userchoice) => {
    // console.log(` user clicked ${userchoice}`)
    const compselect = getcompchoice()
    // console.log(`comp select ${compselect}`)

    if (userchoice == compselect) {
        drawgame()
    }
    else if (userchoice == "rock" && compselect == "scissor") {
        userwin()
    }
    else if (userchoice == "rock" && compselect == "paper") {
        compwin()
    }
    else if (userchoice == "scissor" && compselect == "paper") {
        userwin()
    }
    else if (userchoice == "scissor" && compselect == "rock") {
        compwin()
    }
    else if (userchoice == "paper" && compselect == "rock") {
        userwin()
    }
    else if (userchoice == "paper" && compselect == "scissor") {
        compwin()
    }
}

images.forEach((images) => {
    images.addEventListener("click", () => {
        const userchoice = images.getAttribute("id")
        playgame(userchoice)
    })


})