import React from 'react';
import Tile from './Tile'
import './Board.css';

function BoardRow(props){
    let y = props.rowId;
    var tiles = Array.from({length: props.colCount}, ()=>undefined).map((element, index)=>{
        let x = index;
        return <Tile key={index} x={x} y={y} figureData={props.data} figureFn={props.figureFn}/>
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
            return <BoardRow key={index} rowId={index} colCount={this.props.colCount} data={this.props.data} figureFn={this.props.figureFn}/>
        });
    }
}

export default Board;