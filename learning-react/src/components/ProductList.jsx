import Product from "./Product";
import {useEffect, useState} from "react";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect( ()  => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
    },  []);

    return (
        <div className="flex flex-wrap w-full p-5 ">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            )) }
        </div>
    )
}