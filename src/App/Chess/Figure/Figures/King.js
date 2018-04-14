import { Black, White } from './_FigureBase';
import { field, initValidSteps } from './_getValidStepsHelper';

class BlackKing extends Black{
    constructor(props){
        super(props);
        this.state.figure = "King";
        this._getValidSteps = _getValidSteps;
    }
}

class WhiteKing extends White{
    constructor(props){
        super(props);
        this.state.figure = "King";
        this._getValidSteps = _getValidSteps;
    }
}

var _getValidSteps = function(figureAttrs, boardData){
    console.log(figureAttrs.color, 'King');
}

export { BlackKing, WhiteKing };