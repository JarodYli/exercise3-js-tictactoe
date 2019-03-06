
let boardArray = [0,0,0,0,0,0,0,0,0];
// method to draw the board with row and columns (columns will be tiles)
function drawBoard(){
    // draw each tile
    // need a variable to hold the rows and column html
    var k = 0; 
    var html = "";
    for(i = 0; i < 3; i++){
        // draw the row start
        var rowID = "row-" + i;
        html += "<div class='row tileRow' id='" + rowID + "'>";
        // loop for the tiles
        for (j = 0; j < 3; j++){
            // draw the col start
            var colID = "col-" + k;
            html += "<div class='col tileCol tileColEmpty' data-id='" + k + "' id='" + colID + "'></div>";
            k++;
        }
        html += "</div>";
    }
    
    var board = document.getElementById("board");
    board.innerHTML = html;
    // mouse over for the tile that is empty to display an "X"
    
    //need a variable to hold my attributes i want to add to my columns
    var tiles = document.getElementsByClassName("tileCol");

    for (var i = 0; i < 9; i++){
        tiles[i].addEventListener("click", tileClickHandler, false);
    }
    

}
function tileClickHandler(){
    var index = this.getAttribute("data-id");

    // store 1 on click to board array at the index
    if (boardArray[index] == 0){
        boardArray[index] = 1;
        //replace class with tileColX
        this.classList.remove("tileColEmpty");
        this.classList.add("tileColX");
    }
    // store 2 on click to board array at the index if there is already a 1
    else if (boardArray[index] == 1){
        boardArray[index] = 2;
        //replace class with tileColO
        this.classList.remove("tileColX");
        this.classList.add("tileColO");
    }
    // store 0 if item stored is 2
    else if (boardArray[index] == 2){
        boardArray[index] = 0;
        //replace with tileColN
        this.classList.remove("tileColO");
        this.classList.add("tileColEmpty");
    }
    //add an class that holds the image in css -done
    // 
    //add/replace the class to tileCol - done


    console.log(boardArray[index]);
    
    // check the arrangement of items in boardArray that show a player has won

        // 8 different conditions:
        /* 111... || 222... || ...111|| ...222 || last row for consec || first index,second,and ninth, ||
        || third, fifth, and seventh */

        // Store the rows as different arrays
        

        // ROWS
        // Cat Condition
        if (boardArray.includes(0)){


            // Yellow
        if (boardArray[0] == 1 && boardArray[1] == 1 && boardArray[2]== 1 ){
            console.log("Player Yellow Wins");
        }
        if (boardArray[3] == 1 && boardArray[4] == 1 && boardArray[5]== 1){
            console.log("Player Yellow Wins");
        }
        if (boardArray[6] == 1 && boardArray[7] == 1 && boardArray[8]== 1){
            console.log("Player Yellow Wins");
        }
        // RED
        if (boardArray[0] == 2 && boardArray[1] == 2 && boardArray[2]== 2){
            console.log("Player Red ")
        }
        if (boardArray[3] == 2 && boardArray[4] == 2 && boardArray[5]== 2){
            console.log("Player Red ")
        }
        if (boardArray[6] == 2 && boardArray[7] == 2 && boardArray[7]== 2){
            console.log("Player Red ")
        }

        // Diagonals

        //RED
        if (boardArray[0] == 2 && boardArray[4] == 2 && boardArray[8]== 2){
            console.log("Player Red ")
        }
        if (boardArray[2] == 2 && boardArray[4] == 2 && boardArray[6]== 2){
            console.log("Player Red ")
        }
        //Yellow
        if (boardArray[0] == 1 && boardArray[4] == 1 && boardArray[8]== 2){
            console.log("Player Yellow ")
        }
        if (boardArray[2] == 1 && boardArray[4] == 1 && boardArray[6]== 2){
            console.log("Player Yellow ")
        }

        //vertical
        
        //RED
        if (boardArray[0] == 2 && boardArray[3] == 2 && boardArray[6]== 2){
            console.log("Player Red ")
        }
        if (boardArray[1] == 2 && boardArray[4] == 2 && boardArray[7]== 2){
            console.log("Player Red ")
        }
        if (boardArray[2] == 2 && boardArray[5] == 2 && boardArray[8]== 2){
            console.log("Player Red ")
        }

        //Yellow
        if (boardArray[0] == 1 && boardArray[3] == 1 && boardArray[6]== 1){
            console.log("Player Yellow ")
        }
        if (boardArray[1] == 1 && boardArray[4] == 1 && boardArray[7]== 1){
            console.log("Player Yellow ")
        }
        if (boardArray[2] == 1 && boardArray[5] == 1 && boardArray[8]== 1){
            console.log("Player Yellow ")
        }
    }
        else {
            console.log("cat wins");
        }
    //report the player who won


}


//add a class to the col that relates to an empty tile. tileColEmpty

// click handler for the tile that is empty to place an "X"
// clicking again will replace the "X" with a "0"
// we need an array to keep the values of each tile
// we need to update the array values when a tile is selected as an X or 0
// we need a win condition to be checked after each tile is selected to inspect the array and see if there is a winner
// we need a reset button that will refresh the page