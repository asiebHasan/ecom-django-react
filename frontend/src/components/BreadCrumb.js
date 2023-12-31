import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ breadcrumb }) {
    return (
        <li key={breadcrumb.id}>
            <div className="flex items-center">
                <Link
                    to={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                >
                    {breadcrumb.name}
                </Link>
                <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
            </div>
        </li>
    );
}

export default BreadCrumb;
