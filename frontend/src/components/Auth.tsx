import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

interface AuthProps {
    type: "signup" | "signin";
}

export const Auth: React.FC<AuthProps> = ({ type}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [postInputs, setPostInputs] = useState({
        email: "",
        password: "",
        name: "",
        role: ""
    })

    async function sendRequest() {
        setLoading(true);
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? `signup` : `signin`}`, postInputs)
            setLoading(false);
            const token = response.data.token;
            localStorage.setItem("token", "Bearer " + token);
            navigate(`/${postInputs.role}`);
        } catch (e) {
            alert("Error while signing up")
        } finally {
            setLoading(false);

        }
    }

    return <div className="flex flex-col justify-center items-center lg:w-7/12 h-screen" >
        <div className="w-9/12 flex gap-y-8	flex-col">
            <div className="flex flex-col gap-y-5">

        <div className="text-center text-3xl font-bold font-sans ">
                    {type === "signup" ? "Create an account" : "Welcome back"}
                </div>
                <div className="text-center text-slate-500	 text-1xl font-semibold font-sans ">
                    {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                    <Link className="underline pl-2" to={type === "signin" ? "/signup": "/signin"}>{type === "signin" ? "Sign Up": "Sign In"}</Link>
                </div>
        </div>


                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="mySelect">Choose an option:</label>
                    <select className="border-2 border-gray-200 rounded-md p-1 pl-3 mt-1 w-full font-medium focus:outline-none focus:border-blue-200" id="mySelect" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            role: e.target.value
                        })
                    }}>
                        <option value="">Select an option</option>
                        <option value="client">Client</option>
                        <option value="hotelowner">Hotel Owner</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>


                {type === "signup" ? <InputHeadingWithPlaceholder label="Name" placeholder="Enter your name" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : <></>}
                <InputHeadingWithPlaceholder label="Email" placeholder="Enter your email id" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }} />
                <InputHeadingWithPlaceholder label="Password" type="password" placeholder="........." onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />


                <button
                    onClick={sendRequest}
                    className="bg-black hover:bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center" >{loading ? (
                        <svg
                            className="animate-spin h-5 w-5 mr-3 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                        </svg>
                    ) : (type === "signup" ? "Sign Up" : "Sign In")}</button>
            </div>
            <div className="text-center text-slate-500	 text-sm pt-10 font-sm font-sans">Click "Signin" or "Signup" to agree to our Terms of Service and acknowledge that our Privacy Policy applies to you.</div>
        </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: any) => void;
    type?: string
}
const InputHeadingWithPlaceholder = ({ label, type, placeholder, onChange }: LabelledInputType) => {
    return <div className="flex flex-col">
        <div className="font-semibold">{label}</div>
        <div >
            <input className="border-2 border-gray-200 rounded-md p-1 pl-3 mt-1 w-full font-medium focus:outline-none focus:border-blue-200"
                onChange={onChange}
                type={type || "text"}
                placeholder={placeholder} />
        </div>
    </div>
}

