import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        onSetRating={setMovieRating}
        maxRating={5}
        messages={["Terrible", "Bad", "Ok", "Good", "Superb"]}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      size={29}
      color="red"
      maxRating={10}
      className="text"
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
