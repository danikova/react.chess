import { Black, White } from './_FigureBase';
import { field, initValidSteps } from './_getValidStepsHelper';

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
    console.log(figureAttrs.color, 'Queen');
}

export { BlackQueen, WhiteQueen };