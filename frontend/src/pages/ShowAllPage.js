import React from "react";
import { useParams } from "react-router-dom";

import ShowAllBanner from '../components/ShowAllBanner'
import product, { products } from '../products';
import ProductSlider from "../components/ProductSlider";


function ShowAllPage() {
    const { gender } = useParams();
    
    return (
        // <!-- component -->
        <div>
            <ShowAllBanner/>
            <ProductSlider products={products} title={'New Arrivals'}/>
            <ProductSlider products={products} title={'Clothings'}/>
            <ProductSlider products={products} title={'Accessories'}/>
            <ProductSlider products={products} title={'Brand'}/>
        </div>
    );
}

export default ShowAllPage;
