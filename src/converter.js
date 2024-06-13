import "../src/App.css"
import React, { useState } from "react"
import { useEffect } from "react";


const Converter = (props) =>{ 
  const {handleAmount,handleFrom,handleTo,from,to} = props;
  const [curList,setCurList] = useState([])
  const [fullCurList,setFullCurList] = useState([])
  useEffect(()=>{
    const host = 'api.frankfurter.app'
    fetch(`https://${host}/currencies`)
    .then(resp => resp.json())
    .then(data => {
      setFullCurList(data)
      setCurList(Object.keys(data))
    })
    },[])
  
  return <div className="converter">
    <div className="amount">
      <h4>Amount</h4>
        <input type = "text" onSubmit={(e) => {e.preventDefault()}} onChange={handleAmount}/>
    </div>
    <div className="from">
        <h4>From</h4>
      <select value = {from} onSubmit={(e) => {e.preventDefault()}} onChange={handleFrom}>
        {curList.map((cur)=>{
          return <>
            <option value = {cur}>{cur} - {fullCurList[cur]} </option>
          </>
        })}
      </select>
    </div>
    <div className="swap">
        <button>↔️</button>
    </div>
    <div className="to">
      <h4>To</h4>
        <select value= {to}  onChange={handleTo} onSubmit={(e) => {e.preventDefault()}}>
          {curList.map((cur)=>{
            return <>
              <option value = {cur}>{cur} - {fullCurList[cur]} </option>
            </>
          })}
        </select>
    </div>
</div>
}


export default Converter;