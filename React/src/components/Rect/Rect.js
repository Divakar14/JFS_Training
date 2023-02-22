import React from "react";

class Rect extends React.Component{
    render(){
        var l=5;
        var b=10;
        var area=l*b;
        return(
            <div>
                <center>
                    <h1>Rectangle</h1>
                    <h2>Rectangle length : {l}</h2>
                    <h2>Rectangle breadth : {b}</h2>
                    <h4>Area of the Rectangle : {area}</h4>
                </center>
                <br></br>
            </div>
        );
    }
}

export default Rect;