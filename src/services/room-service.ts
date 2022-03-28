import { collection, getDocs } from 'firebase/firestore';
import { fireStore as db } from '@plugins';

class RoomService {
  getRooms = async () => {
    const messagesCollection = collection(db, 'rooms');
    const messagesSnapshot = await getDocs(messagesCollection);
    const messagesList = messagesSnapshot.docs.map(doc => doc.data());
    return messagesList.map(x => ({
      id: x.id,
      name: x.name
    }));
  }
}

export default new RoomService();