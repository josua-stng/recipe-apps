import { Copyright } from "lucide-react";

export default function Footer (){
    return(
        <div className="text-center flex justify-center mb-5 font-bold">
            <p>Copyright</p>
            <Copyright className="px-1 py-1 text-xs"/>
            <p>{new Date().getFullYear()} Recipes</p>
        </div>
    )
}