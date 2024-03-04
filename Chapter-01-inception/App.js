// Creating hello world from pure javascript

const heading = document.createElement('h2')
heading.textContent = "Hello world from pure JAVASCRIPT"

const id = document.getElementById('id')
id.appendChild(heading)

// Now creating hellomworld from pure javasvcript
// try to understand these 3 apis
// createelememt, createRoot, render, react and react dom

const content = React.createElement('h2', {id:'heading'}, 'Hello world from React')

console.log(content);


// Creating nested structure

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(content)