import React from "react";
import "../src/App.css";
import { useEffect,useState } from "react";
import Converter from "./converter";
import Result from "./result";
import Submit from "./submit";


const App = ()=>{

  //states
  const [APIDone,setAPIDone] = useState(false)
  const [start,setStart]  = useState(false);
  const [amount,setAmount] = useState(1);
  const [finalAmount,setFinalAmount] = useState(0)
  const [finalFinalAmount,setFinalFinalAmount] = useState(0)
  const [from,setFrom] = useState("USD");
  const [finalFrom,setFinalFrom] = useState("USD")
  const [finalFinalFrom,setFinalFinalFrom]  = useState("USD")
  const [to,setTo] = useState("INR");
  const [finalTo,setFinalTo] = useState("INR");
  const [finalFinalTo,setFinalFinalTo]  = useState("USD")
  const [converted,setConverted] = useState(0);
  const [loading,setLoading] = useState(false);


  useEffect(()=>{
    if (start)
      {
        if(to===from)
          {
            alert("Can't convert to same currency!");
            return
          }
          if((amount <= 0) || isNaN(amount))
          {
              return
          }
        setLoading(true)
        const host = 'api.frankfurter.app'
        fetch(`https://${host}/latest?amount=${finalAmount}&from=${from}&to=${to}`)
        .then(resp => resp.json())
        .then((data)=>{
          setFinalFinalAmount(finalAmount)
          setConverted(data.rates[to])
          setLoading(false)
          setFinalFinalFrom(finalFrom)
          setFinalFinalTo(finalTo)
          setStart(true);
          setFinalAmount(amount);
          setFinalTo(to);
          setFinalFrom(from);
          setAPIDone(true);
        })
      }
    },[finalAmount,finalFrom,finalTo,from,start,to,amount])
    
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
    if(isNaN(e.target.value) && e.target.value !== "")
      {
        setAmount("")
        return
      }
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
      <Converter handleAmount = {handleAmount} handleFrom = {handleFrom} handleTo = {handleTo} from = {from} to = {to} swap = {swap} amount = {amount}/>
      {APIDone?<Result converted = {converted} amount = {finalFinalAmount} from = {finalFinalFrom} to = {finalFinalTo}/>:<></>} 
      <Submit loading = {loading} Click = {Click}/>
    </div>
  </div>
}




  export default App;