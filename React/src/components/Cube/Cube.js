import React from "react";

class Cube extends React.Component{
    render(){
        var a = 12;
        var area = a * a * a;
        return(
            <div>
                <center>
                    <h1>Cube</h1>
                    <h2>Cube Sides : {a}</h2>
                    <h4>Area of the Cube : {area}</h4>
                </center>
                <br></br>
            </div>
        );
    }
}

export default Cube;