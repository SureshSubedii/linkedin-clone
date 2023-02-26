import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDSkr6HDTsWn3yPF9Q_LKMS6JVjGnOU2lA",
    authDomain: "linkedin-clone-3136d.firebaseapp.com",
    projectId: "linkedin-clone-3136d",
    storageBucket: "linkedin-clone-3136d.appspot.com",
    messagingSenderId: "202251866564",
    appId: "1:202251866564:web:9a847ddffb1b81fe3b9491"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth()
  export{db,auth}