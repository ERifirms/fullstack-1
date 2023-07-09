import React, { useState, useEffect } from "react";

const Items = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const response = await fetch("http://localhost:8000/api/products");
    const data = await response.json();
    setProducts(data);
  };
  return (
    <div>
      {Products.map((product) => (
        <div className="">
          <img src={product.imgUrl} alt="" />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
