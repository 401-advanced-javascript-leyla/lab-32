import Q from '@nmq/q/client';


function useQ (q) {
  const queue = new Q(q);
  
  function qSubscribe (event, callback) {
    queue.subscribe(event, (payload) => {
      callback(payload);
    });  
  } 

  function qPublish (q, event, message) {
      Q.publish(q, event, message);  
  }

  return [qSubscribe, qPublish];
}

export default useQ;