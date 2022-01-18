import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

export const addDocs = async (message) => {
  // Add a new document in collection "messages-nab"
  await addDoc(collection(db, 'messages-nab'), {
    user: localStorage.getItem('chat-username'),
    message: message,
    createdAt: serverTimestamp(),
  });
};
