import { Black, White } from './_FigureBase';
import { field, initValidSteps } from './_getValidStepsHelper';
import { _calculateCrossMoves } from './Bishop'
import { _calculateLineMoves } from './Rook'

class BlackQueen extends Black{
    constructor(props){
        super(props);
        this.state.figure = "Queen";
        this._getValidSteps = _getValidSteps;
    }
}

class WhiteQueen extends White{
    constructor(props){
        super(props);
        this.state.figure = "Queen";
        this._getValidSteps = _getValidSteps;
    }
}

var _getValidSteps = function(figureAttrs, boardData){
    var validSteps = initValidSteps(boardData);
    validSteps = _calculateLineMoves(validSteps, figureAttrs, boardData);
    validSteps = _calculateCrossMoves(validSteps, figureAttrs, boardData);
    return validSteps;
}

export { BlackQueen, WhiteQueen };