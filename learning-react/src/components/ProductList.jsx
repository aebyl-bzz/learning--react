import Product from "./Product";
import {useEffect, useState} from "react";



export default function ProductList() {

    const limit = 12;


    const [page, setPage] = useState(1);




    const [products, setProducts] = useState([]);



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

            <Pagination
                page={page}
                setPage={setPage}
                maxPage={100}
            />

            <button className="p-3" onClick={() => setPage(page - 1)}>Prev</button>
            <button className="p-3" onClick={() => setPage(page - 2)}>{page - 2}</button>
            <button className="p-3" onClick={() => setPage(page - 1)}>{page - 1}</button>
            <p className="p-3 text-green-500">{page}</p>
            <button className="p-3" onClick={() => setPage(page + 1)}>{page + 1}</button>
            <button className="p-3" onClick={() => setPage(page + 2)}>{page + 2}</button>
            <button className="p-3" onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}


