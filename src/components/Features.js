import React from 'react';
import './css/Features.css';

export default class Features extends React.Component{
    render(){
        return(
            <div style={{width: "24%", height: "100%", backgroundColor: "#EAEAEA", borderRadius: "2px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <a className="p-feature" href="#">Features 1</a>
                <a className="p-feature" href="#">Features 2</a>
                <a className="p-feature" href="#">Features 3</a>
                <a className="p-feature" href="#">Features 4</a>
                <a className="p-feature" href="#">Features 5</a>
                <a className="p-feature" href="#">Features 6</a>
            </div>
        );
    }
}