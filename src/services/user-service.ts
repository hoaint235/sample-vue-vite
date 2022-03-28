import { auth } from "@plugins";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

class UserService {
  signIn = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  };

  signOut = () => auth.signOut()
}

export default new UserService();