import React from 'react'
import person from '../imgs/person.jpg'
const Testimonial = (testimonial) => {
    return (
        <div className='bg-light text-center mt-5' style={{ padding: "40px 100px 10px 100px" }}>
            <p className='fw-bold fs-5'>"{testimonial.text}"</p>
            <div className="container" style={{ width: "50%" }}>
                <div className="row">
                    <div className="col-4">
                        <img src={person} className="rounded-circle" style={{ width: "100%", height: "40%" }} />
                    </div>
                    <div className="col-8">
                        <b style={{ fontSize: "12px" }}>{testimonial.reviewer_name}</b>
                        <p style={{ fontSize: "10px" }}>{testimonial.reviewer_designation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial