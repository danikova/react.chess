import React from 'react';

import { FigureBase } from '../Figures/FigureImporter'

class Tile extends React.Component {
    render(){
        return(
            <div className="Tile">
                <FigureBase type="&#9818;" />
            </div>
        );
    }
}

export default Tile;