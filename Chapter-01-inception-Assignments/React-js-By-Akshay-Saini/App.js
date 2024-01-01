// created h1 element
const heading = document.createElement('h1');
// added content into the h1 tag
heading.innerHTML = 'Helllo world from javascript!';

// selecting the root id from the html element
const root1 = document.getElementById('root1');
// addeing the heading as a child element inside the root div which is parent
root1.appendChild(heading);

const heading1 = React.createElement('h2', {}, 'Hello World from React-js!');

// Nested elements
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
