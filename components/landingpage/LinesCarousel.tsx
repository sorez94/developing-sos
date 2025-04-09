'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Link from "next/link";
import {useLocale} from "next-intl";

const imagePairs = [
    {main: '/images/line-carousel/image1_main.png', detail: '/images/line-carousel/image1_detail.png'},
    {main: '/images/line-carousel/image2_main.png', detail: '/images/line-carousel/image2_detail.png'},
    {main: '/images/line-carousel/image3_main.png', detail: '/images/line-carousel/image3_detail.png'},
    {main: '/images/line-carousel/image4_main.png', detail: '/images/line-carousel/image4_detail.png'},
    {main: '/images/line-carousel/image5_main.png', detail: '/images/line-carousel/image5_detail.png'},
    {main: '/images/line-carousel/image1_main.png', detail: '/images/line-carousel/image1_detail.png'},
];

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5,
    },
    tablet: {
        breakpoint: {max: 1024, min: 640},
        items: 3,
    },
    mobile: {
        breakpoint: {max: 640, min: 0},
        items: 1,
    },
};

const LinesCarousel = () => {
    const locale = useLocale();

    return (
        <div className='mt-20'>
            <h1 className='text-[60px] text-center'> PATTERNS </h1>
            <Carousel
                swipeable
                draggable
                showDots={false}
                responsive={responsive}
                ssr
                infinite
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl
                customTransition="all 3.5s"
                transitionDuration={1000}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
            >
                {imagePairs.map(({main, detail}, idx) => (
                    <Link key={idx} href={`${locale}/product`}>
                        <div key={idx} className="flex flex-col gap-5 p-2">
                            <Image src={main} alt={`main-${idx}`} width={300} height={200}/>
                            <Image src={detail} alt={`detail-${idx}`} width={300} height={20}/>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
};

export default LinesCarousel;
