import Feed from './Feed';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import { useSelector,useDispatch } from 'react-redux';
import { logOut, selectUser,logIn } from './features/counter/userSlice';
import React,{useEffect} from 'react'
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';



function App() {
const user=useSelector(selectUser);
const dispatch=useDispatch();

useEffect(() => {
  document.body.style.backgroundColor='#f3f2ef'
 auth.onAuthStateChanged(userAuth=>{
  if(userAuth){
    //Logged in
    dispatch(logIn ({
      email:userAuth.email,
      uid:userAuth.uid,
      displName:userAuth.displayName,
      photoUrl:userAuth.photoURL
      

  }))
  }
  else{
    dispatch(logOut())
    //User is logged out
  }
 })
}, [])

 
  return (
    
   <div className="app">
     <Header/>
     {!user?(<Login/>):
   (<div className="app_body">
      <Sidebar />
      <Feed />
      <Widgets/>
     </div>
    )}
    </div>
  );
}

export default App;
