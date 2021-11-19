import React, { Component, useState, useEffect } from "react";

function About() {
  const [aboutContent, setaboutContent] = useState("About Us Static Data");
  var [count, setcount] = useState(0);

  useEffect(() => {
    setaboutContent("Dynamic Data");
    console.log("useEffect Called Again");
  }, [aboutContent]);

  const abc = () => {
    console.log("abc called");
    setaboutContent("Changed");
    // setcount(++count);
  };

  const xyz = () => {
    setcount(++count);
  };

  return (
    <div>
      <p>
        {" "}
        {aboutContent} - {count}
      </p>
      <button onClick={abc}>Change Data</button>

      <button onClick={() => setcount(++count)}>Change Count</button>
    </div>
  );
}

export default About;
