import React, { useState } from "react";

function Contact({ data, setData }) {
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [feed, setFeed] = useState("");

    const handleinput1 = (e) => {
        setName(e.target.value);
    };
    const handleinput2 = (e) => {
        setMail(e.target.value);
    };
    const handleinput3 = (e) => {
        setFeed(e.target.value);
    };

    const addinputs = (e) => {
        e.preventDefault();
        if (name && email) {
            setData([...data, [name, email, feed]]);
            setName("");
            setMail("");
            setFeed("");
        }
        alert("Feedback submitted successfully!");
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{
                fontFamily: "Arial",
                backgroundColor: "lightblue",
                padding: "20px",
            }}>Contact</h1>
            <form onSubmit={addinputs} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px" }}>
                <input
                    type="text"
                    value={name}
                    onChange={handleinput1}
                    placeholder="Username"
                    required
                    style={{ width: "80%", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px" }}
                />
                <input
                    type="email"
                    value={email}
                    onChange={handleinput2}
                    placeholder="Mail id"
                    required
                    style={{ width: "80%", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px" }}
                />
                <textarea
                    value={feed}
                    onChange={handleinput3}
                    placeholder="Feedback"
                    required
                    style={{ width: "80%", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px" }}
                ></textarea>
                <button type="submit" style={{ width: "50%", padding: "10px", backgroundColor: "blueviolet", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;