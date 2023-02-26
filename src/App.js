import Feed from './Feed';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import React from 'react'
import Login from './Login';



function App() {
const user=useSelector(selectUser)

 
  return (
    
   <div className="app">
     <Header/>
     {!user?(<Login/>):
   (<div className="app_body">
      <Sidebar />
      <Feed />
     </div>
    )}
    </div>
  );
}

export default App;
