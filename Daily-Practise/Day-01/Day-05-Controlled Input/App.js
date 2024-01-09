import React from "react"
import ReactDOM from "react-dom/client"
import { useState } from "react"

const App = ()=>{
  return(
    <div>
      <ControlledInput/>
    </div>
  )
}

const ControlledInput =()=>{
  const [inputChange, setInputChange] = useState('');

   const squareNumber = isNaN(inputChange) ? '' : Math.pow(inputChange, 2)
   
  const handleInputChange =(e)=>{
    setInputChange(e.target.value)
  }
  return (
		<div>
			<input
				type='number'
				placeholder='Enter Number'
				value={inputChange}
				onChange={handleInputChange}
			/>
      {
        squareNumber !== ' ' && <h3>Square number of {inputChange} is {squareNumber}</h3>
      }

			
		</div>
	);
}


const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)