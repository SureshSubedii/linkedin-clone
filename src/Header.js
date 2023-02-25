import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOptions from './HeaderOptions';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// var About = require('./HeaderOptions').default


function Header() {
  return (
    <div className='header'><h1>
        
        </h1>
        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
            alt="" />
            <div className="header_search">
                <SearchIcon/>
                <input type="text" />
            </div>
            
        </div>
        <div className="header_right">
        <HeaderOptions Icon={HomeIcon}  title="Home"/>
        <HeaderOptions  Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOptions  Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOptions  Icon={ChatIcon} title="Messagings"/>
        <HeaderOptions  Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOptions avatar="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg" title="Me"/>
        </div>
     
        
    </div>
  )
}

export default Header