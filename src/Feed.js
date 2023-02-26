import React, { useState,useEffect } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css'
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase'

function Feed() {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot=>(
            setposts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))

        ))
      

    }, [])
    
    const sendPost=e=>{
        e.preventDefault();
      

    }
  return (
    <div className="feed">
    <div className="feed_inputContainer">
        <div className="feed_input">
            <CreateIcon/>
            <form>
                <input type="text" />
                <button onClick={sendPost} type="submit">Send</button>
            </form>
        </div>
        <div className="feed_inputOptions">
            <InputOptions  Icon={ImageIcon} title="Photo" color="#70b5f9"/>
            <InputOptions  Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
            <InputOptions  Icon={EventNoteIcon} title="Video" color="#c0cbcd"/>
            <InputOptions  Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>



        </div>
    </div>
    {posts.map((post)=>{
        <Post />
    })}
    <Post name="Suresh Subedi" description="This is a test" message="Succed wow"/>
    </div>
  )
}

export default Feed