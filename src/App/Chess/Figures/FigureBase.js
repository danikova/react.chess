import React from 'react';

class FigureBase extends React.Component{
    constructor(props){
        super(props);
        this.type = props.type;
    }

    render(){
        return(
            <div className="figure-base">
                {this.type}
            </div>
        );
    }
}

export default FigureBase;