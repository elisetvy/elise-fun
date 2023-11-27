import { Link } from "react-router-dom";

function Landing() {

    return (
        <div className="flex px-5 pt-5">
            <div className="bg-indigo-400 border-4 border-solid border-black w-full px-4 py-4">
                <p className="text-3xl text-yellow-500 c-stroke tracking-widest">HI,</p>
                <p className="text-3xl text-yellow-500 c-stroke tracking-widest">I&apos;M ELISE.</p>
                <p className="mt-2 font-sans">Full-Stack Software Engineer, with a background in Marketing and Language Studies. Passionate about building worlds through language and design.</p>
                <p className="mt-4 font-sans text-sm italic">For more juice ↓</p>
            <div className="flex gap-2 mt-4">
                <Link className="bg-yellow-500 px-4 py-2 rounded-full text-sm border-4 border-solid border-black hover:scale-105" to="https://www.linkedin.com/in/elisetvy/" target="_blank">LinkedIn</Link>
                <Link className="bg-yellow-500 px-4 py-2 rounded-full text-sm border-4 border-solid border-black hover:scale-105" to="https://github.com/elisetvy" target="_blank">Our 2nd Favorite Hub</Link>
            </div>
            </div>
        </div>
    )
}

export default Landing;