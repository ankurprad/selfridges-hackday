import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Product.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Product() {
  const products = [
    {
      brand: "MAC",
      desc: "Locked Kiss Ink lip colour 4ml",
      price: "£28.00",
      img: "https://images.selfridges.com/is/image/selfridges/R04116926_BLUSHING_M?$PDP_M_ZOOM$",
    },
  ];
  const [subscribe, setSubscribe] = useState(false);
  const navigate = useNavigate();
  const onOptionChange = (e) => {
    setSubscribe(!subscribe);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit handle", subscribe);
    if (subscribe) {
      navigate("/subscribe");
    }
  };

  return (
    <>
      {/* <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.selfridges.com/GB/en/features/dam/en_gb/content/images/selfridges-logo.svg"
              width="180"
              height="180"
              className="d-inline-block align-top"
            />{" "}
            Selfridges
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <div className="maincontainer">
        <div className="sm-header">
          Sign up to Selfridges+ for free deliveries
        </div>
        <hr className="hr1" />
        <img
          alt=""
          src="https://www.selfridges.com/GB/en/features/dam/en_gb/content/images/selfridges-logo.svg"
          width="145"
          height="25"
          className="brand-img"
        />
        <hr className="hr1" />
        <div className="productcontainer">
          {products.map((product) => {
            return (
              <>
                <div>
                  <img
                    src={product.img}
                    alt="Product"
                    width="400"
                    height="500"
                    className="singleproduct"
                  />
                  <div style={{ fontWeight: "bold" }}>{product.brand}</div>
                  <div>{product.desc}</div>
                  <div>{product.price}</div>
                </div>
                <div>
                  <div className="formcontainer">
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <label className="lbl">
                        <input
                          type="radio"
                          value="Onetime"
                          checked={!subscribe}
                          onChange={onOptionChange}
                          className="radiob"
                        />
                        One time purchase
                      </label>
                      <label className="lbl">
                        <input
                          type="radio"
                          checked={subscribe}
                          onChange={onOptionChange}
                          className="radiob"
                        />
                        Subscribe & Save
                      </label>
                      <button className="subscribebtn">
                        {subscribe ? "Subscribe" : "Add to bag"}
                      </button>
                    </form>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
