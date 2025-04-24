'use client'

import { notFound, useParams } from 'next/navigation'
import productSections from '@/data/productSections'

export default function SubProductDetailPage() {
    const { category, slug } = useParams()
    const section = productSections.find(p => p.path === category)
    if (!section) return notFound()

    const product = section.subImages.find(sub => sub.slug === slug)
    if (!product) return notFound()

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 mt-20">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-3">
                    {product.title}
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    {product.description}
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-full md:w-1/2">
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
                        <img
                            src={`/images/products/${section.path}/${product.filename}`}
                            alt={product.title}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                    {product.highlights && product.highlights.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Product Highlights</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 text-base">
                                {product.highlights.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Specifications</h2>
                        <table className="w-full border border-gray-200 text-sm text-left text-gray-700">
                            <tbody>
                            <tr className="border-b">
                                <th className="p-2 font-medium">Category</th>
                                <td className="p-2">{section.title}</td>
                            </tr>
                            <tr>
                                <th className="p-2 font-medium">Product ID</th>
                                <td className="p-2">{product.id}</td>
                            </tr>
                            <tr>
                                <th className="p-2 font-medium">Price</th>
                                <td className="p-2">{product.price}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <button className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-xl text-sm font-semibold shadow hover:bg-green-700 transition-all">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
