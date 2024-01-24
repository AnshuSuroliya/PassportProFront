import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Content=()=>{
    const navigate=useNavigate();
    const jwt=localStorage.getItem("jwt");
    const handleClick=()=>{
        if(jwt==null){
            navigate("/login");
        }
        else navigate("/verification");
    }
return(
    <div className="w-full h-full px-5 py-32 ml-12 flex flex-col lg:flex-row md:flex-row">
    <div className="w-full lg:w-96 h-65 lg:ml-12 mt-8">
        <h1 className="text-4xl lg:text-7xl text-white font-[georgia]">Welcome to PassportPro</h1>
        <p className="text-white lg:text-lg font-[georgia] mt-6 font-bold">Fast, reliable and secure passport verification online.</p>
        <button className="rounded-full bg-[#d4b13b] lg:px-10 lg:py-3 text-black mt-4 font-bold font-sans" onClick={handleClick}>Start Now</button>
        </div> 
        
        <div className="mt-6 lg:mt-0 lg:ml-36">
            <img className="rounded-2xl w-8/12 lg:w-9/12 md:w-9/12 shadow-lg" src="https://global.arizona.edu/sites/default/files/Passport%20Travel%20Image.jpg" />
        </div>
</div>
);
}
export default Content;