import React, { useEffect, useState } from "react";
import "./product.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { cardData } from "../../../data/cartData";
import { UseCheckLogin } from "../../../hooks/UseCheckLogin";

const baseURL = process.env.REACT_APP_API_KEY;

const Product = ({ setCartNum }) => {
  const location = useLocation();
  const productImg = location.state;
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  // fetch products on mounted
  useEffect(()=>{
    const request = new Request(`${baseURL}/api/products?query=${productId}`,
      {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
      }
    )

    fetch(request)
    .then(res=>{
      if(res.ok)
        return res.json();
    })
    .then(data=>{
      data.image = productImg;
      setProduct(data);
    });
  }, [])

  const handelclick = () => {
    const isLogin = UseCheckLogin();
    if (!isLogin) {
      navigate("/login");
      return;
    }
    const isexsist = cardData.find((pro) => {
      return pro.Id === product.Id;
    });

    if (isexsist) {
      const index = cardData.indexOf(isexsist);
      cardData[index].quantity += 1;
    } else {
      cardData.push({
        ...product,
        quantity: 1,
      });
    }
    setCartNum(cardData.length);
  };
  return (
    <div className="container">
      <br />
      <div className="Details">
        <div className="second-column">
          <img src={product.image} alt="product img"/>
        </div>
        <div className="third-column">
          <h1>{product.Title}</h1>
          <div className="stars">
            <div>
              <i
                className="fa-solid fa-star"
                style={{ color: "rgb(253, 172, 66)" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "rgb(253, 172, 66)" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "rgb(253, 172, 66)" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "rgb(253, 172, 66)" }}
              ></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p>(150 Reviews)</p>
            <p>In Stock</p>
          </div>
          <h2 id="prise">${product.price}</h2>
          <p id="info">{product.Description}</p>
          <div className="buy-buttons">
            <button onClick={handelclick} id="buy">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
