import { Black, White } from './_FigureBase';
import { field, initValidSteps } from './_getValidStepsHelper';

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
    var validSteps = initValidSteps(boardData);
    for (let _dir = 0; _dir <= 1; _dir++) {
        for (let _s1 = -1; _s1 <= 1; _s1+=2) {
            for (let _s2 = -2; _s2 <= 2; _s2+=4) {
                var bX = figureAttrs.pos.x + (_dir?_s1:_s2);
                var bY = figureAttrs.pos.y + (_dir?_s2:_s1);
                if(field.isEmpty(boardData, bX, bY) || field.isNotEmptyAndNotSame(boardData, bX, bY, figureAttrs)){
                    validSteps[bY][bX] = true;
                }
            }
        }
    }
    return validSteps;
}

export { BlackKnight, WhiteKnight };