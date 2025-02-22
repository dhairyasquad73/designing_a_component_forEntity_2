// write product card here
import React from "react";
import Button from "../components/button"; 

const Productcard = () => {
  
  const productImage = "https://via.placeholder.com/150"; 
  const productName = "Wireless Headphones";
  const price = "$99.99";

  return (
    <div className="max-w-sm p-4 bg-white shadow-lg rounded-xl border text-center">
      <img src={productImage} alt={productName} className="w-full rounded-lg" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">{price}</p>
      <Button /> {}
    </div>
  );
};

export default Productcard;