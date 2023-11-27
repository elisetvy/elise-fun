function LatestProject() {

    return (
        <div className="pr-5">
            <div className="bg-indigo-500 h-screen border-t-4 border-b-4 border-r-4 border-solid border-black">
                <div className="border-8 border-solid border-black bg-slate-50 mt-24 ml-20 w-2/6 h-fit px-6 py-6 text-xl">
                    Currently Working On
                    <div className="bg-black h-1 mt-1 mb-1"></div>
                        <div className="">
                            <p className="text-sm">Love Notes</p>
                            <p className="font-mono text-sm">An app for meeting people near you.</p>
                            <ul className="list-disc font-mono text-sm px-6 py-2">
                                <li>Utilized AWS S3 for secure storage and retrieval of user-uploaded images</li>
                                <li>Implemented robust server-side and client-side validation to maintain data integrity, reduce server load caused by invalid or improperly formatted data, and improve user experience</li>
                                <li>Wrote and executed comprehensive unit and integration tests using Jest and Supertest</li>
                            </ul>
                            <div className="flex flex-wrap text-xs justify-center items-center text-center gap-2">
                                <p>JavaScript</p>
                                <p>React</p>
                                <p>Express</p>
                                <p>Node</p>
                                <p>SQL</p>
                                <p>PostgreSQL</p>
                                <p>AWS</p>
                                <p>Mapquest API</p>
                                <p>TailwindCSS</p>
                                <p>Jest</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProject;