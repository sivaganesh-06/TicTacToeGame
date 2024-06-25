const arr = document.querySelectorAll('.box');
const para=document.querySelector('p');
let str = 'O';
for (btn of arr) {
    btn.addEventListener('click', ticTacToeGame)
}

function ticTacToeGame(e) {
    if (e.target.innerText === 'O' || e.target.innerText === 'X') {

    }
    else if (e.target.innerText === '') {
        if (str === 'O') {
            str = 'X';
        }
        else {
            str = 'O';
        }
        e.target.innerText = str;
    }
    if ((arr[0].innerText == 'X' && arr[1].innerText == 'X' && arr[2].innerText == 'X') || (arr[0].innerText == 'O' && arr[1].innerText == 'O' && arr[2].innerText == 'O')) {
        para.innerText='you won the game';
        stopTheGame();
    }
    else if ((arr[0].innerText == 'X' && arr[3].innerText == 'X' && arr[6].innerText == 'X') || (arr[0].innerText == 'O' && arr[3].innerText == 'O' && arr[6].innerText == 'O')){
        para.innerText='you won the game';
        stopTheGame();
    }
    else if((arr[2].innerText == 'X' && arr[5].innerText == 'X' && arr[8].innerText == 'X') || (arr[2].innerText == 'O' && arr[5].innerText == 'O' && arr[8].innerText == 'O')){
        para.innerText='you won the game';
        stopTheGame();
    }
    else if((arr[6].innerText == 'X' && arr[7].innerText == 'X' && arr[8].innerText == 'X') || (arr[6].innerText == 'O' && arr[7].innerText == 'O' && arr[8].innerText == 'O')){
        para.innerText='you won the game';
        stopTheGame();
    }
    else if((arr[0].innerText == 'X' && arr[4].innerText == 'X' && arr[8].innerText == 'X') || (arr[0].innerText == 'O' && arr[4].innerText == 'O' && arr[8].innerText == 'O')){
        para.innerText='you won the game';
        stopTheGame();
    }
    else if((arr[2].innerText == 'X' && arr[4].innerText == 'X' && arr[6].innerText == 'X') || (arr[2].innerText == 'O' && arr[4].innerText == 'O' && arr[6].innerText == 'O')){
        para.innerText='you won the game';
        stopTheGame();
    }
    else if((arr[1].innerText == 'X' && arr[4].innerText == 'X' && arr[7].innerText == 'X') || (arr[1].innerText == 'O' && arr[4].innerText == 'O' && arr[7].innerText == 'O')){
        para.innerText='you won the game';
        stopTheGame();
    }
    else if((arr[3].innerText == 'X' && arr[4].innerText == 'X' && arr[5].innerText == 'X') || (arr[3].innerText == 'O' && arr[4].innerText == 'O' && arr[5].innerText == 'O')){
        para.innerText='you won the game';
        stopTheGame();
    }
}

function stopTheGame() {
    for (btn of arr) {
        btn.removeEventListener('click', ticTacToeGame);
    }
}