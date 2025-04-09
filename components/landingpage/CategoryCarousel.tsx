'use client';

import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Link from "next/link";
import { useLocale } from "next-intl";

const images = [
    { src: '/images/category-carousel/cat-02.png', text: 'Category 1' },
    { src: '/images/category-carousel/cat-03.png', text: 'Category 2' },
    { src: '/images/category-carousel/cat-04.png', text: 'Category 3' },
    { src: '/images/category-carousel/cat-02.png', text: 'Category 4' },
    { src: '/images/category-carousel/cat-03.png', text: 'Category 5' },
    { src: '/images/category-carousel/cat-04.png', text: 'Category 6' },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const CategoryCarousel = () => {
    const locale = useLocale();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='mt-20'>
            <h1 className='text-[60px] text-center' style={{color: 'rgb(195 205 177)',}}>COLLECTIONS</h1>
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
                {images.map((image, idx) => (
                    <Link key={idx} href={`/en/product`}>
                        <div
                            className="carousel-item relative overflow-hidden"
                            onMouseEnter={() => handleMouseEnter(idx)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={image.src}
                                alt={`Category ${idx + 1}`}
                                width={500}
                                height={500}
                                className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${hoveredIndex === idx ? 'filter blur-none' : 'filter blur-sm'}`}
                            />
                            <div className="absolute inset-0 flex justify-center items-center text-white text-xl font-semibold bg-black bg-opacity-50">
                                <span>{image.text}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;
