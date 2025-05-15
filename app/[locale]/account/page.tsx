'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/useAuthStore'
import { motion } from "framer-motion"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import { useLocale } from "next-intl"

const schema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
});

export default function LoginPage() {
    const login = useAuthStore((state) => state.login)
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const router = useRouter();
    const locale = useLocale();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: { userName: string, password: string }) => {
        if (data.userName === 'administrator' && data.password === 'MeymoonSag131722!!!.2000') {
            login({
                name: 'ادمین عزیز',
                role: 'مدیر سیستم',
                avatar: '/images/profile.jpg',
            })
            toast.success('Login Successfully')
            router.push(`/${locale}/dashboard`)
        } else {
            toast.error('Login failed - username or password is incorrect!')
        }
    }

    // Use useEffect to redirect if the user is already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            router.push(`/${locale}/dashboard`)
        }
    }, [isAuthenticated, router, locale]);

    return (
        <section className="px-4 sm:px-6 lg:px-20 lg:py-16 xl:py-16 2xl:py-16 max-w-7xl mx-auto lg: mt-32 xl: mt-32 2xl: mt-32 text-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="order-1 lg:order-2 bg-white text-gray p-8 rounded-lg border border-gray-300">
                    <h1 className="mb-4 text-2xl font-bold">Welcome to the SENSE OF STONE</h1>
                    <p className="text-md mb-8">Login to your account to manage your system settings.</p>
                    <div className='flex justify-center'>
                        <img src='/images/login/login.png' width='250px'/>
                    </div>
                </div>

                {/* Right side login form */}
                <div className="order-2 lg:order-1 bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="mb-10 px-[25px] pt-[22px] pb-[24px] text-[30px] leading-[36px] text-[#4b4e53] border-l-2 border-[#4b4e53]">
                        LOGIN
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div>
                            <label className="block text-xs font-semibold mb-2 tracking-wide">USERNAME</label>
                            <input
                                type="text"
                                {...register("userName")}
                                className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-sm py-2"
                            />
                            {errors.userName && (
                                <p className="text-xs text-red-600 mt-1">{errors.userName.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-semibold mb-2 tracking-wide">PASSWORD</label>
                            <input
                                type="password"
                                {...register("password")}
                                className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-sm py-2"
                            />
                            {errors.password && (
                                <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-6 w-full text-sm text-white bg-[rgb(202,215,178)] py-2 px-6 rounded hover:bg-green-700 disabled:opacity-60"
                            >
                                {isSubmitting ? "Logging in..." : "Login"}
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
