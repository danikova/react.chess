import { Black, White } from './_FigureBase';
import { field, initValidSteps } from './_getValidStepsHelper';

class BlackPawn extends Black{
    constructor(props){
        super(props);
        this.state.figure = "Pawn";
        this._getValidSteps = _getValidSteps;
    }
}

class WhitePawn extends White{
    constructor(props){
        super(props);
        this.state.figure = "Pawn";
        this._getValidSteps = _getValidSteps;
    }
}

var _getValidSteps = function(figureAttrs, boardData){
    var pos = figureAttrs.pos;
    var validSteps = initValidSteps(boardData);

    var newY = pos.y + figureAttrs.direction;
    if(field.isEmpty(boardData, pos.x, newY)){
        validSteps[newY][pos.x] = true;
        newY += figureAttrs.direction;
        if(field.isEmpty(boardData, pos.x, newY) && (
            (figureAttrs.color === 'White' && pos.y === 1) || (figureAttrs.color === 'Black' && pos.y === boardData.length-2)
        )){
            validSteps[newY][pos.x] = true;
        }
    }

    if(field.isNotEmptyAndNotSame(boardData, pos.x+1, pos.y + figureAttrs.direction, figureAttrs))
        validSteps[pos.y + figureAttrs.direction][pos.x+1] = true;
    if(field.isNotEmptyAndNotSame(boardData, pos.x-1, pos.y + figureAttrs.direction, figureAttrs))
        validSteps[pos.y + figureAttrs.direction][pos.x-1] = true;
    
    return validSteps;
}

export { BlackPawn, WhitePawn };