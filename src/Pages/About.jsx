import React from 'react'
import data from '../data/data.json'
import Testimonial from '../components/Testimonial'
import Instructor from '../components/Instructor'
const About = () => {
    const { key_topics, what_to_expect } = data.course;
    const { testimonial } = data;
    return (
        <>
            <div style={{ width: "50%" }}>
                <h3>About the course</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consectetur dicta deserunt eveniet earum. Rem, ullam corporis, natus animi, velit magni explicabo ad alias cupiditate modi perspiciatis labore reiciendis quibusdam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, earum voluptatem voluptatum non vitae, totam eveniet facilis similique nulla quo quas asperiores quidem nobis! Quidem maxime inventore optio numquam culpa.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui accusantium distinctio dolorem cumque deserunt veniam nulla, ullam quaerat quo aliquam asperiores molestiae impedit ea accusamus? Perspiciatis unde qui incidunt.</p>
                <h3>What to expect from the course</h3>
                <div dangerouslySetInnerHTML={{ __html: what_to_expect.html_content }} />
                <h3>Key topics covered</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quam necessitatibus vero fuga quis animi ipsam distinctio ad. Molestiae ipsam magni tempore quod fuga explicabo doloremque blanditiis harum quo reiciendis.</p>
                <div dangerouslySetInnerHTML={{ __html: key_topics.html_content }} />
            </div>
            <Instructor />
            <Testimonial {...testimonial} />
        </>
    )
}

export default About