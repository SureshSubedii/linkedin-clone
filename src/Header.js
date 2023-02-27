import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOptions from './HeaderOptions';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logOut } from './features/counter/userSlice';
import { auth } from './firebase';


function Header() {
  const dispatch=useDispatch();
  const loggedOutOfApp=()=>{
    dispatch(logOut());
    auth.signOut();

  }
  return (
    <>
    <div className='header'>
      
        <div className="header_left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
            alt="" />
            <div className="header_search">
                <SearchIcon/>
                <input placeholder="Search" type="text" />
            </div>
            
        </div>
        <div className="header_right">
        <HeaderOptions Icon={HomeIcon}  title="Home"/>
        <HeaderOptions  Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOptions  Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOptions  Icon={ChatIcon} title="Messagings"/>
        <HeaderOptions  Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOptions avatar={true} onClick={loggedOutOfApp}  title="Me"/>
        </div>
     
        
    </div>
    </>
  )
}

export default Header