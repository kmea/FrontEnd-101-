var PLAYER_1 = "X";
var PLAYER_2 = "O";

var currentyPlayer = PLAYER_1;

function nextTurn(){
    currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2
    : PLAYER_1;
}

var blocks = document.querySelector('.block');


for (var i=0; i < blocks.length; i++){
    var block = blocks[i];
    block.addEventlistener('click', function(event){
    var target = event.target;
    target.textContext = CurrentPlayer;
    nextTurn();
    }
}