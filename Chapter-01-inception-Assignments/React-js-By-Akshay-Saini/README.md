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



# Assignment -01 - Inception

## 01 What is Emmet?
  Emmet is a powerful abbreviation engine that helps developers write HTML and CSS code more quickly and efficiently. It provides shortcuts, abbreviations, and snippets to generate HTML and CSS markup.

  html:5 or shift + ! -> creates the basic HTML5 structure.
  div > ul > li*3 -> <div> containing a <ul> with three <li> elements inside.

## 02 Difference between library and frame work?
   Library
    Libraries are pre-written collections of code that provide specific functionalities, tools, or utilities that developers can import and use within their projects.

    Example:
      // Importing a library (e.g., lodash)
      import _ from 'lodash';

      // Using a function from the lodash library
      const result = _.isEqual(obj1, obj2); // Using the isEqual function from lodash

   Framework
    Frameworks come with predefined structures, patterns, and guidelines that developers are expected to follow when building applications using that framework.
    

## 03 What is CDN? Why do we use Them
   - CDNs (Content Delivery Networks) store and deliver content to users. 
   - CDNs are commonly associated with storing files like images, videos, stylesheets, and scripts

   In case of react
   - CDN stores and delivers the JavaScript files required to use React in your web application.
   - CDN Storage: The CDN stores JavaScript files containing the code for React and its associated libraries, like React DOM.
   - Delivery: When you include React using a CDN link in your HTML file (<script> tag with a CDN URL), the browser fetches these JavaScript files from the CDN and executes them.
    
## 04 Why react is know as REact
   "React" actually originates from its core concept of reacting to changes in data or state and efficiently updating the user interface. 

   -   Reacting to Changes: When something in your web app changes, like a piece of data or user interaction, React quickly notices and updates only the parts of the webpage that need to change.

   - So, "React" is named after its ability to react quickly and efficiently to changes in your app, updating the user interface dynamically without wasting time or resources by redoing everything from scratch. 

## 05 Why do we use Cross-Origin in script tag
   When you fetch resources (like scripts) from a CDN that are hosted on a different domain (cross-origin), using the crossorigin attribute helps in addressing security concerns, particularly related to Cross-Origin Resource Sharing (CORS).
    
   - When you fetch resources (like scripts) from a CDN that are hosted on a different domain (cross-origin), using the crossorigin attribute helps in addressing security concerns, particularly related to Cross-Origin Resource Sharing (CORS).  

## 06 What is the difference between React and ReactDom?
   React:
    Imagine React as the engine or the brain of the operation. It's the core library that helps you build user interfaces by creating and managing components, handling state and props, and defining how your UI should look and behave.

   import React from 'react';

    function MyComponent() {
      return <h1>Hello, I'm a React component!</h1>;
    }

    React DOM: 
      Now, think of React DOM as the bridge between React and the actual web page (the Document Object Model or DOM). It's like the messenger that takes what React created and puts it into the browser so you can see it on the screen.

      import React from 'react';
      import ReactDOM from 'react-dom';

      function MyComponent() {
        return <h1>Hello, I'm a React component!</h1>;
      }

      ReactDOM.render(
        <MyComponent />,
        document.getElementById('root')
      );

## 07 What is difference between react.development.js and production,js
    Development Version of React:
      For Building & Debugging
      Helpful Warnings & Tools
      Focused on Debugging
  


    

