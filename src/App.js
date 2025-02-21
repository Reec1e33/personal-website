import React, { useEffect } from "react";
import "./style.css"; // Import styles
import particlesConfig from "./particlesConfig"; // Import particles config

function App() {
    useEffect(() => {
        const loadParticles = async () => {
            if (!window.particlesJS) {
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
                script.async = true;
                script.onload = () => {
                    if (window.particlesJS) {
                        window.particlesJS("particles-js", particlesConfig);
                    } else {
                        console.error("particlesJS failed to load");
                    }
                };
                document.body.appendChild(script);
            } else {
                window.particlesJS("particles-js", particlesConfig);
            }
        };

        loadParticles();
    }, []);

    return (
        <div>
            {/* Background Particle Effect */}
            <div id="particles-js"></div>

            {/* Main Content */}
            <div className="content">
                <h1>Hello! Reece Roskam</h1>
            </div>
        </div>
    );
}

export default App;
