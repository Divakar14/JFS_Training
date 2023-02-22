import React from "react";

class Triangle extends React.Component{
    render(){
        var l = 12;
        var b = 14;
        var area= 0.5 * l * b;
        return(
            <div>
                <center>
                    <h1>Triangle</h1>
                    <h2>Traingle length : {l}</h2>
                    <h2>Traingle breadth : {b}</h2>
                    <h4>Area of the Traingle : {area}</h4>
                </center>
                <br></br>
            </div>
        );
    }
}

export default Triangle;