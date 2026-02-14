import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center ">People</h1>
            </div>

            <div
                className="row p-3 text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-3 text-center">
                    <img
                        src="media/images/profile use.jpg"
                        style={{ borderRadius: "100%", width: "43%" }}
                    />
                    <h4 className="mt-5">MAYANK PATEL</h4>
                    <h6>Founder</h6>
                </div>
                <div className="col-6 p-3">
                    <p>
                        Mayank built a perosnal project called StoxUp which is inspired by the discount-broking experience clean design, transparent flows, and fast execution screens. It replicates the key building blocks of a modern broker UI: watchlists, instrument search, buy/sell order forms, and portfolio/holdings views.
                    </p>
                    <p>
                        He is a 2nd Year MCA student in IET Lucknow.
                    </p>
                    <p>He loves doing adventurous activities.</p>
                    <p>
                        Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
                        <a href="">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;