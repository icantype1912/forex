import React from "react";
import "../src/App.css";
import { useEffect, useState} from "react";
import Converter from "./converter";
import Result from "./result";
import Submit from "./submit";
import { debounce } from "lodash";

const App = () => {
  const [err,setErr] = useState(false)
  const [valueErr,setValueErr] = useState(true)
  const [APIDone, setAPIDone] = useState(true);
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [converted, setConverted] = useState(0);
  const [amount, setAmount] = useState(1);
  const[currency,setCurrency] = useState({from:"USD",to:"INR"})


  const debouncedSetAmount = 
    debounce((value) => {
      setAmount(value);
    }, 50)

  useEffect(() => {
    if (start) {
      setErr(false)
      if (currency.to === currency.from) {
        setErr(true)
        setValueErr(false)
        return;
      }
      if (amount <= 0 || isNaN(amount)) {
        setAmount("")
        setErr(true)
        setValueErr(true)
        return;
      }
      setAPIDone(false)
      setLoading(true);
      const host = "api.frankfurter.app";
      fetch(
        `https://${host}/latest?amount=${amount}&from=${currency.from}&to=${currency.to}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setConverted(data.rates[currency.to]);
          setLoading(false);
          setStart(true);
          setAPIDone(true);
        });
    }
  }, [currency.from, start, currency.to, amount]);

  const Click = () => {
    if (currency.to === currency.from) {
      alert("Can't convert to same currency!");
      return;
    }
    if (amount <= 0 || isNaN(amount)) {
      alert("Has to be a valid number greater than 0");
      return;
    }
    setStart(true);
  };

  const swap = () => {
    setCurrency((prevState)=>{return {to:prevState.from,from:prevState.to}})
  };

  const handleAmount = (e) => {
    if (isNaN(e.target.value)) {
      debouncedSetAmount("");
      return;
    } 
    debouncedSetAmount(e.target.value);
  };

  const handleFrom = (e) => {
    
    setCurrency((prevState)=>{return {to:prevState.to,from:e.target.value}})
  };

  const handleTo = (e) => {

    setCurrency((prevState)=>{return {to:e.target.value,from:prevState.from}})
  };

  return (
    <div className="main-parent">
      <h2 className="header">Crimson Currency Converter</h2>
      <div className="table">
        <Converter 
          handleAmount={handleAmount}
          handleFrom={handleFrom}
          handleTo={handleTo}
          from={currency.from}
          to={currency.to}
          swap={swap}
          amount={amount}
        />
        {APIDone? <>
          {start?<div>
          {!err?<Result
            converted={converted}
            amount={amount}
            from={currency.from}
            to={currency.to}
          />:<div className="result">{valueErr?
              <h4>Enter a Valid Value</h4>:<h4>Can't convert a currency to itself</h4>}
            </div>}</div>:<span className="start"></span>} </>
         : (<div className="result">
            <span className="bigLoader"></span>
          </div>
        )}
        <Submit loading={loading} Click={Click} />
      </div>
    </div>
  );
};

export default App;
