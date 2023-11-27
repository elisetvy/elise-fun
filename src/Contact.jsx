import { Link } from "react-router-dom";

function Contact() {

    return (
        <div className="flex px-5 py-5">
            <div className="bg-rose-400 w-screen border-4 border-black border-solid px-4 py-4 flex flex-col justify-center items-center text-center">
                <p className="text-yellow-500 c-stroke text-3xl tracking-widest">CONTACT</p>
                <Link className="mt-4 bg-yellow-500 px-4 py-2 rounded-full text-sm border-4 border-solid border-black hover:scale-105" to="mailto:elisetvy@gmail.com" target="_blank">Send it. <i className="bi bi-send"></i></Link>
            </div>
        </div>
    )
}

export default Contact;