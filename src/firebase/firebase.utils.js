import { initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8nkT1qzcRg8ZA3N04ez8MyfnVytWdA9g",
  authDomain: "crown-x.firebaseapp.com",
  projectId: "crown-x",
  storageBucket: "crown-x.appspot.com",
  messagingSenderId: "826382746316",
  appId: "1:826382746316:web:3725570ae1caaa9586b869",
  measurementId: "G-BD4L416Z2F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    // .then((result) => { console.log(result)
    //   const name = result.user.displayName;
    //   const email = result.user.email;
    //   const profilePic = result.user.photoURL;

    //   localStorage.setItem("name", name);
    //   localStorage.setItem("email", email);
    //   localStorage.setItem("profilePic", profilePic);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
};