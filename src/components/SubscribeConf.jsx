import React, { useEffect, useState } from "react";
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
      <div>Congrats!! your subscripton has been confirmed.</div>
      {subdata.length > 0 && (
        <div>
          <h2>Your Subscription details</h2>
          <div>Locked Kiss Ink lip colour 4ml</div>
          <div>£28.00</div>
          <div>Frequency - Monthly</div>
        </div>
      )}
    </>
  );
}
