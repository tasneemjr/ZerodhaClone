import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha University</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className="col-4 p-3 mt-4">
                    <img src= "Media/Images/smallcaseLogo.png"/>
                    <p className = "text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src= "Media/Images/streakLogo.png" style={{width: "30%"}}/>
                    <p className = "text-small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src= "Media/Images/sensibullLogo.svg" style={{width: "40%"}}/>
                    <p className = "text-small text-muted">Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src= "Media/Images/zerodhaFundhouse.png" style={{width: "50%"}}/>
                    <p className = "text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src= "Media/Images/goldenpiLogo.png" style={{width: "40%"}}/>
                    <p className = "text-small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-4">
                    <img src= "Media/Images/dittoLogo.png" style={{width: "25%"}}/>
                    <p className = "text-small text-muted">Options trading platform</p>
                </div>
                <button className = "p-2 btn btn-primary fs-5 mb-5 mt-4" style = {{width: "15%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;