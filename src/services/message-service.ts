import { getMessaging, getToken, onMessage } from 'firebase/messaging';
const messaging = getMessaging();
class MessageService {

  test = () => {
    onMessage(messaging, (payload) => {
      console.log(payload)
    });
  }
};

export default new MessageService();