import { Black, White } from './_FigureBase'

class BlackKnight extends Black{
    constructor(props){
        super(props);
        this.state.figure = "Knight";
        this._getValidSteps = _getValidSteps;
    }
}

class WhiteKnight extends White{
    constructor(props){
        super(props);
        this.state.figure = "Knight";
        this._getValidSteps = _getValidSteps;
    }
}

var _getValidSteps = function(figureAttrs, boardData){
    console.log(figureAttrs.color, 'Knight');
}

export { BlackKnight, WhiteKnight };