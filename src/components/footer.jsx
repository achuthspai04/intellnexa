import React from "react";  
import './footer.css';

function Footer() {

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <button className="intellnexa-button" onClick={() => window.open("https://wa.me/917907451370?text=Hey, I wanted to schedule a call to know more about Intellnexa's courses and services.", "_blank")}>
                        <img src="./f1.svg" alt="best corporate training in kerala"/>
                    </button>

                    <button className="instagram" onClick={() => window.open("https://www.instagram.com/intellnexa/", "_blank")}>
                        <img src="./f2.svg" alt="best courses for food technology in kerala"/>
                    </button>

                    <button className="instagram" onClick={() => window.open("https://www.instagram.com/intellnexa/", "_blank")}>
                        <img src="./f3.svg" alt="best courses for food technology in kerala"/>
                    </button>
                </div>
            </div>
            <p className="rights">© 2025 Intellnexa</p>
            <a href="https://api.whatsapp.com/send?phone=918921307519&text=Hi, I want to know if you could build a website/software for me" className="quon">Crafted @ QUON</a>
        </div>
    );

}
export default Footer;