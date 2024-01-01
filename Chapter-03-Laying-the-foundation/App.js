import ReactDom from 'react-dom'

const year = 2000;

const Header = () =>{
  return(
    <div className='header'>
      This is header
    </div>
    )
}

const Footer = () =>{
  return(
    <div className='footer'>
      Footer
    </div>
  )
}

const Navigation = () =>{
  return(
    <div className='nav-bar'>
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div>
  )
}

const Button = () =>{
  return(
    <div className='btn'>
      <button>Click Me</button>
    </div>
  )
}
const App = () =>{
  return(
    <div>
      <Header/>
      <Footer/>
      <Navigation/>
      <Button/>

    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>)


