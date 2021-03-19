import React from 'react'

function Portfolio() {
    return (
        <div>
            <section className="portfolio" id="portfolio">
                <h1 className="heading"> my <span>portfolio</span></h1>
                <div className="box-container">
                    <div className="box">
                        <a href="https://rb.gy/c4ygcc" target="_blank">
                            <img src="images/lucid.png" alt=""/>
                        </a>
                    </div>
                    <div className="box">
                        <a href="https://rb.gy/fdhruy" target="_blank">
                            <img src="images/bubt-wiki.png" alt=""/>
                        </a>
                    </div>
                    <div className="box">
                        <a href="https://rb.gy/6t0bza" target="_blank">
                            <img src="images/axit.png" alt=""/>
                        </a>
                    </div>
                    <div className="box">
                        <a href="https://rb.gy/txcjs0" target="_blank">
                            <img src="images/strict.png" alt=""/>
                        </a>
                    </div>
                    <div className="box">
                        <a href="https://rb.gy/dilqne" target="_blank">
                            <img src="images/bst-mode.png" alt=""/>
                        </a>
                    </div>
                    <div className="box">
                        <a href="https://rb.gy/ycqoc4" target="_blank">
                            <img src="images/mail-card.png" alt=""/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
