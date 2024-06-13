import React from "react";
import "../src/App.css";
import { useEffect,useState } from "react";
import Converter from "./converter";
import Result from "./result";
import Submit from "./submit";


const App = ()=>{

  //states
  const [start,setStart]  = useState(false);
  const [toggle,setToggle] = useState(0);
  const [amount,setAmount] = useState(0);
  const [finalAmount,setFinalAmount] = useState(0)
  const [from,setFrom] = useState("USD");
  const [finalFrom,setFinalFrom] = useState("USD")
  const [to,setTo] = useState("INR");
  const [finalTo,setFinalTo] = useState("INR");
  const [converted,setConverted] = useState(null);


  useEffect(()=>{
    if (start)
      {
        const host = 'api.frankfurter.app'
        fetch(`https://${host}/latest?amount=${finalAmount}&from=${from}&to=${to}`)
        .then(resp => resp.json())
        .then((data)=>{setConverted(data.rates[to])})
      }
    },[toggle])
    
  const Click = ()=>
  {
    if(to===from)
      {
        alert("Can't convert to same currency!");
        return
      }
      if((amount <= 0) || isNaN(amount))
      {
          alert("Has to be a valid number greater than 0")
          return
      }
    setStart(true);
    setToggle((prev) => prev+1)
    setFinalAmount(amount);
    setFinalTo(to);
    setFinalFrom(from);
    
  }

  const swap = ()=>
    {
      let temp = from;
      setFrom(to);
      setTo(temp);
    }

  const handleAmount = (e)=> {
    setAmount(e.target.value);
  }

  const handleFrom = (e) => {
    setFrom(e.target.value);
  }

  const handleTo = (e) =>{
    setTo(e.target.value);
  }


  
  return<div className="main-parent">
    <h2 className="header">Crimson Currency Converter</h2>
    <div className="table">
      <Converter handleAmount = {handleAmount} handleFrom = {handleFrom} handleTo = {handleTo} from = {from} to = {to} swap = {swap}/>
      {start?<Result converted = {converted} amount = {finalAmount} from = {finalFrom} to = {finalTo}/>:<></>} 
      <Submit Click = {Click}/>
    </div>
  </div>
}




  export default App;