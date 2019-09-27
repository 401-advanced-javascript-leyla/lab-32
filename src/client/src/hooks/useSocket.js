import io from 'socket.io-client';

const socket = io.connect('http://localhost:3030');

function useSocket () {

  function socketSubscribe(event, callback){
    socket.on(event, callback);
  }

  function socketPublish (event, payload){
    socket.emit(event,payload);
  }

  return [socketSubscribe, socketPublish];
       
}

export default useSocket;