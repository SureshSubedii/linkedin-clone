import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import './HeaderOptions.css'

function HeaderOptions({avatar,Icon,title,onClick}) {
  const user=useSelector(selectUser);
  return (
    <div  onClick={onClick} className='headerOptions'>
        {Icon && <Icon className="headerOptions_icon"/> }
        
        {avatar && <Avatar src={user?.photoUrl}> {user?.email[0]}</Avatar>} 
        <h3 className="headerOptions_title">{title}</h3>
        
    </div>
  );
}

export default HeaderOptions