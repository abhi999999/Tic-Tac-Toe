
const start = document.querySelector(".start")
const containers = document.querySelectorAll(".container")
const grid = document.querySelector(".grid")
const currentPlayer = document.querySelector(".current-player")
const result = document.querySelector(".result")

let position = 0
let choiceOne=[]
let choicetwo=[]
let xArr = []
let oArr = []
let current = "x"
const winArr = [
    ["0","1","2"],["3","4","5"],["6","7","8"],
    ["0","3","6"],["1","4","7"],["2","5","8"],
    ["0","4","8"],["2","4","6"]
]

function createGrid(){
    start.addEventListener("click", function(){
        currentPlayer.textContent = current
        if(choiceOne.length > 0){
        let square = document.querySelectorAll(".grid div")
        square.forEach((sq)=>{
            grid.removeChild(sq)
        })
        choiceOne=[]
        xArr=[]
        oArr=[]
        // console.log(choiceOne.length);
        }
            for(let i=0; i<9; i++){
            
                let square= document.createElement("div")
                square.setAttribute("id",i)
                grid.appendChild(square)
                // console.log(square)
                obj = {
                    status : null,
                    element : square,
                    id : i 
                }
                choiceOne.push(obj)
                
            }
            play() 
        
        
    })        

}
function play(){
    result.textContent=""
    currentPlayer.textContent= "x"
    let square = document.querySelectorAll(".grid div")
    square.forEach(element =>{
        element.addEventListener("click", function(){
            // console.log(square.status);
            let id = element.getAttribute("id")
            if(current === "x" && choiceOne[id].status === null && result.textContent === "" ){
                let img = document.createElement("img")
                img.setAttribute("src", `/images/${current}.png`)
                element.appendChild(img)
                current = "o"
                currentPlayer.textContent = current
                xArr.push(id)
                choiceOne[id].status = "x"
                // console.log(choiceOne[id].status);
                checkWin()
                // if(xArr.length >= 3 ){
                //     checkWin()
                // }
            }else if(current === "o" && choiceOne[id].status === null && result.textContent === "" ){
                let img = document.createElement("img")
                img.setAttribute("src", `/images/${current}.png`)
                element.appendChild(img)
                current = "x"
                currentPlayer.textContent = current
                oArr.push(id)
                choiceOne[id].status = "o"
                // console.log(choiceOne[id].id);
                checkWin()
                // if(oArr.length >= 3){
                //     checkWin()
                // }

            }
        })
    })
}

function checkWin(){
    for(let i = 0; i < winArr.length; i++){
        
        if(xArr.includes(winArr[i][0]) && xArr.includes(winArr[i][1]) && xArr.includes(winArr[i][2]) ){
            result.textContent = "X Wins"
        }
        if(oArr.includes(winArr[i][0]) && oArr.includes(winArr[i][1]) && oArr.includes(winArr[i][2]) ){
            result.textContent = "O Wins"
        } else if(xArr.length===5 && oArr.length===4){
            result.textContent="DRAW"
        }
        
    }
    
}

createGrid()

