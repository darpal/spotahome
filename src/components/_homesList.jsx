import React from "react";

import Home from "./_home.jsx";

const HomeList = ({ theHomes }) => {
  return (
    <ul>
      {theHomes.map(home => {
        return <Home homeInfo={home} key={home.id} />;
      })}
    </ul>
  );
};

export default HomeList;
