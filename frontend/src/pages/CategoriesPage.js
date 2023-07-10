import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Products from "../components/Products";
import { products } from "../products";

function CategoriesPage() {
    const { gender, category } = useParams();
    const breadcrumbs = [
        { name: gender, href: `/${gender}/all` },
        { name: category, href: `/${gender}/${category}` },
    ];

    return (
        <div>
            <nav aria-label="Breadcrumb" className="py-6">
                <ol
                    role="list"
                    className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    {breadcrumbs.map((breadcrumb) => (
                        <BreadCrumb breadcrumb={breadcrumb} />
                    ))}
                </ol>
            </nav>
            <Products products={products}/>
        </div>
    );
}

export default CategoriesPage;
