import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navi = useNavigate();
    const navigate = () => {
        navi("/products");
    };

    return (
        <div style={{ textAlign: "center", margin: 0, border: 0 }}>
            <h1 style={{
                fontFamily: "Arial, sans-serif",
                backgroundColor: "lightblue",
                padding: "20px",
                margin: 0,
                border: 0
            }}>Home</h1>
            <section style={{
                backgroundColor: "lightpink",
                padding: "20px",
                fontSize: "40px",
                margin: 0,
                border: 0
            }}>
                Welcome to my Shopping Cart
                <p style={{
                    fontFamily: "Times New Roman, serif",
                    color: "black",
                    margin: 0,
                    border: 0
                }}>
                    This is a shopping cart where you can find all the products you need.
                </p>
            </section>
            <section>
                <button onClick={navigate} style={{
                    height: "40px",
                    width: "150px",
                    backgroundColor: "blueviolet",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginTop: "20px"
                }}>
                    View Products
                </button>
            </section>
            <footer style={{ marginTop: "20px" }}>
                Thanks for being here.
            </footer>
        </div>
    );
}

export default Home;