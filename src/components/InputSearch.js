import React from 'react';
import icon from '../imgs/icon_search.png';
import './css/InputSearch.css';

export default class InputSearch extends React.Component {
    render(){
        return(
            <div className='container-input'>
                <input type="text" placeholder="Search" className="input-search"/>
                <div style={{display: "flex", alignItems: "center", width: "10%"}}>
                    <img src={icon} className="icon-search" height="70%" />
                </div>
            </div>
        );
    }
}
