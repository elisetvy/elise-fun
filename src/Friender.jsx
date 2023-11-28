import { Link } from "react-router-dom";

function Friender() {

    return (
        <div className="px-5 pt-5">
            <div className="bg-emerald-400 border-4 border-black border-solid px-10 py-10">
                <Link  to="https://github.com/elisetvy/friender-frontend" target="_blank">
                    <div className="bg-slate-50 border-2 border-black border-solid px-5 py-5 text-center hover:scale-105">
                        <div className="flex justify-between gap-5">
                            <p className="text-left">Enforced data integrity and reduced server load caused by invalid or improperly formatted data</p>
                            <i className="bi bi-arrow-up-right"></i>
                        </div>
                        <div className="bg-black h-0.5 mt-1 mb-1"></div>
                        <p className="text-left font-sans text-sm">Established server-side validation mechanisms, combining JSON Schema and tailored logic checks before database insertion, and client-side form validation with informative feedback to facilitate accurate data input</p>
                        <p className="text-left font-sans text-xs mt-2">2023, Friender</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Friender;