import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data: { attributes: p, id } }) => {
    return (
        <Link
            href={`/product/${p.slug}`}
            className="block w-full max-w-sm mx-auto rounded-md overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
            <div className="relative h-60">
                <Image
                    src={p.thumbnail.data.attributes.url}
                    alt={p.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
                <div className="flex items-center mt-2">
                    <p className="text-lg font-bold text-gray-700">${p.price.toFixed(2)}</p>
                    {p.original_price && (
                        <>
                            <p className="ml-2 text-sm font-normal text-gray-500 line-through">${p.original_price.toFixed(2)}</p>
                            <p className="ml-auto text-sm font-medium text-green-500">{getDiscountedPricePercentage(p.original_price, p.price)}% off</p>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
