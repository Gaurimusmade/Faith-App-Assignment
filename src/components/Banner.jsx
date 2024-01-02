import React from 'react'
import img from '../imgs/NityanandCharanDas.avif'
import '../css/Banner.css'
const Banner = ({ props }) => {
    return (
        <div className="container p-0">
            <img src={img} alt="Nature" style={{ width: "100%", height: "300px" }} />
            <div className="cover"><div className="text-block">
                <h6>{props.name}</h6>
                <p style={{ fontSize: "28px" }}>{props.title}</p>
            </div></div>
            <div className="fees bg-light pb-4 pt-4" style={{width:"300px"}}>
                <b>Course fees</b>
                <h2>₹ 5,000</h2>
                <b>What's Included:</b>
                <ul>
                    <li>5 en-dimand videos</li>
                    <li>2 investment seminars</li>
                    <li>Live QnA session with Nityanand charan das</li>
                    <li>An active whatsapp community</li>
                </ul>
                <button className="rounded-pill pt-2 pb-2">Register today</button>
            </div>
        </div>
    )
}

export default Banner