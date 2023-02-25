import { Avatar } from '@mui/material';
import React from 'react'
import './HeaderOptions.css'

function HeaderOptions({avatar,Icon,title}) {
  return (
    <div className='headerOptions'>
        {Icon && <Icon className="headerOptions_icon"/> }
        
        {avatar && <Avatar src={avatar}/>}
        <h3 className="headerOptions_title">{title}</h3>
        
    </div>
  );
}

export default HeaderOptions