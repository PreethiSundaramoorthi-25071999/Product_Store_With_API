
const ProductList = ({ product, addToCart, cart, removeFromCart }) => {
    const inCart = cart.some(item => item.id === product.id)

    return (
        <>
            <div className="w-72 border rounded-lg text-black font-semibold text-center overflow-hidden m-5">
                <img src={product.image} alt={product.title} className="w-full h-80"></img>
                <div className="p-5">
                    <h2 className="mb-4">{product.title}</h2>
                    <p className="mb-4">$ {product.price}</p>
                    <p className="mb-4">Description : <span className="font-normal overflow-hidden"> {product.description} </span></p>
                    {
                        inCart ? (
                            <button onClick={() => removeFromCart(product.id)} className="text-black bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4">Remove</button>
                        ) : (
                            <button onClick={() => addToCart(product)} className="text-black bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4">Add To Cart</button>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ProductList