import { useState } from "react"


function Bmic(){
    const [height,setHeight]=useState("");
    const [weight,setWeight]=useState("");
    const [bmi,setBmi]=useState(null);
    const [result,setResult]=useState("");
    const [errorMessage,setErrorMessage]=useState("");
    
    function handleCalculate(){
      const validateHeight = /^\d+$/.test(height);
      const validateWeight = /^\d+$/.test(weight);
      if(validateHeight && validateWeight){
          const heightinmeters= height/ 100;
          const bmi = weight / (heightinmeters * heightinmeters);
          setBmi(bmi.toFixed(2));
          if(bmi <18.5){
            setResult("Underweight");
          }
          else if(bmi >=18.5 && bmi <25){
            setResult("Normal");
          }
          else if(bmi >=25 && bmi <30){
            setResult("Overweight");
          }
          else{
            setResult("Obese");
          }
          setErrorMessage("");
      }
      else{
        setBmi(null);
        setResult("");
        setErrorMessage("Please enter valid height and weight");
      }
    }

    function handleClear(){
      setBmi(null);
      setResult("");
      setHeight("");
      setWeight("");
    }
    return(
      <div className="bg-violet-600 w-[100vw] h-[100vh] p-10">
        <div className="bg-white w-[65%] h-[88vh] overflow-auto rounded-lg shadow-md mx-auto">
          <div className="flex">
            <div className="w-[46%] h-[88vh] flex items-center">
              <img src="/bmi1.jpg" alt="bmi" className="w-fit h-[60vh]"/>
            </div>
            <div className="w-[50%] mt-20 flex flex-col">
                <h2 className="text-bold text-gray-800 text-pretty text-3xl pt-8 flex justify-center">BMI Calculator</h2>
                {errorMessage && 
                  <p className="font-semibold text-red-600 text-base mt-6 m-3">{errorMessage}</p>
                }
                
                <div className="mt-8 flex flex-col m-3">
                  <span className="text-base font-medium text-gray-800 text-pretty">Enter your height (cm):</span>
                  <input type="text" className="w-[100%] mx-auto h-[40px] outline-none border 
                  border-gray-800 rounded-lg mt-5 pl-5 text-gray-700 font-medium" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                </div>
                <div className="mt-8 flex flex-col m-3">
                  <span className="text-base font-medium text-gray-800 text-pretty">Enter your weight (kg):</span>
                  <input type="text" className="w-[100%] mx-auto h-[40px] outline-none border 
                  border-gray-800 rounded-lg mt-5 pl-5 text-gray-700 font-medium" value={weight}onChange={(e)=>setWeight(e.target.value)}/>
                </div>
                <div className="mt-8 m-3 flex justify-start">
                  <button className="w-[30%] h-[40px] rounded-md shadow-md bg-purple-400 
                  hover:bg-violet-700 text-white text-xl" onClick={handleCalculate}>Calculate</button>
                  
                  <button className="w-[30%] h-[40px] rounded-md shadow-md bg-red-500 hover:bg-red-700 
                  ml-6 text-white text-xl " onClick={handleClear}>Clear</button>
                </div>
                {bmi !== null && (
                    <div className="mt-8 flex flex-col m-3 border border-blue-500 h-[15%] p-5 rounded-md ">
                    <span className="text-base font-medium text-blue-600 text-pretty">Your BMI value is: {bmi}</span>
                    <span className="text-base font-medium text-gray-600 text-pretty">status: {result}</span>
                  </div>
                )}
                  
            </div>
          </div>
        </div>
      </div>
    )
}

export const BmiCalculator = () => {
  return (
    <Bmic/>
  )
}
