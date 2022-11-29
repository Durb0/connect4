import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Player } from "src/models/player.model";
import { UpdateActivePlayer, UpdateGame, UpdateGrid, UpdatePlayers} from "./game.action";


export class GameStateModel{
    grid!: Array<Array<string>>;
    players!: Array<Player>;
    active_player!: number;
}

@State<GameStateModel>({
    name: 'game',
    defaults: {
        grid: [],
        players: [],
        active_player: 0
    }
})

@Injectable()
export class GameState {

    constructor(){
    }

    @Selector()
    static getGrid(state: GameStateModel){
        return state.grid;
    }

    @Selector()
    static getPlayers(state: GameStateModel){
        return state.players;
    }

    @Selector()
    static getActivePlayer(state: GameStateModel){
        return state.players[state.active_player];
    }

    @Action(UpdatePlayers)
    updatePlayers(ctx: StateContext<GameStateModel>, action: UpdatePlayers){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            players: action.payload
        });
    }


    @Action(UpdateGrid)
    updateGrid(ctx: StateContext<GameStateModel>, action: UpdateGrid){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            grid: action.payload
        });
    }
    
    @Action(UpdateActivePlayer)
    updateActivePlayer(ctx: StateContext<GameStateModel>, action: UpdateActivePlayer){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            active_player: action.payload
        });
    }

    @Action(UpdateGame)
    updateGame(ctx: StateContext<GameStateModel>, action: UpdateGame){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            grid: action.payload.grid,
            players: action.payload.players,
            active_player: action.payload.active_player
        });
    }
}