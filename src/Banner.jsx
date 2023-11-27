import { useState, useEffect } from "react";

function Banner() {

    const words = ["OBJECT-ORIENTED PROGRAMMING", "DEPTH FIRST SEARCH", "GIT PUSH", "INPUT SANITIZATION", "TAIL RECURSION", "REGULAR EXPRESSION", "TEST-DRIVEN DEVELOPMENT", "CROSS-ORIGIN RESOURCE SHARING", "HASH MAP", "READ THE FUCKING MANUAL", "PASCAL'S TRIANGLE", "418 I'M A TEAPOT", "BOGOSORT", "DIJKSTRA'S ALGORITHM"];

    const [ wordIndex, setWordIndex ] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setWordIndex(prev => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="flex px-5 pt-5">
            <div className="bg-yellow-400 border-4 border-solid border-black w-full px-4 py-4 flex justify-center items-center text-center text-[8px] gap-3 sm:text-[12px] md:text-md lg:text-md">
                <p>LIVE</p>
                <p>LAUGH</p>
                <p>LOVE</p>
                <p>{words[wordIndex]}</p>
            </div>
        </div>
    )
}

export default Banner;