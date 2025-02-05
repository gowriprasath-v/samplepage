import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ display: "flex", justifyContent: "center", backgroundColor: "#333", padding: "10px" }}>
            <div style={{ margin: "0 15px" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none", fontFamily: "Arial, sans-serif", fontSize: "18px" }}>Home</Link>
            </div>
            <div style={{ margin: "0 15px" }}>
                <Link to="/about" style={{ color: "white", textDecoration: "none", fontFamily: "Arial, sans-serif", fontSize: "18px" }}>About</Link>
            </div>
            <div style={{ margin: "0 15px" }}>
                <Link to="/products" style={{ color: "white", textDecoration: "none", fontFamily: "Arial, sans-serif", fontSize: "18px" }}>Products</Link>
            </div>
            <div style={{ margin: "0 15px" }}>
                <Link to="/contact" style={{ color: "white", textDecoration: "none", fontFamily: "Arial, sans-serif", fontSize: "18px" }}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;