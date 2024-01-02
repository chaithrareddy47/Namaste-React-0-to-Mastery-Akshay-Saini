import React from 'react';
import  ReactDOM  from 'react-dom/client';


const App = () =>{
  return(
    <div>
      <Welcome />
      <JSXDemo/>
      <ListDemo/>
      <PageComponenet/>
      <ListDemos/>
    </div>
  )
}
/*
Exercise 1: Create a Basic Component
Create a functional component named Welcome that returns a <h1> element with the text "Welcome to React":
*/
const Welcome = () =>{
  return(
    <div>
      <h1>Welcome to React</h1>
    </div>
  )
}

/*
  Exercise 2: Use JSX Elements
  Create a component JSXDemo that renders a <div> containing an <h2> element with the text "Hello, JSX!" and a <p> element with a short description:

*/
const JSXDemo = () =>{
  return (
		<div>
			<h2>Hello, JSX</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
				temporibus.
			</p>
		</div>
	);
}

/*
  Exercise 3: Create a List Component
  Build a component named ListDemo that displays an unordered list (<ul>) with three list items (<li>) containing different fruits:
*/

const ListDemo = () =>{
  return(
    <div>
      <ul>
        <li>Orange</li>
        <li>Mango</li>
        <li>Banana</li>
      </ul>
    </div>
  )
}
/*
Exercise 4: Compose Components
Create a Page component that combines the previously created Welcome, JSXDemo, and ListDemo components:
*/

const PageComponenet = () =>{
  return(
    <div>
      <Welcome />
      <ListDemo/>
      <JSXDemo/>
    </div>
  )
}

/*
Exercise 5: Use Fragments
Modify the ListDemo component to use a fragment to wrap the list items:
*/

const ListDemos = () => {
	return (
		<>
			<ul>
				<li>Orange</li>
				<li>Mango</li>
				<li>Banana</li>
			</ul>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)