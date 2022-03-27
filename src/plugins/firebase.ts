// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence, browserPopupRedirectResolver, User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore, getFirestore, getDocs, collection } from "firebase/firestore";
import { computed, onUnmounted, ref } from "vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIgpCed1TKjJPu_nKLcqp5jj9qz5XL-lE",
  authDomain: "vue-firebase-453b8.firebaseapp.com",
  projectId: "vue-firebase-453b8",
  storageBucket: "vue-firebase-453b8.appspot.com",
  messagingSenderId: "601647863206",
  appId: "1:601647863206:web:f02fca29df7db4dfdc2b67",
  measurementId: "G-6L8P9S6KZN"
};

console.log('[Firebase] Initializing...')
// Initialize Firebase

const initFirebase = () => initializeApp(firebaseConfig);

initFirebase(); 

const app = initFirebase();
const fireStore = initializeFirestore(app, {});
const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});
const analytics = getAnalytics(app);

console.log('[Firebase] Initialized');

const useAuth = () => {
  const user = ref<User | null>(null);
  const unsubcribe = auth.onAuthStateChanged(_user => (user.value = _user));
  onUnmounted(unsubcribe);

  const isAuthenticated = computed(() => user.value !== null);

  const onSignIn = async () => {
     const googleProvider = new GoogleAuthProvider();
     await signInWithPopup(auth, googleProvider);
  }

  const onSignOut = async () => {
    await auth.signOut();
  }

  return {
    user,
    isAuthenticated,
    onSignIn,
    onSignOut
  };
}

const db = getFirestore(app);

const useMessages = async () => {
  const messages = ref<string[]>([]);
  const messagesCollection = collection(db, 'messages');
  const messagesSnapshot = await getDocs(messagesCollection);
  const messagesList = messagesSnapshot.docs.map(doc => doc.data());
  return messagesList;
}

export {
  firebaseConfig as config,
  app,
  auth,
  analytics,
  useAuth
}