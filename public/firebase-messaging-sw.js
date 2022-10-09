importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
// import { initializeApp } from 'firebase/app';
// import { messaging } from './../src/firebaseInit';

const firebaseConfig = {
  apiKey: "AIzaSyCCVg1QnCz795u4v0lrhSYagc-kRZAk2bU",
  authDomain: "push-notifier-597eb.firebaseapp.com",
  projectId: "push-notifier-597eb",
  storageBucket: "push-notifier-597eb.appspot.com",
  messagingSenderId: "860324809484",
  appId: "1:860324809484:web:6b27881363b5343ffb9729",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
})