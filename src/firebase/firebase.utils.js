import { initializeApp} from "firebase/app";
import { getFirestore, getDoc, setDoc, doc, onSnapshot } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user: ', error.message);
    }
  }

  return userRef;
}

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
};

export const onsnapshot = onSnapshot;
export const createuserWithEmailAndPassword = createUserWithEmailAndPassword;
export const signinWithEmailAndPassword = signInWithEmailAndPassword;