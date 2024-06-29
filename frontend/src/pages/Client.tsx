import { useState } from "react"
import { getName } from "../components"
import { Appbar } from "../components/Appbar"
import { Greet } from "../components/Greet"
import { Panel } from "../components/Panel"

export const Client = ()=>{
    const name = getName();
    const [flag, setFlag] = useState(false);

    return<div className="h-screen w-screen flex flex-col">
    <div>
    <Appbar/>
</div>
    <Panel name={"Client"}/>
    <Greet name={name}/>
    <div className="ml-20 w-64 h-40 lg:w-64 lg:h-64 overflow-hidden flex flex-col">
        <img className="object-cover w-full h-full rounded-md shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJng4IapUPF8iVokWOAmEFoCde9w3EDSopBA&s" alt="img" />
    </div>
        <div className="ml-14 pt-4 ">{flag? <div className="ml-20 bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center w-40">Booked</div> : <button className="ml-20 bg-black hover:bg-gray-600 text-white p-2 font-sans rounded-md font-semibold flex justify-center w-40" onClick={()=>{
            setFlag(true);
        }}>Book</button>}</div>
    </div>
}
