import React from 'react';
import Board from './Board/Board'
import FigureImporter from './Board/Figure/FigureImporter'

import './Chess.css';
import './Board/Figure/Figure.css';

class Chess extends React.Component {
    constructor(props){
        super(props);
        this.rowCount = 8;
        this.colCount = 8;
        this.selectedAttrs = undefined;
        this.whiteIsNext = true;
        this.state = {
            'boardData': this._getBoardData(),
            'validSteps': this._getValidSteps(8, 8)
        };
    }

    render(){
        return(
            <div className="Chess-wrapper">
                <Board
                    figureFn={(figureFn, figureAttrs)=>this._handlingFigureClick(figureFn, figureAttrs)}
                    tileFn={(x,y)=>this._handlingTileClick(x,y)}
                    rowCount={this.rowCount}
                    colCount={this.colCount}
                    {...this.state}
                />
            </div>
        );
    }

    _handlingTileClick(x, y){
        var samePos = this.selectedAttrs && !(this.selectedAttrs.pos.x === x && this.selectedAttrs.pos.y === y);
        if(!this.state.validSteps[y][x] && samePos){
            this._handlingNeutralTile(x, y);
        }else if(this.state.validSteps[y][x]){
            this._handlingValidSteps(x, y);
        }
    }

    _handlingNeutralTile(x, y){
        this.setState({
            'validSteps': this._getValidSteps()
        });
        delete this.selectedAttrs;
    }

    _handlingValidSteps(x, y){
        var copyBoardData = this.state.boardData.slice();
        copyBoardData[y][x] = copyBoardData[this.selectedAttrs.pos.y][this.selectedAttrs.pos.x]
        copyBoardData[this.selectedAttrs.pos.y][this.selectedAttrs.pos.x] = null;
        this.setState({
            'boardData': copyBoardData,
            'validSteps': this._getValidSteps()
        });
        delete this.selectedAttrs;
        this.whiteIsNext = !this.whiteIsNext;
    }

    _handlingFigureClick(figureFn, figureAttrs){
        var matchColors = (this.whiteIsNext)?figureAttrs.color === 'White':figureAttrs.color === 'Black';
        if(!matchColors)
           return; 

        var actBoardData = this.state.boardData.slice();
        this.setState({
            validSteps: figureFn(figureAttrs, actBoardData)
        });

        this.selectedAttrs = figureAttrs;
    }

    _getBoardData(){
        return [
            this._getMixedRow('White'),
            this._getPawnRow('White'),
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            this._getPawnRow('Black'),
            this._getMixedRow('Black')
        ];
    }

    _getPawnRow(color){
        return Array.from({length: this.colCount}, ()=>FigureImporter[color+'Pawn']);
    }

    _getMixedRow(color){
        var figList = ['Rook','Knight','Bishop','King','Queen','Bishop','Knight','Rook'];
        return Array.from({length: this.colCount}, ()=>undefined).map((e, i)=>
            FigureImporter[color+figList[i]]
        );
    }

    _getValidSteps(){
        return Array.from({length: this.rowCount}, ()=>Array.from({length: this.colCount}, ()=>false));
    }
}

export default Chess;