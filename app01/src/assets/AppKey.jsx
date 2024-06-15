import React, { useState } from "react";

export default function AppKey() {
  const data = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
    { id: 3, name: "product3" },
    { id: 4, name: "product4" },
    { id: 5, name: "product5" },
  ];
  const [product, setProduct] = useState(data);
  const deletE = (id) => {
    setProduct(product.filter((value) => value.id != id));
  };

  return (
    <div>
      {product.map((value, index) => {
        return (
          <div key={index}>
            {value.id}
            {value.name}
            <button onClick={()=>deletE(value.id)} className="btn btn-danger m-2">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
