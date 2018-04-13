import { Black, White } from './_FigureBase'

class BlackBishop extends Black{
    constructor(props){
        super(props);
        this.state.figure = "Bishop";
        this._getValidSteps = _getValidSteps;
    }
}

class WhiteBishop extends White{
    constructor(props){
        super(props);
        this.state.figure = "Bishop";
        this._getValidSteps = _getValidSteps;
    }
}

var _getValidSteps = function(figureAttrs, boardData){
    console.log(figureAttrs.color, 'Bishop');
}

export { BlackBishop, WhiteBishop };