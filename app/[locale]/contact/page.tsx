"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section className="px-4 sm:px-6 lg:px-20 py-16 max-w-7xl mx-auto mt-32 text-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* 🟢 Map - appears second on mobile, beside form on desktop */}
                <div className="order-2 lg:order-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5805960819325!2d51.350421999999995!3d35.6627035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e010001a27fb3%3A0x6a0b5f0c5126dc92!2z2YXYsdqp2LIg2K7YsduM2K8g2YXYr9ix2YYg2LPZhtiq2LEgTW9kZXJuIENlbnRlcg!5e0!3m2!1sen!2s!4v1747051305855!5m2!1sen!2s"
                        className="w-full h-[500px] rounded-lg border"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                {/* 🔵 Contact Form - appears first on mobile */}
                <div className="order-1 lg:order-2">
                    <h1 className="mb-10 px-[25px] pt-[22px] pb-[24px] font-[300] text-[30px] leading-[36px] text-[#4b4e53] border-l-2 border-[#4b4e53] font-['Open_Sans','Arial','Helvetica','sans-serif']">
                        CONTACT <span className="font-bold">US</span>
                    </h1>

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
                            className="space-y-8 text-[#4b4e53]"
                        >
                            <div>
                                <label className="block text-xs font-semibold mb-2 tracking-wide">NAME</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-sm py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold mb-2 tracking-wide">EMAIL</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-sm py-2"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2 text-gray-600">Please enter your message</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-sm py-2 resize-y"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="mt-6 text-sm text-black hover:text-white bg-[rgb(202,215,178)] py-2 px-6 rounded hover:bg-green-700"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
