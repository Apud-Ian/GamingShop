import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SearchButton from "./SearchButton.jsx";
import useCartStore from "../store/useCartStore";
const NavBar = () => {
    const items = useCartStore((state) => state.items);
    return (
        <nav className="bg-purple-950 p-4 text-2xl text-gray-200 justify-between flex items-center">
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-50 cursor-pointer hover:underline">GaimingHome</a></li>
            </ul>
            <ul className="flex space-x-4">
                <li><SearchButton /></li>
                <li>
              <NavLink to="/cart" >
                <div className="relative text-gray-200 hover:text-white cursor-pointer">
                  <FaShoppingCart />
                  {items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-violet-600  rounded-full text-xs w-5 h-5 flex items-center justify-center">
                      {items.length}
                    </span>
                  )}
                </div>
              </NavLink>
              </li> 
            </ul>
        </nav>
    )
}


export default NavBar;