import React from 'react'

function About() {
    return (
        <div>
            <section className="about" id="about">
                <h1 className="heading"><span>about</span> me </h1>
                <div className="row">
                    <div className="info">
                        <h3><span> name : </span> Jasmine Akter </h3>
                        <h3><span> age : </span> 22 </h3>
                        <h3><span> qualification : </span> BSC </h3>
                        <h3><span> post : </span> front end developer </h3>
                        <h3><span> language : </span> English </h3>
                        <a href="https://drive.google.com/file/d/1jou86HynNo2JxKW1FkyLFsvU5fnoGYhF/view?usp=sharing" target="_blank">
                            <button className="btn"> download CV <i className="fas fa-download"></i></button>
                        </a>
                    </div>
                    <div className="counter">
                        <div className="box">
                            <span>0.8+</span>
                            <h3>years of experience</h3>
                        </div>
                        <div className="box">
                            <span>25+</span>
                            <h3>porject completed</h3>
                        </div>
                        <div className="box">
                            <span>4+</span>
                            <h3>happy clients</h3>
                        </div>
                        <div className="box">
                            <span>6+</span>
                            <h3>certification</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
