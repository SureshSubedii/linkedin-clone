import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CachedIcon from '@mui/icons-material/Cached';
import SendIcon from '@mui/icons-material/Send';

function Post({name,description,message,photoUrl}) {
  return <div className="post">
    <div className="post_header">
        <Avatar src='https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg'/>
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
  
}

export default Post