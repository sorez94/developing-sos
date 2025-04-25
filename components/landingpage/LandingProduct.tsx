'use client';

import React from 'react';
import Link from 'next/link';
import landingProductData from '@/data/landingProductData';
import { useLocale } from 'next-intl';
import ShopNowButton from "@/components/ui/shopNowButton";

const LandingProduct = () => {
    const locale = useLocale();

    return (
        <>
            {landingProductData.map((item) => (
                <div
                    key={item.id}
                    className="h-[200px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] flex flex-row my-4 lg:my-20 xl:my-20 2xl:my-20 px-[20px] lg:px-[100px] xl:px-[100px] 2xl:px-[100px] px-[10px]"
                >
                    {item.align === 'right' && (
                        <div className="w-[70%] flex justify-start">
                            <img
                                src={item.image}
                                className="w-[85%] h-full object-cover"
                                alt={item.title}
                            />
                        </div>
                    )}

                    <div className="w-[30%] flex items-center justify-start px-[5px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] bg-white">
                        <div>
                            <h1 className="text-[16px] lg:text-[56px] font-black tracking-wide">{item.title}</h1>
                            <p className="text-[10px] lg:text-[16px] font-light tracking-widest mb-12">{item.subtitle}</p>
                            <ShopNowButton href={`/${locale}/product/${item.categoryPath}/${item.slug}`} />
                        </div>
                    </div>

                    {item.align === 'left' && (
                        <div className="w-[70%] flex justify-end">
                            <img
                                src={item.image}
                                className="w-[85%] h-full object-cover"
                                alt={item.title}
                            />
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default LandingProduct;