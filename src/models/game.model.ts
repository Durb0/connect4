import { Player } from "./player.model";

export class Game {
    grid:Array<Array<string>> = [];
    players: Array<Player> = [];
    active_player: number = 0;

    constructor() {
        this.resetGrid();
        this.players = [
            new Player('red'),
            new Player('yellow')
        ];
        this.active_player = this.randomPlayer();
    }

    /**
     * @brieg This function is called for restarting a new game
     */
    newGame(){
        this.resetGrid();
        this.active_player = this.randomPlayer();
    }

    /**
     * 
     * @returns a random number between 0 and the number of players
     */
    randomPlayer(){
        return Math.floor(Math.random() * this.players.length);
    }

    /**
     * 
     * @returns a 2D array of strings with 'none' as default value
     */
    resetGrid(){
        this.grid = [];
        for (let i:number = 0; i < 7; i++) {
            this.grid[i] = [];
            for (let j:number = 0; j < 6; j++) {
                this.grid[i][j] = 'none';
            }
        }
        return this.grid;
    }

    /**
     * select the next player in the players array
     */
    nextActivePlayer(){
        this.active_player = (this.active_player + 1) % this.players.length;
    }

    /**
     * 
     * @returns the active player object
     */
    getActivePlayer(){
        return this.players[this.active_player];
    }


    /**
     * 
     * @param colIndex 
     * @returns return rowIndex of the added pawn or -1 if the column is full or the winner if the game is over
     */
    addPawn(colIndex:number):number|string{
        let rowIndex = this.getFreeRowIndex(colIndex);
        if(rowIndex != -1){
            this.grid[colIndex][rowIndex] = this.getActivePlayer().name;
            const winner = this.checkWin(colIndex,rowIndex);
            if(winner == 'none'){
                this.nextActivePlayer();
                return rowIndex;
            }else{
                return winner;
            }
        }
        return rowIndex;
    }

    /**
     * 
     * @param colIndex 
     * @returns the rowIndex of the first free row in the column or -1 if the column is full
     */
    getFreeRowIndex(colIndex:number){
        const result = this.grid[colIndex].lastIndexOf('none');
        return result;
    }

    /**
     * 
     * @param colIndex 
     * @param rowIndex 
     * @returns the name of the winner or 'none' if there is no winner
     */
    checkWin(colIndex:number,rowIndex:number){
        let player = this.grid[colIndex][rowIndex];
        if(
            this.checkHorizontalWin(colIndex,rowIndex,player) ||
            this.checkVerticalWin(colIndex,rowIndex,player) ||
            this.checkDiagonalWin(colIndex,rowIndex,player)){
                this.players[this.active_player].score++;
                return player;
        }
        else if(this.checkDraw()){
            return 'draw';
        }
        else{
            return 'none';
        }
    }

    /**
     * 
     * @returns true if the grid is full
     */
    checkDraw(){
        for (let i:number = 0; i < this.grid.length; i++) {
            if(this.getFreeRowIndex(i) != -1){
                return false;
            }
        }
        return true;
    }

    /**
     * 
     * @param colIndex 
     * @param rowIndex 
     * @param player 
     * @returns true if there is 4 pawns of the same color in a row
     */
    checkHorizontalWin(colIndex:number,rowIndex:number,player:string){
        return(
            this.count(player, colIndex, rowIndex, 1, 0)
            + this.count(player, colIndex, rowIndex, -1, 0)
            + 1 >= 4);
    }

    /**
     * 
     * @param colIndex 
     * @param rowIndex 
     * @param player 
     * @returns true if there is 4 pawns of the same color in a column
     * 
     * @comment this function don't need to check upper rows because the pawns are added at the bottom of the column
     */
    checkVerticalWin(colIndex:number,rowIndex:number,player:string){
        return(
            this.count(player, colIndex, rowIndex, 0, 1)
            + 1 >= 4);
    }

    /**
     * 
     * @param colIndex 
     * @param rowIndex 
     * @param player 
     * @returns true if there is 4 pawns of the same color in a diagonal
     */
    checkDiagonalWin(colIndex:number,rowIndex:number,player:string){
        return(
            this.count(player, colIndex, rowIndex, 1, 1)
            + this.count(player, colIndex, rowIndex, -1, -1) // direction \
            + 1 >= 4
            ||
            this.count(player, colIndex, rowIndex, 1, -1)
            + this.count(player, colIndex, rowIndex, -1, 1) // direction /
            + 1 >= 4);
    }

    /**
     * 
     * @param player 
     * @param colIndex 
     * @param rowIndex 
     * @param colOffset 
     * @param rowOffset 
     * @returns the number of pawns of the same color in the direction defined by the offsets
     */
    count(player:string, colIndex:number, rowIndex:number, colOffset:number, rowOffset:number){
        let count = 0;
        let col = colIndex + colOffset;
        let row = rowIndex + rowOffset;
        while(col >= 0 && col < this.grid.length && row >= 0 && row < this.grid[col].length && this.grid[col][row] == player){
            count++;
            col += colOffset;
            row += rowOffset;
        }
        return count;
    }

}