
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import Body from "./Body";
import {useEffect , useState} from "react";
import Content from "./Content";
import "./style.css"
import Caraousel from "../caraousel/Caraousel";
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const [data,setData]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        const check=async()=>{
            try{
           const response= await fetch("http://localhost:4800/v1/auth/check");
           const result=await response.json();
           console.log(result);
           if(result.success){
               navigate("/");
           }
            }catch(error){
                navigate("/error");
            }
        }
        check();
    },[])
    return(
        <div className="overflow-x-hidden">
        <Nav/>
        {/* <Caraousel/> */}
        <div className="mt-10 bg-[#1e1e1e]  w-full h-5/6 bg-no-repeat bg-cover bg-contain ">
            <Content/>
        </div>
        <Body/>
        <Footer/>
        </div>
    )
}
export default Home;