import "../src/App.css"
import React from "react"
import { useEffect } from "react";


const Converter = (props) =>{ 
  const {handleAmount} = props;
  const curList = ["USD","EUR","GBP"]
  useEffect(()=>{
    const host = 'api.frankfurter.app'
    fetch(`https://${host}/currencies`)
    })
  
  return <div className="converter">
    <div className="amount">
      <h4>Amount</h4>
        <input type = "text" onSubmit={(e) => {e.preventDefault()}} onChange={handleAmount}/>
    </div>
    <div className="from">
        <h4>From</h4>
      <select onSubmit={(e) => {e.preventDefault()}}>
        {curList.map((cur)=>{
          return <>
            <option value = {cur}>{cur}</option>
          </>
        })}
      </select>
    </div>
    <div className="swap">
        <button>↔️</button>
    </div>
    <div className="to">
      <h4>To</h4>
        <select onSubmit={(e) => {e.preventDefault()}}>
          {curList.map((cur)=>{
            return <>
              <option value = {cur}>{cur}</option>
            </>
          })}
        </select>
    </div>
</div>
}


export default Converter;