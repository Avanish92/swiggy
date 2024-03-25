import './App.css';
import React, { Component, lazy,Suspense } from "react"
import Header from './components/Header'
import Body  from './components/Body'
import Contact from './components/Contact'
import About from './components/About';
import Error from './components/Error';
import RestaurentMenu from './components/RestaurentMenu'
import {Provider} from "react-redux"
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  createBrowserRouter
} from "react-router-dom";
import appStore from './utils/appStore';
import Cart from './components/Cart';
const Grocery = lazy(()=>import('./components/Grocery'))
class App extends Component{
  render(){
  return (
   <div className='app'>
    <Provider store={appStore}>
    <BrowserRouter>
    <Header />
       <Routes>
            <Route 
            path="/" 
            element={<Body/>} />,
            <Route 
            path="/contact" 
            element={<Contact/>} />
            <Route 
            path="/about" 
            element={<About/>} />
            <Route 
            path="/*" 
            element={<Error/>} />
            <Route 
            path="/cart" 
            element={<Cart/>} />
             <Route 
            path="/restaurents/:resId" 
            element={<RestaurentMenu/>} />
             <Route 
            path="/grocery" 
            element={<Suspense><Grocery/></Suspense>} />
          </Routes>
    </BrowserRouter>
    </Provider>
   

   </div>   
  );
  }
}


//  const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<AppLayout/>);
export default App;
