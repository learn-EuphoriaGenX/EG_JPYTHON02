import React, { useEffect, useState } from "react";

function Cart({ carts, setCarts }) {
  let [myCarts, setMyCarts] = useState([]);

  // Merge duplicates
  let cartRefresh = () => {
    let merged = carts.reduce((acc, item) => {
      let existing = acc.find((x) => x[0].id === item[0].id);
      if (existing) {
        existing.qty += 1;
      } else {
        acc.push({ ...item, qty: 1 });
      }
      return acc;
    }, []);
    setMyCarts(merged);
  };
  console.log(myCarts);


  useEffect(() => {
    cartRefresh();
  }, [carts]);

  // Remove item
  const handleRemove = (id) => {
    let updated = carts.filter((item) => item[0].id !== id);
    setCarts(updated);
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 bg-gray-100 p-6">
      {myCarts.map((item) => (
        <div
          key={item[0].id}
          className="border w-[400px] bg-white flex items-center justify-between rounded-lg p-4 shadow-sm hover:shadow-md transition"
        >
          {/* Left */}
          <div>
            <h3 className="text-lg font-semibold">{item[0].name}</h3>
            <p className="text-sm text-gray-500">{item[0].category}</p>

            <div className="flex items-center gap-4 mt-2">
              <p className="text-blue-600 font-bold">₹{item[0].price}</p>
              <p className="text-sm text-gray-500">
                Quantity: {item.qty}
              </p>
            </div>
          </div>

          {/* Right */}
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
            onClick={() => handleRemove(item[0].id)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total */}
      <h2 className="text-2xl font-bold text-center">
        Total Price: ₹
        {myCarts.reduce((total, item) => total + item[0].price * item.qty, 0)}
      </h2>
    </div>
  );
}

export default Cart;
