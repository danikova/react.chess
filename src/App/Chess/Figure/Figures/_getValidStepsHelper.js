var field = {
    isEmpty: (board, x, y)=>{
        var cell = field._validPos(board, x, y);
        return cell !== null && cell === true;
    },

    isNotEmptyAndSame: (board, x, y, figureAttrs)=>{
        var empty = field.isEmpty(board, x, y);
        if(empty)
            return false;
        var same = field._sameType(board[y][x], figureAttrs);
        return same === true;
    },

    isNotEmptyAndNotSame: (board, x, y, figureAttrs)=>{
        var empty = field.isEmpty(board, x, y);
        if(empty)
            return false;
        var same = field._sameType(board[y][x], figureAttrs);
        return same === false;
    },

    _validPos: (board, x, y)=>{
        if(0 <= y && y < board.length && 0 <= x && x < board[0].length){
            if(board[y][x] !== null){
                return false;
            }else{
                return true;
            }
        }else{
            return null;
        }
    },

    _sameType: (boardElement, figureAttrs)=>{
        if(!boardElement)
            return null;
        return boardElement.name.startsWith(figureAttrs.color);
    }
};

function initValidSteps(board){
    return Array.from({length: board.length}, ()=>Array.from({length: board[0].length}, ()=>false));
}

export {
    field,
    initValidSteps
};
