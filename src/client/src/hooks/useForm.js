import { useState } from 'react';

function useForm(defaults = {}) {
  const [values, setValues] = useState(defaults);
//   const [queueMessage, setQueueMessage] = useState(defaults);
//   const [socketMessage, setSocketMessage] = useState(defaults);

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    Q.publish('deeds', 'work', values);
    socket.emit('words', values);

  };

  return [values, handleChange, handleSubmit];
}

export default useForm;