import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SkillRing.css";

export default function SkillRing({ skill, level }) {
    const circleRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        const circle = circleRef.current;
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        const handleScroll = () => {
            const rect = circle.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                const offset = circumference - (level / 100) * circumference;
                circle.style.strokeDashoffset = offset;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [level]);

    return (
        <div className="skill-ring" data-aos="zoom-in">
            <svg width="120" height="120">
                <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#333"
                    strokeWidth="10"
                    fill="none" />
                <circle
                    ref={circleRef}
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#2193f3"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round" />
            </svg>
            <span className="ring-text">{skill}</span>
        </div>
    );
}
