import React from 'react'

function Contact() {
    return (
        <div>
            <section className="contact" id="contact">
                <h1 className="heading"><span>contact</span> me </h1>
                <div className="row">
                    <div className="content">
                        <h3 className="title">contact info</h3>
                        <div className="info">
                            <h3><i className="fas fa-envelope"></i> jasminetripti@gmail.com </h3>
                            <h3><i className="fas fa-phone"></i> 01616813273 </h3>
                            <h3><i className="fas fa-phone"></i> 01714577746 </h3>
                            <h3><i className="fas fa-map-marker-alt"></i> Mirpur-1, dhaka - 1216. </h3>
                        </div>
                    </div>
                    <form action="">
                        <input type="text" placeholder="name" className="box"/>
                        <input type="email" placeholder="email" className="box"/>
                        <input type="text" placeholder="project" className="box"/>
                        <textarea name="" id="" cols="30" rows="10" className="box message"
                                  placeholder="message"></textarea>
                        <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </section>
            <a href="#home" className="top">
            <img src="images/scroll-top-img.png" alt=""/>
        </a>
        </div>
    )
}

export default Contact
