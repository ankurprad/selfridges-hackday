import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const navigate = useNavigate();
  const handleChange = () => {
    console.log("email handle");
    setEmail();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("post subscription");
    const response = await axios.post(
      "https://py99o0nskf.execute-api.eu-west-1.amazonaws.com/prod/subscriptions",
      {
        skuId: "123",
        frequencyInMonths: "2",
        deliveryAddress: {
          line1: "1",
          line2: "street",
          city: "London",
          country: "UK",
          postcode: "UK1",
        },
        payment: {
          cardNo: "12345666666",
          name: "Mr Test",
          expiryDate: "03/25",
          cvv: "123",
        },
      },
      {
        headers: {
          Authorization: email,
        },
      }
    );
    console.log(response.data);
    if (response.status === 201) {
      navigate("/subscribeconfirm");
    }
  };
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
      <form onSubmit={handleSubmit} className="subform">
        <div className="form-field">
          <label>
            Email address &nbsp; &nbsp; &nbsp;
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="form-field">
          <label>
            Frequency &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            <select>
              <option value="1">Every Month</option>
              <option value="2">Every 2 Months</option>
              <option value="3">Every 3 Months</option>
            </select>
          </label>
        </div>
        <div className="form-field">
          <label>
            Delivery Address &nbsp; &nbsp; &nbsp;
            <input type="text" value={null} onChange={null} />
          </label>
        </div>
        <div className="form-field">
          <label>
            Add Payment Details &nbsp; &nbsp;
            <input type="text" value={null} onChange={null} />
          </label>
        </div>
        <button className="subscribebtn">Subscribe</button>
      </form>
    </>
  );
}
