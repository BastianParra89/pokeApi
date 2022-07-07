import React from "react";
import Footer from "../Footer/Footer";

const PokeInfoScreen = () => {
  return (
    <div>
      <header>
        <div className="container-logo">
          <img
            className="image-logo"
            src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"
            alt=""
          />
        </div>
        <div className="box-red"></div>
        <div className="box-black"></div>
      </header>


      
      <Footer/>
    </div>
  );
};

export default PokeInfoScreen;
