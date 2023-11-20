import { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState('');
  useEffect(() => {
    let timer = setInterval(() => {
      setDateTime(new Date(Date.now()).toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <p>{ `${ dateTime }` }</p>
  );
}

export default DateTime;