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
    var validSteps = initValidSteps(boardData);

    for (let _x = -1; _x <= 1; _x++) {
        for (let _y = -1; _y <= 1; _y++) {
            var bX = figureAttrs.pos.x + _x;
            var bY = figureAttrs.pos.y + _y;
            if(field.isEmpty(boardData, bX, bY) || field.isNotEmptyAndNotSame(boardData, bX, bY, figureAttrs)){
                validSteps[bY][bX] = true;
            }
        }
    }

    return validSteps;
}

export { BlackKing, WhiteKing };