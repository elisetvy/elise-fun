import { Link } from "react-router-dom";

function Foqal() {

    return (
        <div className="px-5 pt-5">
            <div className="bg-sky-500 border-4 border-black border-solid px-10 py-10">
                <Link  to="https://www.foqal.io/" target="_blank">
                    <div className="bg-slate-50 border-2 border-black border-solid px-5 py-5 text-center hover:scale-105">
                        <div className="flex justify-between gap-5">
                            <p className="text-left">Decreased time users spend searching for information and increase task completion rates</p>
                            <i className="bi bi-arrow-up-right"></i>
                        </div>
                        <div className="bg-black h-0.5 mt-1 mb-1"></div>
                        <p className="text-left font-sans text-sm">Modernized navigation appointments with plain CSS to maximize styling control, minimize dependencies for faster load times, and preserve code readability</p>
                        <p className="text-left font-sans text-xs mt-2">2023, Foqal</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Foqal;