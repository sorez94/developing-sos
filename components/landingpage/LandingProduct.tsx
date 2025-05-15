'use client';

import React from 'react';
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
                    className={`
                        flex 
                        flex-col-reverse lg:flex-row
                        ${item.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'}
                        my-20 lg:my-20
                        px-5 lg:px-24
                        h-auto lg:h-[400px]
                        bg-white
                    `}
                >
                    {/* متن */}
                    <div className="w-full lg:w-[30%] flex flex-col justify-center px-5 mt-4 lg:mt-0">
                        <h1 className="text-[16px] lg:text-[56px] font-black tracking-wide">
                            {item.title}
                        </h1>
                        <p className="text-[10px] lg:text-[16px] font-light tracking-widest mb-4 lg:mb-12">
                            {item.subtitle}
                        </p>
                        <ShopNowButton href={`/${locale}/product/${item.categoryPath}/${item.slug}`} />
                    </div>

                    {/* تصویر */}
                    {/* تصویر */}
                    <div className="w-full lg:w-[70%] flex justify-center lg:justify-end">
                        <div className="w-full aspect-[1020/400] lg:aspect-auto">
                            <img
                                src={item.image}
                                className="w-full h-full object-cover"
                                alt={item.title}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default LandingProduct;
