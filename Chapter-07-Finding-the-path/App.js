import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";


const Example = ()=>{
  console.log('header render');
  const [count, setCount ] = useState(0)
  const [toggle, setToggle ] = useState('Login')
  useEffect(()=>{
    console.log('componenet rendered');
  },[count] )

function handleToggle(){
 return setToggle(toggle === 'Login' ? 'Logout' : 'Login');
}
  return (
    <>
    <button onClick={()=>{
      setCount((c) => c+1)
    }}>+</button>
    <p>{count}</p>

    <button onClick={handleToggle}>{toggle}</button>
    </>
  )
}

const App = ()=>{
  return(
    <div>
      <Example/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)