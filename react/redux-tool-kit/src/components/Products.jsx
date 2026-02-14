import React from "react";
import { products } from "./data";
import toast from "react-hot-toast";

function Products({ carts, setCarts }) {


    let handleAddToCart = (id) => {
        let cartItem = products.filter(item => item.id == id)
        setCarts([
            ...carts,
            cartItem
        ])
        localStorage.setItem("carts", JSON.stringify([
            ...carts,
            cartItem
        ]))
        return toast.success('Products Add to Cart!', { position: "bottom-center" });
    }

    return (
        <div className="min-h-screen flex justify-center items-start bg-gray-100 p-6">
            <div className="flex flex-col gap-5 w-full max-w-md">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-center">Products</h2>

                {/* Product List */}
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="border bg-white flex items-center justify-between rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        {/* Left */}
                        <div>
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.category}</p>
                            <p className="text-blue-600 font-bold mt-1">
                                ₹{item.price}
                            </p>
                        </div>

                        {/* Right */}
                        <button
                            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                            onClick={() => handleAddToCart(item.id)}
                        >
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
