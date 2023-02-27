import { Avatar } from '@mui/material'
import React,{forwardRef}from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CachedIcon from '@mui/icons-material/Cached';
import SendIcon from '@mui/icons-material/Send';

const Post=forwardRef(({name,description,message,photoUrl},ref)=> {
  return <div ref={ref} className="post">
    <div className="post_header">
        <Avatar src={photoUrl}>  {name[0]}</Avatar>
        <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </div>
    <div className="post_body">
        <p>{message}</p>
    </div>
    <div className="post_buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like"/>
        <InputOptions Icon={InsertCommentIcon} title="Comment"/>
        <InputOptions Icon={CachedIcon} title="Repost"/>
        <InputOptions Icon={SendIcon} title="Share"/>


    </div>
  </div>
  
})

export default Post