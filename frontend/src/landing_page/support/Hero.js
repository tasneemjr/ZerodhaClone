import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-5 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className = "mt-3 mb-3" placeholder="Eg. how do I activate F&O, why is my order getting rejected.." />
          <br />
          <a href="">Track account opening</a>
          <a href="" style = {{marginLeft: "20px"}}>Track segment activation</a>
          <a href="" style = {{marginLeft: "20px"}}>Intraday<br/> margins</a>
          <a href="" style = {{marginLeft: "20px"}}>Kite user manual</a>
        </div>
        <div className = "col-1"></div>
        <div className="col-6 p-3">
          <h1 className="fs-3" style = {{lineHeight: "30px"}}>Featured</h1>
          <ol>
            <li className = "" style = {{lineHeight: "50px"}}>
              <a href="">Current Takeovers and Delisting - January 2026</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;