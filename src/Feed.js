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
import firebase from 'firebase/compat/app';


function Feed() {
    const [input, setinput] = useState('')
    const [posts, setposts] = useState([]);
    useEffect(() => {
        db.collection("posts").orderBy("timestamp",'desc').onSnapshot(snapshot=>(
            setposts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))

        ))
        

    }, [])
    
    const sendPost=e=>{
        e.preventDefault();
        db.collection("posts").add({
            name:'Suresh Subedi',
            description:'Test',
            message:input,
            photoUrl:'',
            timestamp:firebase.firestore.FieldValue.serverTimestamp()

        })
        setinput('')
      

    }
  return (
    <div className="feed">
    <div className="feed_inputContainer">
        <div className="feed_input">
            <CreateIcon/>
            <form>
                <input onChange={e=>{setinput(e.target.value)}} value={input} type="text" />
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
    {posts.map(({id,data:{name,description,message,photoUrl}})=>(
       <Post  key={id}
       name={name} 
       description={description}
       message={message}
       photoUrl={photoUrl}/>))}

     
    
    </div>
  )
}

export default Feed