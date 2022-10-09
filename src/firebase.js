import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCCVg1QnCz795u4v0lrhSYagc-kRZAk2bU",
  authDomain: "push-notifier-597eb.firebaseapp.com",
  projectId: "push-notifier-597eb",
  storageBucket: "push-notifier-597eb.appspot.com",
  messagingSenderId: "860324809484",
  appId: "1:860324809484:web:6b27881363b5343ffb9729",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)