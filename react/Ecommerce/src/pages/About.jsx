import React from 'react';

function About() {
    return (
        <div className="py-12 px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Furniro</h1>

            <div className="mb-12">
                <div className="bg-gray-200 h-96 rounded-lg mb-8"></div>
                <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                    Founded in 2010, Furniro began with a simple mission: to create beautiful,
                    functional furniture that stands the test of time. What started as a small
                    workshop in Florida has grown into a trusted name in home furnishings.
                </p>
                <p className="text-gray-700">
                    We combine traditional craftsmanship with modern design, ensuring every
                    piece is not only aesthetically pleasing but also built to last.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-6 border rounded-lg">
                    <div className="text-4xl mb-4">🏭</div>
                    <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
                    <p className="text-gray-600">Every piece is carefully crafted by skilled artisans.</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                    <div className="text-4xl mb-4">🌿</div>
                    <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
                    <p className="text-gray-600">We use ethically sourced, sustainable materials.</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                    <div className="text-4xl mb-4">🚚</div>
                    <h3 className="text-xl font-semibold mb-2">Nationwide Delivery</h3>
                    <p className="text-gray-600">Free shipping on orders over $500.</p>
                </div>
            </div>
        </div>
    );
}

export default About;