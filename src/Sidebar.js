import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
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
            <Avatar className="sidebar_avatar"/>
            <h2>Suresh Subedi</h2>
            <h4> Sureshsubedi485@gmail.com</h4>
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