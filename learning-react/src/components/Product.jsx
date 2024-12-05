export default function Product(probs) {
    const product = probs.product;
    return (
        <div className="w-1/4 p-5">
            <img src={product.thumbnail}/>
            <h2 className="font-bold">{product.title}</h2>
            <p  className="text-grey-200">{product.description}</p>
            <p className=" text-black ">$ {product.price}</p>
        </div>
    )
}