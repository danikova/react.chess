import React from 'react';
import Board from './Board/Board'
import FigureImporter from './Figure/FigureImporter'

import './Chess.css';
import './Figure/Figure.css';

class Chess extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'rowCount': 8,
            'colCount': 8,
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
                    {...this.state}
                />
            </div>
        );
    }

    _handlingTileClick(x, y){
        console.log(x, y);
    }

    _handlingFigureClick(figureFn, figureAttrs){
        var actBoardData = this.state.boardData.slice();
        this.setState({
            validSteps: figureFn(figureAttrs, actBoardData)
        });
    }

    _getBoardData(){
        return [
            [null,FigureImporter.BlackPawn,null,null,null,null,null,null],
            [null,null,FigureImporter.WhitePawn,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [FigureImporter.BlackPawn,null,null,null,null,null,null,null],
            [FigureImporter.BlackPawn,null,FigureImporter.WhitePawn,null,null,null,null,null],
            [null,FigureImporter.BlackPawn,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null]
        ];
    }

    _getValidSteps(rowCount, colCount){
        return Array.from({length: rowCount}, ()=>Array.from({length: colCount}, ()=>false));
    }
}

export default Chess;