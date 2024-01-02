import React from 'react'
import img from '../imgs/img.jpg'
import fb from '../imgs/facebook.webp'
import yt from '../imgs/yt.png'
import tw from '../imgs/twitter.png'
import insta from '../imgs/instagram.webp'
const Instructor = () => {
  return (
    <div>
    <h3>About the Instructor</h3>
    <div className="container mt-3">
        <div className="row">
            <div className="col-2">
                <img src={img} className="rounded-circle" style={{ width: "100%" }} />
            </div>
            <div className="col-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ab alias, architecto, accusantium officiis harum sed, autem eos beatae est suscipit ut corrupti. Soluta libero nihil pariatur, sequi corrupti dicta.</p>
                <div className="row mt-5">
                    <div className="col">
                        <img src={fb} style={{ width: "20px" }} />
                        Facebook
                    </div>
                    <div className="col">
                        <img src={tw} style={{ width: "20px" }} />
                        Twitter
                    </div>
                </div>
            </div>
            <div className="col-5">
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorem quia, maxime id facilis accusamus vero nobis magni quam? Neque asperiores doloremque atque ullam illo inventore, sit officia vel repellendus.</p>
                <div className="row">
                    <div className="col">
                        <img src={yt} style={{ width: "20px" }} />
                        Youtube
                    </div>
                    <div className="col">
                        <img src={insta} style={{ width: "20px" }} />
                        Instagram
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Instructor