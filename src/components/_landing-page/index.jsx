import React from "react";
import './index.css';
import ImageSlider from "../../global/components/imageSlider/imageSlider";
import SideName from "../../global/components/sideName/sidename";
import Person3D from "../../global/components/3D/person";
import image_1 from "../../global/images/landingPage/image_1.JPG";
import image_2 from "../../global/images/landingPage/image_2.jpg";
import image_3 from "../../global/images/landingPage/image_3.JPG";
import image_5 from "../../global/images/landingPage/image_5.jpg";
export default function LandingPage() {
    const images = [
        image_1
        , image_2
        , image_3
        , image_5

    ];
    return (
        <div className="landing-container">
            <div className="slider-container">
                <ImageSlider images={images} />
            </div>
            <SideName />
            <div className="planet">
                <Person3D />
            </div>
        </div>
    );
    }
