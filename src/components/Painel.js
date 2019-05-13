import React from 'react';
import './css/Painel.css';
import back from '../imgs/backPreco.jpg';

export default class Painel extends React.Component{
    render(){
        return(
            <div className="cont-painel">
                <p className="p-painel">Preços</p>
            </div>
        );
    }
}