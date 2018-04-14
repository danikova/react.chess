import React from 'react';
import Tile from './Tile'
import './Board.css';

class BoardRow extends React.Component{
    render(){
        let y = this.props.rowId;
        var tiles = Array.from({length: this.props.colCount}, ()=>undefined).map((element, index)=>{
            let x = index;
            return(
                <Tile 
                    onClick={()=>console.log('asd')}
                    key={index} 
                    x={x} 
                    y={y}
                    {...this.props}
                />
            );
        });

        return(
            <div className="Board-row">
                {tiles}
            </div>
        );
    }
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
            return(
                <BoardRow 
                    key={index} 
                    rowId={index}
                    {...this.props}
                />
            );
        });
    }
}

export default Board;