import Feed from './Feed';
// import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'


function App() {
//  const [state, setstate] = useState({mobileView:false})
//  const {mobileView}=state;
//  useEffect(() => {
//    const responsiveness=()=>{
//     return window.innerWidth<900?
//     setstate((prevState))
//    }
 
//    return () => {
//      second
//    }
//  }, [third])
 
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <div className="app">
     <Header/>
     <div className="app_body">
      <Sidebar />
      <Feed />
     </div>
    </div>
    </>
  );
}

export default App;
