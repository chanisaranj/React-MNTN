import React, { useState } from 'react'
import './Content.css'

function Content() {
    return (
        <div>
            <section className="container-con">
                <div className="get">
                <div className="get-info">
                    <div className="get-title">
                    <h1>GEt Started</h1>
                    </div>
                    <div className="get-con">
                    <h2>What level of hiker are you?</h2>
                    </div>
                    <div className="get-p">
                    <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</p>
                    </div>
                    <div className="get-equip">
                    <a href="#" className="reodmore">reod more</a>
                    </div>
                </div>
                <div className="get-img">
                    <img src="img/01.jpg" alt="" />
                </div>
                </div>
                <div className="hiking">
                <div className="hiking-img">
                    <img src="img/02.jpg" alt="" />
                </div>
                <div className="hiking-info">
                    <div className="hiking-title">
                    <h1>Hiking Essentials</h1>
                    </div>
                    <div className="hiking-con">
                    <h2>Picking the right Hiking Gear!</h2>
                    </div>
                    <div className="hiking-p">
                    <p>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
                    </div>
                    <div className="hiking-equip">
                    <a href="#" className="reodmore">reod more</a>
                    </div>
                </div>
                </div>
                <div className="wyg">
                <div className="wyg-info">
                    <div className="wyg-title">
                    <h1>where you go is the key</h1>
                    </div>
                    <div className="wyg-con">
                    <h2>Understand Your Map &amp; Timing</h2>
                    </div>
                    <div className="wyg-p">
                    <p>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
                    </div>
                    <div className="wyg-equip">
                    <a href="#" className="reodmore">reod more</a>
                    </div>
                </div>
                <div className="wyg-img">
                    <img src="img/03.jpg" alt="" />
                </div>
                </div>
            </section>
        </div>
    )
}

export default Content
