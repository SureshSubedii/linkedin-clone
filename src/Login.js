import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from './features/counter/userSlice';
import { auth} from './firebase'
import './Login.css'

function Login() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [profilepic, setprofilepic] = useState("");
    const dispatch=useDispatch();
    // let userAuth;
    const logIntoApp=(e)=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((userAuth)=>{
                dispatch(logIn({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL

                }))
            }
            ).catch((error)=>alert(error))
    }
    const register=()=>{
        if(!name){
            return alert("Please enter full  name!")
        }
        auth.createUserWithEmailAndPassword(email,password).then(
        (userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilepic
            })
        
        .then(()=>{
            dispatch(logIn ({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displName:name,
                photoUrl:profilepic
                

            }))
        })}).catch((error)=>{alert(error)})

    }
  return (
    <div className="login">
       <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png"></img> 
       <form>
        <input value={name} onChange={(e)=>setname(e.target.value)} placeholder="Full Name" type="text"/>
        <input value={profilepic} onChange={(e)=>setprofilepic(e.target.value)}placeholder="Profile picture Url(Optional)" type="text"/>
        <input value={email} onChange={(e)=>setemail(e.target.value)}placeholder="Email" type="email"/>
        <input value={password} onChange={(e)=>setpassword(e.target.value)}placeholder="Password" type="password"/>
        <button type="submit" onClick={logIntoApp}>Sign In</button>
        </form>
        <b>Not a member? {"  "}
        <span className="login_register" onClick={register}>Register Now</span>
        </b>
        </div>
  )
}

export default Login