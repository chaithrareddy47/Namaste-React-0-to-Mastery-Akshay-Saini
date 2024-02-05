import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom"; // routing configuration


import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";


//app.js root level compoennet  for the entire app, renders all other components
// we are implementng when we do /about it shold go to abous us page 

const App = ()=>{
  return(
    <div>
     <Header/>
     {/* if  path is / - then have body
         if path is /about - then header and about should be there
         if path is contact then hedaer and and contect should be shown
     
      */}
      
     <Outlet />
     <Footer />
    </div>
  )
}





// createBrowserRouter - configuration - configuration means what will happen in sepecific route

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		// this are children routes
		children: [
      {
        path:'/',
        element:<Body/>
      },
			{
				path: '/about', //if my path is /about
				element: <AboutUs />, //then load about compoennet
			},
			{
				path: '/contact', //if my path is /about
				element: <Contact />, //then load about compoennet
			},
			{
				path: '/contact', //if my path is /about
				element: <Blog />, //then load about compoennet
			},
			{
				path:'/restaurants/:resId',
				element:<RestroMenu/>
			}
		],
		errorElement: <Error />, // this is one way create out own error compoennet and loding them on router
	},

	// {
	// 	path: '/about', //if my path is /about
	// 	element: <AboutUs />, //then load about compoennet
	// },
	// {
	// 	path: '/contact', //if my path is /about
	// 	element: <Contact />, //then load about compoennet
	// },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)