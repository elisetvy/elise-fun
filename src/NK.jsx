import { Link } from "react-router-dom";

function NK() {

    return (
        <div className="px-5 pt-5">
            <div className="bg-orange-400 border-4 border-black border-solid px-10 py-10">
                <Link  to="https://nkagency.la/" target="_blank">
                    <div className="bg-slate-50 border-2 border-black border-solid px-5 py-5 text-center hover:scale-105">
                        <div className="flex justify-between gap-5">
                            <p className="text-left">Achieved a 122% growth in client&apos;s Instagram following in 90 days</p>
                            <i className="bi bi-arrow-up-right"></i>
                        </div>
                        <div className="bg-black h-0.5 mt-1 mb-1"></div>
                        <p className="text-left font-sans text-sm">Leveraged customer engagement tactics including timely response to messages and comments, interactive stories, and strategic partnerships with other loved brands</p>
                        <p className="text-left font-sans text-xs mt-2">2021-2022, NK Agency</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NK;