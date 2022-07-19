let title = document.getElementById('title');

/*Le as posições que foram clicadas no tabuleiro, e os botões de start e restart */
document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");
    let start = document.getElementById("play");
    let restart = document.getElementById("restart")

    squares.forEach((square) =>{
        square.addEventListener('click', checkPosition);
    })

    start.addEventListener('click', startGame);
    restart.addEventListener('click', restartGame);
});

function checkPosition(event){
    let position = event.target.id;
    if(play(position)){
        
        setTimeout(()=>{
            alert("Game Over");
            
        }, 10)
    };

    updateSquares();

}

/*Adiciona os simbolos na tela: */
function updateSquares(){

    let squares = document.querySelectorAll('.square');

    squares.forEach((square =>{
        let position = square.id;
        let symbols = board[position];

        if(symbols != ''){
            square.innerHTML = '<div class=' + symbols +'></div>'
        }

    }))

}

/*O jogo só irá funcionar se ele for iniciado primeiro*/
function startGame(){
    console.log("Starting....")
    if(gameOver == false){
        gameOver = true;
        title.innerHTML = "Jogo da velha:"; 

    }
    if(gameOver == true){
        gameOver = false;
        title.innerHTML = "Vez de: " + symbol[player]; 
    }
}


/*Reseta todas as configurações do jogo*/
function restartGame(){
    console.log("Restarting....")
    squares = document.querySelectorAll('.square');

    squares.forEach((square =>{
        position = square.id;
        symbols = board[position];

        if(symbols != ''){
            square.innerHTML = '';
        }

    }))
    
    board = ['', '', '', '', '', '', '', '', ''];
    player = 0;
    symbol = ['O', 'X'];
    gameOver = false;

    
}