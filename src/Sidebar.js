import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user=useSelector(selectUser);
    const recentItem=(topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
            
        </div>
    )
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://wallpaper.dog/large/10861094.jpg" alt="" />
            <Avatar className="sidebar_avatar"> {user.email[0]}</Avatar>
            <h2>{user.displName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2354</p>

            </div>
            <div className="sidebar_stat">
            <p>Views on posts</p>
                <p className="sidebar_statNumber">3209</p>
                
            </div>

        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("Programming")}
            {recentItem("Engineering")}
            {recentItem("Gaming")}
            {recentItem("Writing")}
        </div>
    </div>
  )
}

export default Sidebar