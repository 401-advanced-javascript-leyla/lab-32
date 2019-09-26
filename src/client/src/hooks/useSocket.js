import { useState } from 'react';
import client from 'socket.io-client';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:3030');

function useSocket (callback1, callback2, event1, event2) {
  const [socketMessage, setSocketMessage] = useState({});

  function subscribe(event1){
    //   callback(event, payload);
    if(event1){
      callback1(even1, payload1);
    }
  }

  function publish (event){
    Q.publish('deeds', 'work', values);
  }
       
}

export default useSocket;