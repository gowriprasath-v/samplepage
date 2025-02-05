import React from "react";

function About({ data }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{
                fontFamily: "Arial",
                backgroundColor: "lightblue",
                padding: "20px",
            }}>About</h1>
            <div>
                <table style={{
                    width: "80%",
                    margin: "20px auto",
                    borderCollapse: "collapse",
                    border: "1px solid #ddd"
                }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f2f2f2" }}>
                            <th style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                                textAlign: "center"
                            }}>S.No</th>
                            <th style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                                textAlign: "center"
                            }}>Name</th>
                            <th style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                                textAlign: "center"
                            }}>Email</th>
                            <th style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                                textAlign: "center"
                            }}>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((dat, index) => (
                            <tr key={index} style={{ backgroundColor:"#fff" }}>
                                <td style={{
                                    padding: "10px",
                                    border: "1px solid #ddd"
                                }}>{index + 1}</td>
                                <td style={{
                                    padding: "10px",
                                    border: "1px solid #ddd"
                                }}>{dat[0]}</td>
                                <td style={{
                                    padding: "10px",
                                    border: "1px solid #ddd"
                                }}>{dat[1]}</td>
                                <td style={{
                                    padding: "10px",
                                    border: "1px solid #ddd"
                                }}>{dat[2]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default About;