"use client";

import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {motion} from "framer-motion";
import {Slide, toast} from "react-toastify";

import emailjs from "emailjs-com";

const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
});

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isSubmitSuccessful},
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: any) => {
        try {
            const result = await emailjs.send(
                "service_jyldxce",
                "template_probfny",
                {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                },
                "K3DmB3sl-M7nC1B2Q"
            );

            toast.success('Thank you! Your message has been sent successfully. We\'ll get back to you shortly.', {
                position: "top-center",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
            setSubmitted(true);
            reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again later.', {
                position: "top-center",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
            });
        }
    };

    return (
        <section className="px-4 sm:px-6 lg:px-20 py-16 max-w-7xl mx-auto mt-32 text-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* 🟢 Map */}
                <div className="order-2 lg:order-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5805960819325!2d51.350421999999995!3d35.6627035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e010001a27fb3%3A0x6a0b5f0c5126dc92!2z2YXYsdqp2LIg2K7YsduM2K8g2YXYr9ix2YYg2LPZhtiq2LEgTW9kZXJuIENlbnRlcg!5e0!3m2!1sen!2s!4v1747051305855!5m2!1sen!2s"
                        className="w-full h-[500px] rounded-lg border"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* 🔵 Contact Form */}
                <div className="order-1 lg:order-2">
                    <h1 className="mb-10 px-[25px] pt-[22px] pb-[24px] text-[30px] leading-[36px] text-[#4b4e53] border-l-2 border-[#4b4e53]">
                        CONTACT US
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-[#4b4e53]">
                        <div>
                            <label className="block text-xs font-semibold mb-2 tracking-wide">NAME</label>
                            <input
                                type="text"
                                {...register("name")}
                                className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-sm py-2"
                            />
                            {errors.name && (
                                <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-semibold mb-2 tracking-wide">EMAIL</label>
                            <input
                                type="email"
                                {...register("email")}
                                className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-sm py-2"
                            />
                            {errors.email && (
                                <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-gray-600">Please enter your message</label>
                            <textarea
                                rows={4}
                                {...register("message")}
                                className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-sm py-2 resize-y"
                            />
                            {errors.message && (
                                <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
                            )}
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-6 text-sm text-black hover:text-white bg-[rgb(202,215,178)] py-2 px-6 rounded hover:bg-green-700 disabled:opacity-60"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
