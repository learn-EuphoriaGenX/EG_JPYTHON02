import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
    return (
        <div className="py-12 px-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="text-amber-600 mt-1 mr-4" size={20} />
                            <div>
                                <h3 className="font-semibold">Our Location</h3>
                                <p className="text-gray-600">
                                    400 University Drive Suite 200<br />
                                    Coral Gables, FL 33134 USA
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <FaPhone className="text-amber-600 mt-1 mr-4" size={20} />
                            <div>
                                <h3 className="font-semibold">Phone Number</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <FaEnvelope className="text-amber-600 mt-1 mr-4" size={20} />
                            <div>
                                <h3 className="font-semibold">Email Address</h3>
                                <p className="text-gray-600">hello@furniro.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>10:00 AM - 4:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2">First Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">Subject</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">Message</label>
                            <textarea
                                rows="5"
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;