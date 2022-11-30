import React, {useEffect, useState} from "react";


function App() {

  const [message, setMesssage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
    .then(res => res.json())
    .then(data => setMesssage(data[0].Message));
  }, [])

  return (
    <div>
      {message}
    </div>
  )
}

export default App;