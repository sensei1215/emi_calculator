
import './App.css';
import { useState } from 'react';

function App() {

  const [principal, setPrincipal] = useState();
  const [months, setMonths] = useState();
  const [rate, setRate] = useState();
  const [emi, setEmi] = useState();
  const [interest, setInterest] = useState();
  const [total, setTotal] = useState();
  const [buttonText, setButtonText] = useState("Calculate");

  

  const calculate = (e) => {
    if(buttonText==="Calculate"){
      const emi = principal*rate*Math.pow(1+rate,months)/(Math.pow(1+rate,months)-1);
      setEmi(emi);
      setInterest((emi*months).toFixed(2));
      setTotal(interest+principal);
      setButtonText("Reset");
    }
    else{
      setEmi("");
      setInterest("");
      setTotal("");
      setButtonText("Calculate");
    }
    e.preventDefault();
  };

  return (
      <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "40vh",
      }}>
          
        <h3 style ={{ fontSize:"30px", color:"#293A64", display:"inline"}}>Loan EMI Calculator</h3>
        <br/><br/>
          <form onSubmit={calculate}>
          <label for="amount">Loan Amount</label>
          <input
          type="number"
          name="amount"
          value={principal}
          onChange={e => setPrincipal(parseFloat(e.target.value))}
          /><br></br>
          <label for="tenure">Loan Tenure</label>
          <input
          type="number"
          name="tenure"
          value={months}
          onChange={e => {setMonths(parseFloat(e.target.value))}}
          /><br></br>
          <label for="rate">Interest rate</label>
          <input
          type="number"
          name="rate"
          value={rate}
          onChange={e => setRate(parseFloat(e.target.value))}
          /><br/><br/>
          <button type="submit" style={{backgroundColor:"#293A64", color:"#FFFFFF", borderRadius:"7px"}}>{buttonText}</button>
          </form>
          <br/>
          <div style={{display: "flex"}}>
            <div style={{backgroundColor:"#FFE8A7", padding:"20px", borderRadius:"7px", flex:"1"}}>
            <h4>Loan EMI:</h4><br/>
            <h4>{emi}</h4>
            </div>
            <div style={{backgroundColor:"#E3FFFD", padding:"20px", borderRadius:"7px", flex:"1"}}>
            <h4>Total Interest payable:</h4><br/>
            <h4>{interest}</h4>
            </div>
          </div>
          <div style={{backgroundColor:"#DFE7FF", padding:"20px", borderRadius:"7px"}}>
          <h4>Total Payment:</h4><br/>
          <h4>{total}</h4>
          </div>
      </div>
  );
}


export default App;
