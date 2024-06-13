import React, { useState } from "react";
import "../src/App.css"
import { useEffect } from "react";

const Result = (props) =>
    {
        const {converted,amount,from,to} = props;
        const[curList,setCurList] = useState([])
        useEffect(()=>{
            const host = 'api.frankfurter.app'
            fetch(`https://${host}/currencies`)
            .then(resp => resp.json())
            .then(data => {
              setCurList(data)
            })
            },[])
        return <div className="result">
            {(curList[from] === "Indian Rupee")?<p>{parseFloat(amount).toLocaleString("en-IN")} {curList[from]} = </p>:<p>{parseFloat(amount).toLocaleString()} {curList[from]} = </p>}
            {(curList[to] === "Indian Rupee")?<h1>{(converted).toLocaleString("en-IN")} {curList[to]}</h1>:<h1>{(converted).toLocaleString()} {curList[to]}</h1>}
            <h5>1 {from} = {((converted/amount).toFixed(3))} {to}</h5>
            <h5>1 {to} = {(1/(converted/amount)).toFixed(3)} {from}</h5> 
    </div>
    }



export default Result



