import React from "react";

function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Furniro.</h2>
                    <p className="text-gray-500 text-sm leading-6">
                        400 University Drive Suite 200 Coral Gables,
                        FL 33134 USA
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-gray-400 text-sm mb-4">Links</h3>
                    <ul className="space-y-3 text-sm font-medium">
                        <li className="hover:text-gray-500 cursor-pointer">Home</li>
                        <li className="hover:text-gray-500 cursor-pointer">Shop</li>
                        <li className="hover:text-gray-500 cursor-pointer">About</li>
                        <li className="hover:text-gray-500 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="text-gray-400 text-sm mb-4">Help</h3>
                    <ul className="space-y-3 text-sm font-medium">
                        <li className="hover:text-gray-500 cursor-pointer">Payment Options</li>
                        <li className="hover:text-gray-500 cursor-pointer">Returns</li>
                        <li className="hover:text-gray-500 cursor-pointer">Privacy Policies</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-gray-400 text-sm mb-4">Newsletter</h3>
                    <div className="flex gap-3">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="border-b border-gray-300 outline-none text-sm w-full"
                        />
                        <button className="text-sm font-semibold border-b border-black">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t py-4 text-center text-sm text-gray-500">
                2023 furniro. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
