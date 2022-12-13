import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../customHooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/loginActions";

const Header = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <header
      style={{
        width: "100%",
        height: "75px",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid gray",
      }}>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "50px",
          }}>
          <li>
            <Link to={"/"}>Anasayfa</Link>
          </li>
          {!isAuth && (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
          {isAuth && (
            <>
              <li>
                <Link to={"/cvs"}>CVs</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    dispatch(logout());
                  }}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
