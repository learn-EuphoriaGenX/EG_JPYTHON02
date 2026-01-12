import React from 'react';

function Home() {
    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section className="relative  bg-gray-100 h-[500px] flex items-center">
                <div className="absolute left-50 max-w-md">
                    <h1 className="text-5xl font-bold mb-4">Rustic Vibes Furniture</h1>
                    <p className="text-gray-600 mb-6">
                        Discover furniture that combines comfort, style, and durability for your home.
                    </p>
                    <button className="bg-amber-600 text-white px-8 py-3 hover:bg-amber-700 transition">
                        Shop Now →
                    </button>
                </div>
                <div className="absolute right-50">
                    <div className="w-80 h-80 bg-amber-200 rounded-full"></div>
                </div>
            </section>

            {/* Products/Services Section */}
            <section className="py-16 px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Browse The Range</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    No Products
                </div>
            </section>
        </div>
    );
}

export default Home;