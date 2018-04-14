import { Black, White } from './_FigureBase';
import { field, initValidSteps } from './_getValidStepsHelper';

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
    var validSteps = initValidSteps(boardData);
    return _calculateCrossMoves(validSteps, figureAttrs, boardData);
}

var _calculateCrossMoves = function(validSteps, figureAttrs, boardData){
    for (let _x = -1; _x <= 1; _x+=2) {
        for (let _y = -1; _y <= 1; _y+=2) {
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
    return validSteps;
}

export { BlackBishop, WhiteBishop, _calculateCrossMoves };