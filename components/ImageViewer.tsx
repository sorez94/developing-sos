'use client';

import { useEffect, useState } from 'react';

type ImageData = {
    id: number;
    name: string;
    image: string;
};

export default function ImageViewer() {
    const [image, setImage] = useState<ImageData | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const res = await fetch('/api/products');
                const data = await res.json();
                if (data.length > 0) {
                    setImage(data[0]);
                }
            } catch (err) {
                console.error('Error fetching image:', err);
            }
        };
        fetchImage();
    }, []);

    if (!image) return <p>در حال بارگذاری تصویر...</p>;

    return (
        <div>
            <h2>{image.name}</h2>
            <img
                src={`data:image/jpeg;base64,${image.image}`}
                alt={image.name}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
        </div>
    );
}
