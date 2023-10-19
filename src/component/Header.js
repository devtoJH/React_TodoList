import React from "react";

const Header = () => {
  console.log('Header 업데이트');
  return <div className="Header">
    <h3>Today is 📅</h3>
    <h1>{new Date().toDateString()}</h1>
  </div>
};

export default React.memo(Header);