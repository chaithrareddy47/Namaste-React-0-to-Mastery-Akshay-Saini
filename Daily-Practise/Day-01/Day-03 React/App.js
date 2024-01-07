import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';


const Counter = () =>{
	const [count, setCount] = useState(0);
	return(
		<div>
       <h3>Count Number is {count}</h3>
			 <button onClick={() =>(setCount(count + 1))}>Counter Button</button>
		</div>
	)
}
const List = [
	
	'Apple', 'orange', 'banana'
]

const App = () =>{
	return(
		<div>
			<h1>Hello React</h1>
			<p>Welcome to the world of react</p>
			<UpdateApp/>
			<ListItems />
		</div>
	)
}
const ListItems = ()=>{
	return(
		<ul>
			{
				List.map((item) =>(
					<li>{item}</li>
				))
			}
		</ul>
	)
}
const UpdateApp = () =>{
	return(
		<section>
			<h1>Hello React</h1>
			<p>Welcome to the world of react</p>
		</section>
	)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)