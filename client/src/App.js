import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.onload = function () {
      // update the state of the component with the result here
      setData(xhr.response);
    };

    // open the request with the verb and the url
    xhr.open("GET", "/api/test");
    // send the request
    xhr.send();
  }, []);

  return (
    <div>
      <p>From server: {data}</p>
    </div>
  );
}

export default App;
