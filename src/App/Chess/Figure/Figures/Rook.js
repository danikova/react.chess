import { Black, White } from './_FigureBase';
import { field, initValidSteps } from './_getValidStepsHelper';

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
    var validSteps = initValidSteps(boardData);
    return _calculateLineMoves(validSteps, figureAttrs, boardData);
}

var _calculateLineMoves = function(validSteps, figureAttrs, boardData){
    for (let _x = -1; _x <= 1; _x++) {
        for (let _y = -1; _y <= 1; _y++) {
            if(_x === 0 || _y === 0){
                var bX = figureAttrs.pos.x + _x;
                var bY = figureAttrs.pos.y + _y;
                var iE = field.isEmpty(boardData, bX, bY);
                var nEmNNS = field.isNotEmptyAndNotSame(boardData, bX, bY, figureAttrs);
                while(iE || nEmNNS){
                    validSteps[bY][bX] = true;
                    bX += _x;
                    bY += _y;
                    if(nEmNNS)
                        break;
                        
                    iE = field.isEmpty(boardData, bX, bY);
                    nEmNNS = field.isNotEmptyAndNotSame(boardData, bX, bY, figureAttrs);
                }
            }
        }
    }
    return validSteps;
}

export { BlackRook, WhiteRook };