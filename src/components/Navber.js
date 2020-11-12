import React, { useState } from 'react'
import './Navber.css'

function Navber() {
    return (
        <div>
            <header>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <h1>MNTN</h1>
                        </div>
                        <ul>
                            <li><a href="#">Equipment</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                        <div className="nav-btn">
                            <a href="#" className="account">Account</a>
                        </div>
                    </nav>
                    <section className="header-info">
                        <div className="header-title">
                            <h1>A Hiking guide</h1>
                        </div>
                    <div className="header-content">
                        <h2>Be prepared for the Mountains and beyond!</h2>
                    </div>
                    <div className="header-equipment">
                        <a href="#" className="scrolldown">scroll down</a>
                    </div>
                    </section>
                </div>
            </header>
        </div>
    )
}

export default Navber
