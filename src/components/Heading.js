import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = ()=>{
    const [btnNameReact , setBtnNameReact] = useState("Login");
    const onlineStatus=useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 sm:bg-yellow-200 lg:bg-green-70">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-10">
                    <li className="px-4">
                        Online Status : {onlineStatus ? "🤩" : "😑"}
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link> </li>
                    <li className="px-4">Cart</li>
                    <button className="login px-4" onClick={()=>{
                        btnNameReact === "Login" 
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact("Login")
                    }}
                    >
                        {btnNameReact}

                    </button>
                </ul>

            </div>
        </div>
    );
};

export default Heading;