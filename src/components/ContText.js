import React from 'react';
import './css/ContText.css';

export default class ContText extends React.Component{
    render(){
        return(
            <div style={{width: "75%", height: "auto", backgroundColor: "#EAEAEA", borderRadius: "2px", marginRight: "2vmin", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="container-text">
                    <p id="p-cont">
                    In elementum ante ut efficitur facilisis. Sed iaculis sapien at velit aliquet, ac euismod justo rutrum. Vestibulum aliquam ex nec mi fringilla, ac convallis lorem cursus. Mauris porttitor lorem nec fringilla congue. In sollicitudin nulla sit amet ultrices laoreet. Donec sodales vestibulum varius. Integer pulvinar feugiat mi imperdiet vestibulum. Quisque commodo mi ut luctus tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin mi quis lobortis condimentum. In in tincidunt neque, vel convallis enim. Donec efficitur nisl vitae ante condimentum, vitae fermentum lectus malesuada. Aliquam in dolor accumsan, posuere leo eget, mollis magna. Donec vulputate non urna mattis dictum. 
                    </p>
                </div>
            </div>           
        );
    }
}