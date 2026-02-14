import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { unsetUser } from "./store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";


function Navbar({ carts, setCarts }) {
  const navigate = useNavigate();

  let dispatch = useDispatch()


  const handleLogout = () => {
    dispatch(unsetUser())
    setCarts([]);
    localStorage.removeItem("carts");
    navigate("/login");
  };

  let user = useSelector((state) => state.auth)
  console.log(user);
  

  const routes = [
    { name: "Home", path: "/", show: true },
    { name: "Products", path: "/products", show: user.isLoggedIn },
    {
      name: "Cart",
      path: "/cart",
      show: user.isLoggedIn,
      count: carts.length
    },
    { name: "Login", path: "/login", show: !user.isLoggedIn, color: "text-sky-400" }
  ];

  return (
    <nav className="w-full fixed top-0 bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        ReduxToolkit
      </Link>

      {/* Menu */}
      <ul className="flex gap-6 items-center">
        {routes
          .filter((item) => item.show)
          .map((item, idx) => (
            <li key={idx} className={item.color || ""}>
              <Link
                to={item.path}
                className="relative hover:text-gray-300"
              >
                {item.name}

                {item.count > -1 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {item.count}
                  </span>
                )}
              </Link>


            </li>
          ))}

        {/* Logout */}
        {user.isLoggedIn && (
          <li
            onClick={handleLogout}
            className="cursor-pointer text-red-400 hover:text-red-500"
          >
            Logout
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
