import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider  } from 'firebase/auth'
import { app } from '@plugins';

const auth = getAuth(app);
let provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

class UserService {
  async signIn(userName: string, password: string) {
    const response = await signInWithEmailAndPassword(auth, userName, password);
    return (await response.user.getIdTokenResult()).token;
  }
}

export default new UserService();