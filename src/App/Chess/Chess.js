import React from 'react';
import Board from './Board/Board'
import './Chess.css';

class Chess extends React.Component {
    render(){
        return(
            <div className="Chess-wrapper">
                <Board
                    rowCount={8}
                    colCount={8}
                />
            </div>
        );
    }
}

export default Chess;