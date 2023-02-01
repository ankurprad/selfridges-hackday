import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
export default function SubscribeConf() {
  const [subdata, setSubdata] = useState([]);
  useEffect(() => {
    async function getSubData() {
      const response = await axios.get(
        "https://py99o0nskf.execute-api.eu-west-1.amazonaws.com/prod/subscriptions"
      );
      console.log(response.data);
      setSubdata(response.data);
    }
    getSubData();
  }, []);
  return (
    <>
      <div className="sm-header">
        Sign up to Selfridges+ for free deliveries
      </div>
      <hr className="hr1" />
      <Link to="/">
        <img
          alt=""
          src="https://www.selfridges.com/GB/en/features/dam/en_gb/content/images/selfridges-logo.svg"
          width="145"
          height="25"
          className="brand-img"
        />
      </Link>
      <hr className="hr1" />
      <div className="subconfcontainer">
        <h1 style={{ textAlign: "center" }}>
          Congrats!! your subscripton has been confirmed.
        </h1>
        <hr />
        {subdata.length > 0 && (
          <div>
            <h3>Your Subscription details</h3>
            <hr />
            <div>Locked Kiss Ink lip colour 4ml</div>
            <div>£28.00</div>
            <div>Frequency - Monthly</div>
          </div>
        )}
      </div>
    </>
  );
}
