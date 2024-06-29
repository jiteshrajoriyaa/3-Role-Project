import { Link } from "react-router-dom";
import { Quote } from "../components/Quote";
import { Appbar } from "../components/Appbar";

export const LandingPage = () => {
    return<>
    <Appbar/>
     <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        <div className="flex flex-col justify-center items-center lg:w-9/12 h-screen">
            <div className="text-center text-3xl font-bold font-sans ">Choose The Role You Want</div>
            <div className="grid grid-rows-2 grid-cols-3 p-10 gap-x-10 gap-y-2 ">
                <Link className="bg-black hover:bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center  text-center" to={"/signup-admin"} >Sign up as an Admin</Link>
                <Link className="bg-black hover:bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center text-center" to={"/signup-client"} >Signup as a Client</Link>
                <Link className="bg-black hover:bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center text-center" to={"/signup-hotelowner"} >Signup as a Hotelowner</Link>
                <Link className="bg-black hover:bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center text-center" to={"/signin-admin"} >Signin as an Admin</Link>
                <Link className="bg-black hover:bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center text-center" to={"/signin-client"} >Signin as a Client</Link>
                <Link className="bg-black hover:bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center text-center" to={"/signin-hotelowner"} >Signin as an Hotelowner</Link>
            </div>
        </div>
        
            <div className="hidden lg:block"><Quote /></div>
    </div>
    </>
}