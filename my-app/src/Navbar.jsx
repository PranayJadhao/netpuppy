import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'red'}}>
       <p>INQUIRE</p>
       <p>APPLY</p>
       <p>SUPPORT US</p>
       <p>|</p>
       <p>PARENTS</p>
       <p>ALUMS</p>
      </div>
    </nav>
  );
};

export default Navbar;
