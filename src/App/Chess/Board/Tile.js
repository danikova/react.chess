import React from 'react';

class Tile extends React.Component {
    render(){
        var ActiveFigure = this.props.figureData[this.props.y][this.props.x];
        var figureFn = ActiveFigure ? this.props.figureFn : ActiveFigure;
        var figureData = ActiveFigure ? <ActiveFigure figureFn={figureFn}/> : ActiveFigure;
        return(
            <div className="Tile">
                {figureData}
            </div>
        );
    }
}

export default Tile;