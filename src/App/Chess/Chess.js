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
            'boardData': this._getBoardData()
        };
    }

    render(){
        return(
            <div className="Chess-wrapper">
                <Board
                    rowCount={this.state.rowCount}
                    colCount={this.state.colCount}
                    data={this.state.boardData}
                    figureFn={this._handlingFigureClick}
                />
            </div>
        );
    }

    _handlingFigureClick(_getValidSteps, _color){
        _getValidSteps(_color);
    }

    _getBoardData(){
        return [
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,FigureImporter.WhitePawn,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null]
        ];
    }
}

export default Chess;