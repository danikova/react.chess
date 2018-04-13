import { Black, White } from './_FigureBase'

class BlackRook extends Black{
    constructor(props){
        super(props);
        this.state.figure = "Rook";
        this._getValidSteps = _getValidSteps;
    }
}

class WhiteRook extends White{
    constructor(props){
        super(props);
        this.state.figure = "Rook";
        this._getValidSteps = _getValidSteps;
    }
}

var _getValidSteps = function(figureAttrs, boardData){
    console.log(figureAttrs.color, 'Rook');
}

export { BlackRook, WhiteRook };