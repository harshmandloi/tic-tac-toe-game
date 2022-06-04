
let turn ="X";
let gameover=false;

const changeturn = ()=>{

    return turn === "X"? "0": "X"
}


const checkwin = ()=>{
    let bt=document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    win.forEach(e =>{
        if(bt[e[0]].innerText === bt[e[1]].innerText && bt[e[2]].innerText === bt[e[1]].innerText && bt[e[0]].innerText !== ''){
            document.querySelector('.info').innerText = bt[e[0]].innerText + " Won"
            gameover = true;
            bt[e[0]].classList.add("win");
            bt[e[1]].classList.add("win");
            bt[e[2]].classList.add("win");      
        }
    })
}

let bx = document.getElementsByClassName("box");
Array.from(bx).forEach(element =>{
    
    let at = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(at.innerText === ''  && gameover===false){
            at.innerText = turn;
            turn = changeturn();
            checkwin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }
        }
    })
})

 reset1.addEventListener('click', (e)=>{
     let bs = document.querySelectorAll('.boxtext');
     for (var i = 0; i < bs.length; i++){
         bs[i].innerText = ""
         bs[i].classList.remove("win");
        
     };
     turn="X";
     gameover=false;
     document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
 })
