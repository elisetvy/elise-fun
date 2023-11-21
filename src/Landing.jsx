import { Link } from 'react-router-dom';

function Landing() {

    return (
        <div className="relative">
            <div className="flex px-5 py-5 gap-4">
                <div className="flex flex-col gap-4 w-2/5">
                    <div className="h-1/6 font-mono flex justify-center items-center text-lg text-center">live laugh loving in Long Beach, California</div>
                    <div className="bg-gray-300 border-4 border-solid border-black h-1/4"></div>
                    <div className="bg-gray-300 border-4 border-solid border-black h-full"></div>
                </div>
                <div className="bg-yellow-500 border-8 border-solid border-black h-96 w-3/5 mr-0"></div>
                <div className="absolute bg-slate-100 border-8 border-solid border-black top-28 left-48 w-3/5 px-6 py-6">
                    <p className="text-5xl">HI I'M ELISE</p>
                    <p className="text-yellow-500 text-5xl py-4">WEBMASTER</p>
                    <p className="font-mono text-2xl">Full-stack software engineer passionate about creativity, user experience, and good times.</p>
                    <div className="flex gap-2 mt-8">
                        <Link className="bg-yellow-500 px-5 py-3 rounded-full border-4 border-solid border-black hover:scale-105" to="https://github.com/elisetvy">GitHub</Link>
                        <Link className="bg-yellow-500 px-5 py-3 rounded-full border-4 border-solid border-black hover:scale-105" to="https://www.linkedin.com/in/elisetvy/">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;