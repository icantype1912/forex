import React from "react";
import "../src/App.css";
import { useEffect,useState } from "react";
import Converter from "./converter";
import Result from "./result";


const App = ()=>{

  //states
  const [start,setStart]  = useState(false);
  const [toggle,setToggle] = useState(0);
  const [amount,setAmount] = useState(null);
  const [converted,setConverted] = useState(null);
  const [from,setFrom] = useState("GBP");
  const [to,setTo] = useState("EUR");


  useEffect(()=>{
    if (start)
      {
        const host = 'api.frankfurter.app'
        fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
        .then(resp => resp.json())
        .then((data)=>{setConverted(data.rates[to])})
      }
    },[toggle])
    
  const Click = ()=>
  {
    setStart(true);
    setToggle((prev) => prev+1)
  }

  const handleAmount = (e)=> {
    setAmount(e.target.value);
  }


  
  return<div className="main-parent">
    <h2 className="header">Crimson Currency Converter</h2>
    <div className="table">
      <Converter handleAmount = {handleAmount}/>
      {start?<Result converted = {converted} amount = {amount} from = {from} to = {to}/>:<></>} 
      <div className="submit">
        <button onClick={Click}>Check</button>
      </div>
    </div>
  </div>
}




  export default App;