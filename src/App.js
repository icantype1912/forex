import React from "react";
import "../src/App.css";
import { useEffect,useState } from "react";




const App = ()=>{

  //states
  const [start,setStart]  = useState(false);
  const [toggle,setToggle] = useState(0);
  const [amount,setAmount] = useState(null);
  const [converted,setConverted] = useState(null);


  useEffect(()=>{
    if (start)
      {
        const host = 'api.frankfurter.app'
        fetch(`https://${host}/latest?amount=${amount}&from=GBP&to=EUR`)
        .then(resp => resp.json())
        .then((data)=>{setConverted(data.rates.EUR)})
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
      <div className="converter">
        <div className="amount">
          <h4>Amount</h4>
          <input type = "text" onSubmit={(e) => {e.preventDefault()}} onChange={handleAmount}/>
        </div>
        <div className="from">
          <h4>From</h4>
          <select onSubmit={(e) => {e.preventDefault()}}>
            <option value = {from.short}>{from.long}</option>
          </select>
        </div>
        <div className="swap">
          <button>↔️</button>
        </div>
        <div className="to">
          <h4>To</h4>
          <select onSubmit={(e) => {e.preventDefault()}}>
            <option value = {to.short}>{to.long}</option>
          </select>
        </div>
      </div>
      {start?<div className="result">
        <p>{amount} {from.long} = </p>
        <h1>{converted} {to.long}</h1>
        <h5>1 {from.short} = {converted/amount} {to.short}</h5>
        <h5>1 {to.short} = {converted/amount} {from.short}</h5> 
      </div>:<></>} 
      <div className="submit">
        <button onClick={Click}>Check</button>
      </div>
    </div>
  </div>
}



const from = {short:"GBP",long:"British Pounds"}
const to = {short:"EUR",long:"Euros"}

  export default App;