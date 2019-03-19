import React from "react";

const Home = ({ homeInfo }) => {
  return (
    <div className="clearfix" key={homeInfo.id}>
      <img align="left" className="image" src={homeInfo.photoUrls.homecard} />
      <h3>{homeInfo.title}</h3>
      <p>
        <strong>Type:&nbsp;&nbsp;</strong>
        {homeInfo.type}
      </p>
      <p>
        <strong>Price:&nbsp;&nbsp;</strong>
        {homeInfo.currencySymbol}
        {homeInfo.pricePerMonth}
      </p>
      <p>
        <strong>Type:&nbsp;&nbsp;</strong>
        {homeInfo.type}
      </p>
    </div>
  );
};

export default Home;
