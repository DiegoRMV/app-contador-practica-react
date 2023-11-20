import React from "react";
import "../stylesheets/Counter.css"

function Counter({clics}){
    return (
        <div className="counter">
            {clics}
        </div>
    );
}

export default Counter;