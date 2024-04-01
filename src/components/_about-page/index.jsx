import React from "react";
import "./index.css"
import ChatContainer from "../../global/components/OpenAi_chat";
import cowboy from "../../global/images/aboutPage/spaceCowboy.png"
const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-title">

                <h1>Everyone does a boring 'About Me' paragraph in this section,</h1>
                <h1>I trained ChatGPT to chat about me instead</h1>
            </div>
            <div className="about-body">
                <ChatContainer />
                <img src={cowboy} alt="Carlitos" className="cowboy-img"/>
            </div>

        </div>
    );
}

export default AboutPage;