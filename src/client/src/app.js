import React, {useState, useEffect} from 'react';

// import io from 'socket.io-client';
import Q from '@nmq/q/client';

import useForm from './hooks/useForm';
import useSocket from './hooks/useSocket';
// import useQ from './hooks/useQ';

// Connect outside of the render cycle ...
// const socket = io.connect('http://localhost:3030');
const queue = new Q('deeds');

const App = (props) => {
  const [values, handleChange, handleSubmit] = useForm(callback);
  const [subscribe, publish] = useSocket(words,incoming,'words', 'incoming');

  const [queueMessage, setQueueMessage] = useState({});
  // const [socketMessage, setSocketMessage] = useState({});

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();

  //   Q.publish('deeds', 'work', values);
  //   socket.emit('words', values);

  // };

  function callback(values){
    Q.publish('deeds', 'work', values);
    
  }

  function words (values) {
    socket.emit('words', values);
  }

  function incoming () {
    socket.on('incoming', message => {
      setSocketMessage(message);
    });
  }

  useEffect( () => {
    queue.subscribe('work', message => {
      setQueueMessage(message);
    });

    // socket.on('incoming', message => {
    //   setSocketMessage(message);
    // });

  }, []);


  return (
    <>
      <pre>Form Values: {JSON.stringify(values)}</pre>
      <pre>Queue Values: {JSON.stringify(queueMessage)}</pre>
      <pre>Socket Values: {JSON.stringify(socketMessage)}</pre>
      <form onSubmit={handleSubmit}>
        <input name='firstName' placeholder="First Name" onChange={handleChange} />
        <input name='lastName' placeholder="Last Name" onChange={handleChange} />
        <button>Save</button>
      </form>
    </>
  );
}

export default App;

