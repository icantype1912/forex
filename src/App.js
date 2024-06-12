import React from "react";
import "../src/App.css";




const App = ()=>{
  return<div className="main-parent">
    <h2 className="header">Crimson Currency Converter</h2>
    <div className="table">
      <div className="converter">
        <div className="amount">
          <h4>Amount</h4>
          <input type = "text"/>
        </div>
        <div className="from">
          <h4>From</h4>
          <select>
            <option value = {from.short}>{from.long}</option>
          </select>
        </div>
        <div className="swap">
          <button>↔️</button>
        </div>
        <div className="to">
          <h4>To</h4>
          <select>
            <option value = {to.short}>{to.long}</option>
          </select>
        </div>
      </div>
      <div className="result">
        <p>{amount} {from.long} = </p>
        <h1>{converted} {to.long}</h1>
        <h5>1 {from.short} = {converted/amount} {to.short}</h5>
        <h5>1 {to.short} = {converted/amount} {from.short}</h5> 
      </div>
      <div className="submit">
        <button>Check</button>
      </div>
    </div>
  </div>
}

export default App;

const amount = 10
const from = {short:"GBP",long:"British Pounds"}
const to = {short:"EUR",long:"Euros"}
const converted = 20