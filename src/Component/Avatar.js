import React from "react";
import "../Component/Avatar.css";

function App({ image }) {
  return <img className="card-img" src={image} alt="" style={{ width: 100 }} />;
}
export default App;
