console.log('Ya Allah Asani Farma');
let bgMusic = new Audio('music.mp3');
let ting = new Audio('ting.mp3');
let gamveOver = new Audio('gameover.mp3');

let turn = "X";
let isgameover = false;

// function To Change Turn

const changeTurn = () =>{
    return turn === "X"? "0" : "X";
}

// Function To Check for win

const CheckWin = () =>{
  let boxText = document.getElementsByClassName('boxText');  



  if(window.matchMedia("(max-width: 300px)").matches){
  
    let wins = [
        [0, 1, 2, 10, 10, 0],
        [3, 4, 5, 10, 35, 0],
        [6, 7, 8, 10, 60, 0],
        [0, 3, 6, -13, 33, 90],
        [1, 4, 7, 13, 33, 90],
        [2, 5, 8, 38, 33, 90],
        [0, 4, 8, 12, 36, 45],
        [2, 4, 6, 12, 36, 135],

    ]

wins.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[2]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.line').style.width = "75vw";
            // document.querySelector('.imgBox img').style.width = "200px";
            
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;

    }

})  


  }

  else if(window.matchMedia('(min-width: 301px) and (max-width: 400px)').matches){
  
    let wins = [
        [0, 1, 2, 20, 9, 0],
        [3, 4, 5, 20, 29, 0],
        [6, 7, 8, 20, 49, 0],
        [0, 3, 6, 0, 29, 90],
        [1, 4, 7, 20, 29, 90],
        [2, 5, 8, 40, 29, 90],
        [0, 4, 8, 18, 27, 45],
        [2, 4, 6, 18, 27, 135],

    ]

wins.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[2]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.line').style.width = "60vw";
            // document.querySelector('.imgBox img').style.width = "200px";
            
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;

    }

})  


  }


  else if(window.matchMedia("(max-width: 500px) and (min-width: 401px)").matches){
  
    let wins = [
        [0, 1, 2, 24, 8, 0],
        [3, 4, 5, 24, 26, 0],
        [6, 7, 8, 24, 44, 0],
        [0, 3, 6, 6, 27, 90],
        [1, 4, 7, 24.5, 27, 90],
        [2, 5, 8, 43, 29, 90],
        [0, 4, 8, 24, 26, 45],
        [2, 4, 6, 24, 26, 135],

    ]

wins.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[2]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.line').style.width = "51vw";
            // document.querySelector('.imgBox img').style.width = "200px";
            
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;

    }

})  


  }


  else if(window.matchMedia("(max-width: 600px) and (min-width: 501px)").matches){
  
    let wins = [
        [0, 1, 2, 27, 6.5, 0],
        [3, 4, 5, 27, 21.5, 0],
        [6, 7, 8, 27, 36, 0],
        [0, 3, 6, 13, 22, 90],
        [1, 4, 7, 27.5, 22, 90],
        [2, 5, 8, 42, 29, 90],
        [0, 4, 8, 28, 22, 45],
        [2, 4, 6, 28, 22, 135],

    ]

wins.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[2]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.line').style.width = "45vw";
            // document.querySelector('.imgBox img').style.width = "200px";
            
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;

    }

})  


  }


  else if(window.matchMedia("(max-width: 700px) and (min-width: 601px)").matches){
  
    let wins = [
        [0, 1, 2, 28, 6, 0],
        [3, 4, 5, 28, 19, 0],
        [6, 7, 8, 28, 32, 0],
        [0, 3, 6, 17, 19, 90],
        [1, 4, 7, 30, 19, 90],
        [2, 5, 8, 43, 19, 90],
        [0, 4, 8, 31, 20, 45],
        [2, 4, 6, 31, 20, 135],

    ]

wins.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[2]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.line').style.width = "40vw";
            // document.querySelector('.imgBox img').style.width = "200px";
            
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;

    }

})  


  }

  else if(window.matchMedia("(max-width: 850px) and (min-width: 701px)").matches){
  
    let wins = [
        [0, 1, 2, 33, 5, 0],
        [3, 4, 5, 33, 17, 0],
        [6, 7, 8, 33, 29, 0],
        [0, 3, 6, 21, 17, 90],
        [1, 4, 7, 32.5, 17, 90],
        [2, 5, 8, 44, 17, 90],
        [0, 4, 8, 32.5, 17.5, 45],
        [2, 4, 6, 32.5, 17.5, 135],

    ]

wins.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[2]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.line').style.width = "35vw";
            // document.querySelector('.imgBox img').style.width = "200px";
            
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;

    }

})  


  }

else{
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 20, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],

    ]
wins.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[2]].innerText === boxText[e[1]].innerText) 
    && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.imgBox img').style.width = "200px";
            
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`;

    }
})

}

}
// bgMusic.play();
let boxex = document.getElementsByClassName('box');

Array.from(boxex).forEach(element => {
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click',(e)=>{
        if(boxText.innerText == ''){
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            CheckWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    })
})


// Add on click reset button Game will Resset

reset.addEventListener('click',()=>{
    let boxTexts = document.querySelectorAll('.boxText')
    Array.from(boxTexts).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgBox img').style.width = "0";
    document.querySelector('.line').style.width = "0";
})