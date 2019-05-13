import React from 'react';
import './css/Secoes.css';

export default class Secoes extends React.Component{
    render(){
        return(
            <div style={{width: "20%", height: "100%", backgroundColor: "#EAEAEA", borderRadius: "2px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <a className="p-secao" href="#">Section 1</a>
                <a className="p-secao" href="#">Section 2</a>
                <a className="p-secao" href="#">Section 3</a>
                <a className="p-secao" href="#">Section 4</a>
                <a className="p-secao" href="#">Section 5</a>
                <a className="p-secao" href="#">Section 6</a>
                <a className="p-secao" href="#">Section 7</a>
                <a className="p-secao" href="#">Section 8</a>
                <a className="p-secao" href="#">Section 9</a>
                <a className="p-secao" href="#">Section 10</a>
                <a className="p-secao" href="#">Section 11</a>
                <a className="p-secao" href="#">Section 12</a>
                <a className="p-secao" href="#">Section 13</a>
                <a className="p-secao" href="#">Section 14</a>
                <a className="p-secao" href="#">Section 15</a>
            </div>
        );
    }
}