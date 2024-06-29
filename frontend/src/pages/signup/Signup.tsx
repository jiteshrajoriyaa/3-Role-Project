import { Appbar } from "../../components/Appbar"
import { Auth } from "../../components/Auth"
import { Quote } from "../../components/Quote"

export const Signup = ()=>{
    return (
        <div>
        <Appbar/>
    <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        <Auth type={"signup"}/>
            <div className="hidden lg:block"><Quote/></div>
        </div>
        </div>
        </div>
    )
}
