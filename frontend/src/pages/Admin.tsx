import { useState } from "react"
import { getName } from "../components"
import { Appbar } from "../components/Appbar"
import { Greet } from "../components/Greet"
import { Panel } from "../components/Panel"

export const Admin = ()=>{
    const name = getName();
    const [flag, setFlag] = useState(false);

    return<div className="h-screen w-screen flex flex-col">
    <div>
    <Appbar/>
</div>
    <Panel name={"Admin"}/>
    <Greet name={name}/>
    <div className="ml-20 w-64 h-40 lg:w-64 lg:h-64 overflow-hidden flex flex-col">
        <img className="object-cover w-full h-full rounded-md shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjAnq_xhZoLtLwFPa1kvIlhPwdFzP-S938A&s" alt="img" />
    </div>
        <div className="ml-14 pt-4 ">{flag? <div className="ml-20 bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center w-40">Arranged</div> : <button className="ml-20 bg-black hover:bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center w-40" onClick={()=>{
            setFlag(true);
        }}>Click to Arrange</button>}</div>
    </div>
}
