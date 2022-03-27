import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { app } from "@plugins";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

class UserService {
  signIn = (userName: string, password: string) =>
    signInWithEmailAndPassword(auth, userName, password);

  signInWithGoogle = () => signInWithPopup(auth, provider);

  getCurrentUser = () => auth.currentUser;

  isAuthenticated = () => !!auth.currentUser;

  signOut = () => signOut(auth);
}

export default new UserService();
