import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
          <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p className="pt-2 text-sm text-cyan-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
            <IoCall className="text-black-300 text-xl"/>
            <span>(+91) 897836372 </span>
            </div>
            <div className="inline-flex space-x-2 items-center">
            <IoMdMail className="text-black-300 text-xl"/>
            <span> xyz@gmail.com </span>
            </div>
            <div className="inline-flex space-x-2 items-center">
            <FaLocationDot  className="text-black-300 text-xl"/>
            <span> Faridabad </span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
          <Link to="/contact"><FaFacebookF /></Link>
          <Link to="/contact"><FaInstagram /></Link>
          <Link to="/contact"><FaXTwitter /></Link>
          </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
              <form className="flex flex-col space-y-4">
                <div>
                    <label className="text-sm">Your Name</label>
                  <input type="text" placeholder="Your Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 
                  outline-none focus:ring-2 focus:ring-teal-300"></input>
                </div>
                <div>
                    <label className="text-sm">Email Address</label>
                  <input type="email" placeholder="Your Email" className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 
                  outline-none focus:ring-2 focus:ring-teal-300"></input>
                </div>
                <div>
                    <label className="text-sm">Message</label>
                  <textarea placeholder="Message" rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 
                  outline-none focus:ring-2 focus:ring-teal-300"></textarea>
                </div>
                <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact;