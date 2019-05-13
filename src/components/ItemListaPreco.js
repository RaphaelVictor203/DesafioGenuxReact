import React from 'react';
import './css/ItemListaPreco.css';

export default class ItemLisPreco extends React.Component{
    render(){
        return(
            <div style={{width: "100%", height: "10%", marginBottom: "-20px", backgroundColor: "#96C946", textAlign: "center"}}>
                <p className="p-info-valor">{this.props.tipo} - {this.props.valor}</p>
            </div>
        );
    }
}