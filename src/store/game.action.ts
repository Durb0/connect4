import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";

export class UpdatePlayers{
    static readonly type = '[Game] UpdatePlayers';
    constructor(public payload: Array<Player>){}
}

export class UpdateGrid{
    static readonly type = '[Game] UpdateGrid';
    constructor(public payload: Array<Array<string>>){}
}

export class UpdateActivePlayer{
    static readonly type = '[Game] UpdateActivePlayer';
    constructor(public payload: number){}
}

export class UpdateGame{
    static readonly type = '[Game] UpdateGame';
    constructor(public payload: Game){}
}