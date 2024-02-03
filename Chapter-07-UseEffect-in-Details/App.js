import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

const Counter = (props)=>{

  // const [value, setValue] = useState('initial');
  useEffect(()=>{
 
    console.log('componenet had rendered');
  },[props.message])
  return(
    <div>
      {}
    </div>
  )
}

const Example = ()=>{
  const [data,setData]=useState(null)
  
  useEffect(()=>{
    fetch('/random-url')
    .then((res) => res.json)
    .then((data) => setData(data))
  },[])
  return(
    <div>
      {
        data && data.message
      }
    </div>
  )
}
const App = ()=>{
  return(
    <div>
      <Counter/><Example/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)