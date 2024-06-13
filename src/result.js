import React from "react";
import "../src/App.css"

const Result = (props) =>
    {
        const {converted,amount,from,to} = props;
        return <div className="result">
            <p>{amount} {from} = </p>
            <h1>{(converted)} {to}</h1>
            <h5>1 {from} = {(converted/amount).toFixed(3)} {to}</h5>
            <h5>1 {to} = {(1/(converted/amount)).toFixed(3)} {from}</h5> 
    </div>
    }



export default Result



