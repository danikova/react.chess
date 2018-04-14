import React from 'react';

var FigureUnicode = {
    'King': {
        'color':{
            'White':"♔",
            'Black':"♚"
        }
    },
    'Queen': {
        'color':{
            'White':"♕",
            'Black':"♛"
        }
    },
    'Rook': {
        'color':{
            'White':"♖",
            'Black':"♜"
        }
    },
    'Bishop': {
        'color':{
            'White':"♗",
            'Black':"♝"
        }
    },
    'Knight': {
        'color':{
            'White':"♘",
            'Black':"♞"
        }
    },
    'Pawn': {
        'color':{
            'White':"♙",
            'Black':"♟"
        }
    }
};

class _FigureBase extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pos:{
                x: this.props.x,
                y: this.props.y
            }
        };
    }

    render(){
        return(
            <div className="figure-base" onClick={()=>this.props.figureFn(this._getValidSteps, this._getFigureAttr())}>
                {FigureUnicode[this.state.figure].color[this.state.color]}
            </div>
        );
    }

    _getFigureAttr(){
        return Object.assign({direction: this.state.color === 'White' ? 1 : -1},this.state);
    }

    _getValidSteps(figureAttrs, boardData){
        console.log('Base');
    }
}

class White extends _FigureBase{
    constructor(props){
        super(props);
        this.state.color = "White";
    }
}

class Black extends _FigureBase{
    constructor(props){
        super(props);
        this.state.color = "Black";
    }
}

export {
    White,
    Black
};