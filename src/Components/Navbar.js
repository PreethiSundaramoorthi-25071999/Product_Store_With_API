import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-purple-300 text-white px-4 py-8">
            <h1 className="text-3xl font-bold ps-32 text-black uppercase">Product store</h1>
            <ul className="flex justify-between">
                <li className="me-4 text-lg font-bold text-black"><Link to="/" > Product </Link></li>
                <li className="me-4 text-lg font-bold text-black"><Link to="/cart" > Cart  </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar