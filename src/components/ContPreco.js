import React from 'react';
import './css/ContPreco.css';
import axios from 'axios';
import ItemListaPreco from './ItemListaPreco';

export default class ContPreco extends React.Component{

    constructor(props){
        super(props);
        this.state = {itemsPreco: []};
    }

    /*async componentDidMount(){
        var obj = "";
        axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH&tsyms=BTC,USD,EUR&api_key=b542def189a74fa5d4b10bd9c35325026d18fedf94e1662863ddb5985c3ebb66")
        .then(response => {
            console.log(response.data.BTC;
        });
    }*/

    atualizaItems(itemSel){
        if(itemSel != ""){
            axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH&tsyms=BTC,USD,EUR&api_key=b542def189a74fa5d4b10bd9c35325026d18fedf94e1662863ddb5985c3ebb66")
            .then(response => {
                switch(itemSel){
                    case "BTC":
                        this.setState({itemsPreco: [response.data.BTC.BTC, response.data.BTC.USD, response.data.BTC.EUR]});
                        break;
                    case "ETH":
                        this.setState({itemsPreco: [response.data.ETH.BTC, response.data.ETH.USD, response.data.ETH.EUR]});
                        break;
                    case "DASH":
                        this.setState({itemsPreco: [response.data.DASH.BTC, response.data.DASH.USD, response.data.DASH.EUR]});
                        break;
                }
            }); 
        }
    }

    renderItems(){
        let items = [];
        items.push(<ItemListaPreco key="1" tipo="BTC" valor={this.state.itemsPreco[0]}/>);
        items.push(<ItemListaPreco key="2" tipo="USD" valor={this.state.itemsPreco[1]}/>);
        items.push(<ItemListaPreco key="3" tipo="EUR" valor={this.state.itemsPreco[2]}/>);
        return(items);
    }

    render(){
        return(
            <div style={{width: "75%", height: "100%", borderRadius: "2px", backgroundColor: "white", marginRight: "2vmin"}}>
                <div className="cont-selecao">
                    <p className="p-sel-moeda">Selecione a moeda</p>
                    <select id="cmbMoedas">
                        <option value="">-</option>
                        <option value="BTC" onClick={() => this.atualizaItems("BTC")}>BTC</option>
                        <option value="ETH" onClick={() => this.atualizaItems("ETH")}>ETH</option>
                        <option value="DASH" onClick={() => this.atualizaItems("DASH")}>DASH</option>
                    </select>
                </div>
                <div className="cont-result">
                    <div style={{width: "100%", height: "10%", float: "left", backgroundColor: "#FFFAFA", textAlign: "center"}}>
                        <p className="p-titulo">Preços</p>
                    </div>
                </div>
                <div style={{width: "100%"}}>
                {
                    (this.state.itemsPreco.length != 0) ? this.renderItems() : (null)
                }
                </div>
            </div>
        );
    }
}

/*

*/
