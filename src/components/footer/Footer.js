import React from "react";
import "./Footer.css"


const description = "Breif description about the site";
const title = "Travel Destination Agency";



function Footer() {
    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>

            <p>&copy; 2023 My Website. All rights reserved.<span> By Husam Obeidat</span></p>
            <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>


        </>
    );
}

export default Footer;