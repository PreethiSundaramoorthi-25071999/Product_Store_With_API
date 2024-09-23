const CartList = ({ cart, removeFromCart, updateQuantity }) => {
    const totalPrice = cart.reduce((cartItem, item) => cartItem + item.price * item.quantity, 0) // adding itemvalue and updatequantity value
    const discountPrice = totalPrice * 0.9; // 10% discount

    // increment item value
    const Increment = (itemId) => {
        updateQuantity(itemId, (item) => item.quantity + 1)
    }

    // decrement item value 
    const Decrement = (itemId) => {
        updateQuantity(itemId, (item) => Math.max(1, item.quantity - 1))
    }

    return (
        <div>
            <div>
                <div className="flex justify-between items-center border-b-2 border-black  mx-5">
                    <h1 className="text-4xl font-bold text-black text-center p-5">Cart Items</h1>
                    <h3 className="text-green-600 text-xl font-bold uppercase text-end p-5"> <span className="text-black"> (After 10% discount)   </span> Total Price : <span className="text-3xl font-bold text-black">$ {discountPrice.toFixed(2)} </span> </h3>
                </div>
                {cart.length === 0 ? (
                    <p className="text-2xl text-red-400 font-bold uppercase mx-5 text-center p-5">Cart is empty</p>
                ) : (
                    <div className="my-4 mx-10 overflow-hidden">
                        {cart.map(item => (
                            <div key={item.id} className="flex border border-black mb-2 rounded-lg p-2">
                                <img src={item.image} alt={item.title} className="w-52 h-52 mr-4"></img>
                                <div className="text-start ps-4">
                                    <div className="mb-4">
                                        <h2 className="text-xl mb-4 font-bold text-orange-600">{item.title}</h2>
                                        <p className="text-black text-lg font-bold mb-5">$ {item.price}</p>
                                        <div className="mb-4 flex">
                                            <button onClick={() => Decrement(item.id)} className="bg-green-600 text-white border px-2 text-4xl rounded-md"> - </button>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                readOnly
                                                className="bg-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 mx-4 w-12 focus:outline-none text-center"
                                            />
                                            <button onClick={() => Increment(item.id)} className="bg-green-600 text-white border px-2 py-1 text-2xl rounded-md">+</button>
                                        </div>
                                        <p className="font-bold my-6 text-black">Total : <span className="text-black"> $ {item.price * item.quantity} </span></p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-white bg-gradient-to-r from-red-500 
                                    via-red-600 to-red-700 hover:bg-gradient-to-br 
                                    font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-4"> Remove </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartList