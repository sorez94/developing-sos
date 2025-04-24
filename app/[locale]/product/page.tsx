import React from 'react';

const ProductSection = ({ title, mainImage, subImages, path }) => (
    <div>
        <h1 style={{ color: 'rgb(195 205 177)' }}
            className='text-[32px] md:text-[40px] px-4 md:px-10 mt-14 md:mt-20 mb-4 text-center'>
            {title}
        </h1>
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
                <img src={`/images/products/${path}/${mainImage}`} alt=""
                     className="w-full h-full object-cover px-4 md:pl-10 md:pr-14 mb-4 md:mb-0" />
            </div>
            <div className="md:w-1/2 w-full flex flex-wrap">
                {subImages.map((img, idx) => (
                    <div key={idx} className="w-1/2 flex flex-col mb-4">
                        <img src={`/images/products/${path}/${img}`} alt=""
                             className="w-full h-full object-cover px-4 md:px-10" />
                        <div className='pb-2 pt-2 text-center'>
                            <p className='text-[14px] font-black'> head </p>
                            <p className='text-[12px]'> Lorem Ipsum has been the industry's standard dummy text </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Page = () => {
    return (
        <>
            <div className='h-[50px]'></div>
            <ProductSection
                title="TABLES"
                mainImage="01.jpg"
                subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]}
                path="tables"
            />
            <ProductSection
                title="ACCESSORIES"
                mainImage="01.jpg"
                subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]}
                path="accessories"
            />
            <ProductSection
                title="MIRRORS"
                mainImage="01.jpg"
                subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]}
                path="mirrors"
            />
            <ProductSection
                title="PLATES"
                mainImage="01.jpg"
                subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]}
                path="plates"
            />
            <ProductSection
                title="POTS"
                mainImage="01.jpg"
                subImages={["02.jpg", "03.jpg", "04.jpg", "05.jpg"]}
                path="pots"
            />
            <div className='h-[50px]'></div>
        </>
    );
};

export default Page;
