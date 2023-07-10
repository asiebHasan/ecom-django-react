import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function ProductSlider({ products, title }) {
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
            <div className="mx-auto max-w-3xl  py-16  sm:py-24 lg:max-w-7xl  relative ">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 pb-4 flex items-center">
                    <span>{title}</span>
                    <span className="transition ease-in-out ml-auto text-sm text-gray-500 over:-translate-y-1 hover:scale-110 hover:text-indigo-800 duration-300">
                        Show All
                        <FontAwesomeIcon icon={faAngleRight} className="pl-2" />
                    </span>
                </h2>

                <div className="flex relative scrollbar-hide">
                    <div
                        className="flex space-x-4 overflow-x-auto scrollbar-hide"
                        ref={scrollContainerRef}
                    >
                        {products.map((product) => (
                            <Link
                                to={`/products/${product.id}`}
                                key={product.id}
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
                            </Link>
                        ))}
                    </div>
                </div>
                <button
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-gray-200 rounded-full h-10 w-10 cursor-pointer transition-opacity hover:scale-110 duration-300"
                    onClick={scrollToRight}
                >
                    <FontAwesomeIcon icon={faAngleRight}  className="h-8 w-8 text-gray-500 hover:text-indigo-500" />
                </button>
                <button
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-gray-200 rounded-full h-10 w-10 cursor-pointer transition-opacity hover:scale-110 duration-300"
                    onClick={scrollToLeft}
                >
                    <FontAwesomeIcon icon={faAngleLeft}  className="h-8 w-8 text-gray-500 hover:text-indigo-500" />
                </button>
            </div>
        </div>
    );
}

export default ProductSlider;
