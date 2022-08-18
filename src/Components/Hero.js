import React from "react";
import "../Hero.css";
import banner from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import maker from "../images/client-maker.svg";
import meet from "../images/client-meet.svg";

function Hero(){
    return(

        // put all the hero contents in a div
<main className="main">


     <div className="hero">

        <div className="title">
            <h1>Make remote work</h1>
      
        </div>

        <div className="description">
            <h2 className="description-text"> 
            Get your team in sync no matter your location.
            Streamline processes, create team rituals and watch
            productivity soar.
            </h2>
        </div>

        <div className="button">
            <button className="btn">Learn more</button>
        </div>

        <div className="clients">

{/* put the logos in a span tag */}
        <span>
        <img src={databiz} className="logos" alt="client" />
        <img src={audiophile} className="logos" alt="client" />
        <img src={meet} className="logos" alt="client" />
        <img src={maker} className="logos" alt="client" />

        </span>

        </div>
 </div>

 <div className="banner">

    <img src={banner} alt="banner" className="pic"/>

 </div>
 </main>

    )
}

export default Hero