import { Link } from "react-router-dom";

function Landing() {

    // SOMETHING ABOUT WORLD LANGUAGES WORLD BUILDING // LEVERAGING LANGUAGE TO BUILD WORLDS. World language enthusiast's adventure into programming language.

    return (
        <div className="flex px-5 pt-5">
            <div className="bg-indigo-400 border-4 border-solid border-black w-full mr-0 px-4 py-4">
                <p className="text-2xl">HI,</p>
                <p className="text-2xl">I&apos;M ELISE.</p>
                <p className="mt-2 font-sans">Full-stack software engineer, passionate about building worlds through language and design.</p>
            <div className="flex gap-2 mt-4">
                <Link className="bg-yellow-500 px-4 py-2 rounded-full text-sm border-4 border-solid border-black hover:scale-105" to="https://github.com/elisetvy">GitHub</Link>
                <Link className="bg-yellow-500 px-4 py-2 rounded-full text-sm border-4 border-solid border-black hover:scale-105" to="https://www.linkedin.com/in/elisetvy/">LinkedIn</Link>
            </div>
            </div>
            {/* <div className="absolute bg-slate-100 border-8 border-solid border-black top-28 left-48 w-3/5 px-6 py-6">
                <p className="text-5xl">HI I&apos;M ELISE</p>
                <p className="text-yellow-500 text-5xl py-4">WEBMASTER</p>
                <p className="font-mono text-2xl">Full-stack software engineer passionate about creativity, user experience, and good times.</p>
            </div> */}
        </div>
    )
}

export default Landing;