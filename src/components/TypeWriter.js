import React, { useState, useEffect } from 'react';
import '../com_css/Typewriter.css';

const TypeWriter = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 100); // Adjust the typing speed here

            return () => clearTimeout(timer);
        }
        if (currentIndex === text.length) {
            setCursorVisible(!cursorVisible);
        }
    }, [currentIndex, text]);

    return (
        <>
            <div className="typewriter">
                <div dangerouslySetInnerHTML={{ __html: displayedText }} />
                {/* {cursorVisible && <span className="cursor">_</span>} */}
            </div>
        </>
    )
}

export default TypeWriter