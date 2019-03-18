import React from "react";

const Home = ({ homeInfo }) => {
  return <li key={homeInfo.id}>{homeInfo.title}</li>;
};

export default Home;
