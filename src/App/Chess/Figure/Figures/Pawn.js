import { Black, White } from './_FigureBase'

class BlackPawn extends Black{
    constructor(props){
        super(props);
        this.state.figure = "Pawn";
        this._getValidSteps = _getValidSteps;
    }
}

class WhitePawn extends White{
    constructor(props){
        super(props);
        this.state.figure = "Pawn";
        this._getValidSteps = _getValidSteps;
    }
}

var _getValidSteps = function(figureAttrs, boardData){
    console.log(figureAttrs.color, 'Pawn');
}

export { BlackPawn, WhitePawn };