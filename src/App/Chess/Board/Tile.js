import React from 'react';

class Tile extends React.Component {
    render(){
        var classes = 'Tile' + (this.props.validSteps[this.props.y][this.props.x] ? ' valid' : '');
        var ActiveFigure = this.props.boardData[this.props.y][this.props.x];
        var figureFn = ActiveFigure ? this.props.figureFn : ActiveFigure;
        var figureData = ActiveFigure 
                            ? <ActiveFigure 
                                figureFn={figureFn} 
                                {...this.props}
                              /> 
                            : ActiveFigure;
        return(
            <div className={classes} onClick={()=>this.props.tileFn(this.props.x, this.props.y)}>
                {figureData}
            </div>
        );
    }
}

export default Tile;