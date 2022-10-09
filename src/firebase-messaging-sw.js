// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyCCVg1QnCz795u4v0lrhSYagc-kRZAk2bU",
//   authDomain: "push-notifier-597eb.firebaseapp.com",
//   projectId: "push-notifier-597eb",
//   storageBucket: "push-notifier-597eb.appspot.com",
//   messagingSenderId: "860324809484",
//   appId: "1:860324809484:web:6b27881363b5343ffb9729",
// };

// function requestPermission() {
//   console.log("Requesting permission...");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");

//       const app = initializeApp(firebaseConfig);

//       const messaging = getMessaging(app);

//       getToken(messaging, {
//         vapidKey:
//           "BP2KUaauhgaWYwncUF_6t7cLYXBDiSmdMy5uzZuraXmcPI78NfTh5XV_p2YaXh2hHdmD5RcFtEYmZQrUWUrQNBg"
//       }).then((currentToken) => {
//         if (currentToken) {
//           console.log("currentToken", currentToken);
//         } else {
//           console.log("can not get token");
//         }
//       });
//     } else {
//       console.log("Do not have permission!");
//     }
//   });
// }

// requestPermission();
