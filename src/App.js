// import './firebase-messaging-sw'
import './App.css'
import { getToken } from 'firebase/messaging';
import { messaging } from './firebase';
import { useEffect } from 'react';



function App() {

  async function requestPermission(){
    const permission = await Notification.requestPermission();

    if(permission === 'granted'){
      const token = getToken(messaging, {
        vapidKey: 'BP2KUaauhgaWYwncUF_6t7cLYXBDiSmdMy5uzZuraXmcPI78NfTh5XV_p2YaXh2hHdmD5RcFtEYmZQrUWUrQNBg'
      });

      console.log('Token generate', token);
    }else if(permission === 'denied'){
      alert('You denied for the notification');
    }
  }

  useEffect(() => {
    requestPermission()
  }, [])
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
