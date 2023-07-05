import React, { useRef } from "react";

function Trending({ products }) {
    const scrollContainerRef = useRef(null);

    const scrollToRight = () => {
        scrollContainerRef.current.scrollBy({
            left: scrollContainerRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollToLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: -scrollContainerRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 relative ">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 p-4 flex items-center">
                    <span>Trending</span>
                    <span className="ml-auto text-sm text-gray-500">
                        Show All
                    </span>
                </h2>

                <div className="flex relative scrollbar-hide">
                    <div
                        className="flex space-x-4 overflow-x-auto scrollbar-hide"
                        ref={scrollContainerRef}
                    >
                        {products.map((product) => (
                            <a
                                key={product.id}
                                href={product.href}
                                className="group flex-shrink-0 w-64"
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">
                                    {product.name}
                                </h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">
                                    {product.price}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-gray-200 rounded-full h-10 w-10 cursor-pointer transition-opacity duration-300"
                    onClick={scrollToRight}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-indigo-500 hover:text-indigo-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-gray-200 rounded-full h-10 w-10 cursor-pointer transition-opacity duration-300"
                    onClick={scrollToLeft}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-indigo-500 hover:text-indigo-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Trending;
