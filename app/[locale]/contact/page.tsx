"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section className="px-4 sm:px-6 lg:px-20 py-16 max-w-4xl mx-auto mt-32 text-gray-800">
            <h1 className="text-4xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-10">
                We’d love to hear from you. Whether you have a question about our products, want to collaborate, or just want to say hello — feel free to reach out.
            </p>

            {submitted ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 font-semibold text-lg"
                >
                    Thank you! Your message has been sent successfully. We'll get back to you shortly.
                </motion.div>
            ) : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                    }}
                    className="space-y-6"
                >
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            required
                            rows={5}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-800 transition-all"
                    >
                        Send Message
                    </motion.button>
                </form>
            )}
        </section>
    );
}
