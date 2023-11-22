function LatestExperience() {

    return (
        <div className="px-5 py-5">
            <div className="h-screen flex gap-4">
                <div className="bg-lime-300 w-1/2 border-4 border-solid border-black">
                    YO YO YO
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="h-fit border-8 border-solid border-black px-6 py-6 text-xl">
                        Recent Work Experience
                        <div className="bg-black h-1 mt-1 mb-1"></div>
                        <div className="">
                            <p className="text-sm">Foqal</p>
                            <p className="font-mono text-sm">Software Engineer</p>
                            <ul className="list-disc font-mono text-sm px-6 py-2">
                                <li>Revamped dropdown menu components with plain CSS for maximum styling control, code readability, and faster load times</li>
                                <li>Debugged and configured Slate text editor to preserve formatting and save content properly</li>
                                <li>Replaced Lottie assets containing inline styles with locally-downloaded static images to prevent opportunities for malicious content injection</li>
                            </ul>
                            <div className="flex flex-wrap text-xs justify-center items-center text-center gap-2">
                                <p>TypeScript</p>
                                <p>React Bootstrap</p>
                                <p>CSS</p>
                                <p>GraphQL</p>
                                <p>Slate</p>
                                <p>Lottie</p>
                                <p>Git/GitHub</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full bg-blue-600 border-4 border-solid border-black">hello</div>
                </div>
            </div>
        </div>
    )
}

export default LatestExperience;