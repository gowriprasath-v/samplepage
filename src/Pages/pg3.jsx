import React, { useEffect, useState } from "react";

import image1 from "../assets/Image 1.jpg";
import image2 from "../assets/Image 2.jpg";
import image3 from "../assets/Image 3.jpg";
import image4 from "../assets/Image 4.jpg";
import image5 from "../assets/Image 5.jpg";

function Products() {
    const images = [image1, image2, image3, image4, image5];
    const [index,setIndex] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() =>
            {
                setIndex((index) =>(index + 1) % images.length);
            },4000);
            return () => clearInterval(timer);
    },[]);

    return <>
        <div>
        <img src={images[index]} alt={`Slide ${index + 1}`} height="300" style={{display:"block", margin:"auto",borderRadius:"10px",objectFit:"contain",marginTop:"20px"}}/>
        </div>
    </>
}
export default Products;