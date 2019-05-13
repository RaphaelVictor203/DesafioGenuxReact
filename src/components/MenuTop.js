import React from 'react';
import './css/MenuTop.css';
import logo from '../imgs/logo_genux.PNG';
import InputSearch from './InputSearch';

export default class MenuTop extends React.Component{
    render(){
        return(
            <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
                <div className="container-menu">
                    <div className="cont-logo">
                        <img src={logo} alt="plataforma de negociação de criptomoedas" className="img-style"/>
                    </div>
                    <div className="cont-pesquisa">
                        <div className="cont-topicos">
                            <div style={{float: "right", height: "100%", width: "55%", flexDirection: "row", display: "flex", alignItems: "center"}}>
                                <a href="#" className="topico">Topic 1</a>
                                <a href="#" className="topico">Topic 2</a>
                                <a href="#" className="topico">Topic 3</a>
                                <a href="#" className="topico">Topic 4</a>
                            </div>                        
                        </div>
                        <div className="cont-search">
                            <div style={{float: "right", height: "100%", width: "50%", flexDirection: "row", display: "flex", alignItems: "center"}}>
                                <InputSearch/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border"/><div></div>
            </div>
        );
    }
}
