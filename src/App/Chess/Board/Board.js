import React from 'react';
import Tile from './Tile'
import './Board.css';

function BoardRow(props){
    var tiles = Array.from({length: props.colCount}, ()=>undefined).map((element, index)=>{
        return <Tile key={index}/>
    });

    return(
        <div className="Board-row">
            {tiles}
        </div>
    );
}

class Board extends React.Component {
    render(){
        return(
            <div className="Board-row-wrapper">
                {this._makeRows()}
            </div>
        );
    }

    _makeRows(){
        return Array.from({length: this.props.rowCount}, ()=>undefined).map((element, index)=>{
            return <BoardRow key={index} colCount={this.props.colCount} />
        });
    }
}

export default Board;