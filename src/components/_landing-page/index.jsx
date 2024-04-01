import React, { useState, useEffect } from "react";
import './index.css';
import SideName from "../../global/components/sideName/sidename";
import Person3D from "../../global/components/3D/person";
import MathDisplay from "./math";

export default function LandingPage() {
    const [showMath, setShowMath] = useState(false); // State to manage the display of MathDisplay

    useEffect(() => {
        // Set a timer to change showSlider state to true after 4 seconds
        const timer = setTimeout(() => setShowMath(true), 20000); // 20000 milliseconds = 20 seconds

        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="landing-container">
            <div className="planet">
                <Person3D />
            </div>
            <SideName />
            {/* Now the visibility is managed by React state */}
            <div className="math-div" style={{display: showMath ? 'block' : 'none'}}>
                <MathDisplay />
            </div>
        </div>
    );
}
