import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({handleLogout}) => {
  return (
      <div className="fixed top-0 left-0 h-full bg-[#191919] w-1/4 pr-10 mr-0 flex flex-col items-end justify-center">
        <nav>
          <ul className = "text-lg">
            <li>
              <Link
                className="block py-3 text-white hover:text-red-600"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-white hover:text-red-600"
                to="/ladder"
              >
                Ladder
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-white hover:text-red-600"
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-white hover:text-red-600"
                to="/games"
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-white hover:text-red-600"
                to="/feedback"
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 text-white hover:text-red-600"
                to="/admin"
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
        <button className = "bg-red-500 hover:bg-red-600 py-2 px-4 text-white rounded-lg mr-20 mt-20" onClick = {() => handleLogout()}>
          Log out
        </button>
      </div>
  );
};

export default Sidebar;
