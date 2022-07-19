//Variaveis:
let board = ['', '', '', '', '', '', '', '', ''];
let player = 0;
let symbol = ['O', 'X'];
let gameOver = true;

/*Possiveis soluções de vitória*/
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*Preenche o board com o simbolo de cada jogador e faz a troca entre eles*/
function play(position){
    
    if(gameOver){
        return;
    }

    if(gameOver == false){
        if(board[position] == ""){
            board[position] = symbol[player];
            
            if(isWin()){
                gameOver = isWin();
            }
            if(isTie()){
                gameOver = isTie();
            }
    
            if(player == 0){
                player = 1;
                title.innerHTML = "Vez de: " + symbol[player]; 
            }else{
                player = 0;
                title.innerHTML = "Vez de: " + symbol[player]; 
            }
    }
    
    }

    return gameOver;
}

/*Verifica se há um ganhador*/
function isWin(){

    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i]

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && 
            board[pos1] != ""){

            return true;
        }
    }

    return false;
}

/*Verifica se há um empate*/
function isTie(){
    let spaces = 9;
    for (let c = 0; c < board.length;c++){
        if(board[c] != ''){
            spaces -= 1;
        }
    }
    if(spaces == 0){
        return true;
    }

    return false;
}