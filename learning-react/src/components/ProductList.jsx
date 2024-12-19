import Product from "./Product";
import {useEffect, useState} from "react";
import reportWebVitals from "../reportWebVitals";





export default function ProductList() {

    const limit = 12;


    const [page, setPage] = useState(1);




    const [products, setProducts] = useState([]);
    const totalPages = Math.ceil(100 / limit);



    useEffect( ()  => {
        let skip = (page - 1) * limit;
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
    },  [page]);

    return (
        <div className="flex flex-wrap w-full p-5">
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}


            <button disabled={page === 1} onClick={() => setPage(1)}>First</button>
            <button className="p-3" onClick={() => setPage(page - 1)}>Prev</button>

            {page - 2 > 0 && <button className="p-3" onClick={() => setPage(page - 2)}>{page - 2}</button>}
            {page - 1 > 0 && <button className="p-3" onClick={() => setPage(page - 1)}>{page - 1}</button>}

            <p className="p-3 text-green-500">{page}</p>
            <button className="p-3" onClick={() => setPage(page + 1)}>{page + 1}</button>
            <button className="p-3" onClick={() => setPage(page + 2)}>{page + 2}</button>
            <button className="p-3" onClick={() => setPage(page + 1)}>Next</button>
            <button disabled={page === totalPages} onClick={() => setPage(totalPages)}>Last</button>
        </div>


    )
}


