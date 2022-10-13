import { useState } from "react";

function App() {
  const [headersDisplay, setHeadersDisplay] = useState([]);
  const [url, setUrl] = useState("");
  let headersPair = [];
  const submitHandler = async (url) => {
    fetch(url)
      .then((res) => {
        for (const header of res.headers) {
          headersPair.push(header);
        }
        console.log(headersPair);
      })
      .then((data) => {
        console.log(data);
        const newheadersDisplay = headersPair.map((header, index) => {
          return <p key={index}>{`${header[0]}:${header[1]}`}</p>;
        });
        setHeadersDisplay(newheadersDisplay);
      })
      .catch((err) => {
        setHeadersDisplay("unable to get headers");
      });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(url);
        }}
        action=""
      >
        <label htmlFor="HTTP ADRESS">HTTP(S)-URL:</label>
        <input
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          name="HTTP ADRESS"
          id="HTTP ADRESS"
        />
        <button type="submit">Submit</button>
      </form>
      <div>{headersDisplay}</div>
    </div>
  );
}

export default App;
