import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Hero(){

    const [Open, setOpen] =useState(false);
    

    return(
        <div className="hero">
            <div className="menu" id="home">
                <button className = "butt" onClick={() => setOpen(!Open)}>MENU</button>
                {Open && (
                    <ul className="list">
                        <li>first</li>
                        <li>second</li>
                    </ul>
                )}
                <h2>I'm the fucking God of War</h2>
                <Link to="/chatbot">
                    <button>Chatbot</button>
                </Link>
                <Link to="/forum">
                    <button>Forums</button>
                </Link>
                <Link to="/resource">
                    <button>Resources</button>
                </Link>
            </div>
            
            
        </div>
    );
}

export default Hero