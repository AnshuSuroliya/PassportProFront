import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPassport } from "../../User/reducers/Verify";
import { getUser } from "../../User/reducers/Auth";
const Profile=()=>{
    
    const dispatch=useDispatch();
    const data=localStorage.getItem("email");
    
    

    
    
    useEffect(()=>{
        
         dispatch(getPassport(data));
        
        console.log(getData);
    },[])
const getData=useSelector((state)=>state.verify.GetData);
 const address=getData.passportData && getData.passportData.address;
const timestamp =getData.passportData && getData.passportData.dob; 
const validstamp=getData.passportData && getData.passportData.validity;

const date = new Date(timestamp);
const valid=new Date(validstamp);
const validYear = valid.getFullYear();
const validMonth = (valid.getMonth() + 1).toString().padStart(2, '0'); 
const validDay = valid.getDate().toString().padStart(2, '0');
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
const day = date.getDate().toString().padStart(2, '0');
return(
    <div className="bg-gradient-to-br from-zinc-200 to-zinc-100 h-screen w-full p-1">
        <Nav/>
        {getData && getData.success ?
        <div className="bg-white shadow-lg rounded-2xl w-full lg:w-5/12 md:w-8/12 sm:w-10/12 mx-auto mt-52 md:mt-32 mb-32 px-4">
            <div className="flex justify-center"><h2 className="text-slate-700 text-xl font-bold mt-2 mb-2">REPUBLIC OF INDIA</h2></div>
            <div className="flex justify-center"><img className=" w-12"src="https://www.logolynx.com/images/logolynx/18/18ee608ff01089e23b08bff3105d7589.jpeg"/></div>
            <div className="flex flex-row mt-4 mx-2"><p className="text-slate-700 font-bold mr-3">IND</p><p className="text-slate-700 font-bold mr-4">INDIAN</p><p className="text-slate-700 font-bold mr-4">PASSPORT NO.  {getData.passportData && getData.passportData.passportNumber}</p><p className="text-slate-700 font-bold">Valid Till.{validDay}/{validMonth}/{validYear}</p></div>
            <div class="grow flex sm:px-5 pt-3 pb-1 w-full mt-4">
                <img src="https://th.bing.com/th/id/OIP.ndapGeUyZ0m5iDxNQOLkBgAAAA?rs=1&pid=ImgDetMain" class="hidden sm:block w-28 bg-red-200"/>
           
                <div class="sm:flex sm:flex-col sm:px-3 w-full sm:w-8/12 ml-12">
                   
                    <div class="flex text-slate-700 text-lg mx-auto sm:mx-0 font-bold">
                        First Name : {getData.passportData && getData.passportData.firstName}
                    </div>
 
                    <div class="relative flex mt-2 text-slate-700 text-lg mx-auto sm:mx-0 font-bold">
                        Last Name : {getData.passportData && getData.passportData.lastName }
                    </div>
                    <div class="relative flex mt-2 text-slate-700 text-lg mx-auto sm:mx-0 font-bold">
                        Date of Birth : {day}/{month}/{year}
                    </div>
                     <div class="flex mt-2 text-slate-700 text-lg mx-auto sm:mx-0 font-bold">
                       
                      Place of Birth :  {address && address.city},{address && address.state}
                       
                    </div>
                    <div class="flex mt-2 text-slate-700 text-lg mx-auto sm:mx-0 font-bold">
                       
                      Contact Number :  {getData.passportData && getData.passportData.phoneNumber}
                       
                    </div>
                </div>
            </div>
        </div> :
               <div className="bg-white shadow-lg rounded-2xl lg:h-96 lg:w-5/12 mx-auto mt-32 mb-32 px-4 p-1">
                   <h2 className="flex justify-center text-3xl font-serif font-bold mt-36">Please Verify Your Passport!</h2>
                   </div>
                   }
                {/* <div className="flex flex-col bg-white shadow-lg rounded-2xl h-3/6 w-4/12 mx-auto mt-32 mb-32 px-4">
                <div className="ml-12"><h2 className="text-xl font-bold font-sans mt-12 text">First Name : <span className="text-xl">{getData.firstName}</span></h2></div>
                <div className="ml-12"><h2 className="text-xl font-bold font-sans mt-6">Last Name : {getData.lastName}</h2></div>
                <div className="ml-12"><h2 className="text-xl font-bold font-sans mt-6">Contact Number : {getData.phoneNumber}</h2></div>
                {/* <div><h2>Address</h2><p>{getData.address.addressLine1} {getData.address.addressLine1},{getData.address.addressLine2},{getData.address.city} {getData.address.state}</p></div> */}
                {/* <div className="ml-12"><h2 className="text-xl font-bold font-sans mt-6">Passport Number : {getData.passportNumber}</h2></div> */}
            {/* </div> :
            <div className="bg-white shadow-lg rounded-2xl h-3/6 w-5/12 mx-auto mt-32 mb-32 px-4 p-1"><h2 className="text-3xl font-bold font-serif mt-32 ml-8">Please Verify Your Passport!</h2></div>} */}
        {/* </div> */} 
        <Footer/>
    </div>
);
}
export default Profile;