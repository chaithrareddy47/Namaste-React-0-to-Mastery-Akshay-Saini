# React js 0 to Hero by Akshay saini

## DAY - 01/Chapter - 01 Inception

## PART - 01
### Creating  hello world using pure html
      <div id="root">
        <h1>Hello World</h1>
      </div>

### Creating hello world using pure javascript
    - I have created App.js file where i all write my javascript code

    -  <script src="App.js"></script>
    linked the js file through script tag

    // created h1 element
    const heading = document.createElement('h1');
    // added content into the h1 tag
    heading.innerHTML = 'Helllo world from javascript!';

    // selecting the root id from the html element
    const root = document.getElementById('root')
    // addeing the heading as a child element inside the root div which is parent
    root.appendChild(heading)  

     Functions like getElementById, innerHTML, document, and createElement are part of the Document Object Model (DOM) API, which is provided by the browser's JavaScript engine.

    - When a browser loads an HTML document, it creates a representation of that document called the DOM. This DOM can be manipulated using JavaScript, and the browser provides a set of built-in objects, methods, and properties (like those you mentioned) to interact with and modify this DOM structure.

## PART - 02
### Creating hello world using pure React
     <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    - once we added therse 2 links and check react in console an object will be display that means react and added sucessfully in our document

  ##### Pure React-js code  
    const heading1 = React.createElement('h2', {}, 'Hello World from React-js!');

    const root = ReactDOM.createRoot(document.getElementById('root')) 
    root.render(heading1)

  ###### Neating of Elements
    const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
      'div',
      { id: 'child' },
      [
        React.createElement('h1', {}, 'I am h1 tag'),
        React.createElement('h2', {}, 'I am h2 tag'),
      ],
      [
        React.createElement('h1', {}, 'I am h1 tag'),
        React.createElement('h2', {}, 'I am h2 tag'),
      ],
    ),
  );

    

